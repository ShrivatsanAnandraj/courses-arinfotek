export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { language, code, executor } = req.body

  if (!language || !code) {
    return res.status(400).json({ error: 'Language and code are required' })
  }

  // OneCompiler API for Python advanced execution
  if (executor === 'onecompiler' || (language === 'python' && executor === 'onecompiler')) {
    const apiKey = process.env.ONECOMPILER_API_KEY
    if (!apiKey) {
      return res.status(500).json({ error: 'OneCompiler API key not configured' })
    }

    try {
      const response = await fetch('https://api.onecompiler.com/v1/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify({
          language: 'python',
          stdin: '',
          files: [{ name: 'main.py', content: code }]
        })
      })

      const result = await response.json()

      if (result.status === 'success') {
        return res.status(200).json({
          output: result.stdout || '',
          error: result.stderr || result.exception || '',
        })
      } else {
        return res.status(400).json({ error: result.stderr || result.exception || 'Execution failed' })
      }
    } catch (error) {
      return res.status(500).json({ error: `OneCompiler error: ${error.message}` })
    }
  }

  // JDoodle for other languages
  const clientId = process.env.JDOODLE_CLIENT_ID
  const clientSecret = process.env.JDOODLE_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    return res.status(500).json({ error: 'JDoodle API credentials not configured. Please set JDOODLE_CLIENT_ID and JDOODLE_CLIENT_SECRET environment variables.' })
  }

  const languageMap = {
    python: { language: 'python3', versionIndex: '0' },
    javascript: { language: 'nodejs', versionIndex: '5' },
    java: { language: 'java', versionIndex: '4' },
    c: { language: 'c', versionIndex: '5' },
    cpp: { language: 'cpp', versionIndex: '5' },
    csharp: { language: 'csharp', versionIndex: '6' },
    ruby: { language: 'ruby', versionIndex: '4' },
    go: { language: 'go', versionIndex: '3' },
    kotlin: { language: 'kotlin', versionIndex: '5' },
    typescript: { language: 'typescript', versionIndex: '1' },
    html: { language: 'html', versionIndex: '0' },
    css: { language: 'css', versionIndex: '0' },
  }

  const langConfig = languageMap[language]
  if (!langConfig) {
    return res.status(400).json({ error: `Unsupported language: ${language}` })
  }

  let script = code

  if (language === 'csharp' && !code.includes('class ')) {
    script = `class Program { static void Main() { ${code} } }`
  }

  if (language === 'kotlin') {
    if (code.includes('class ')) {
      script = code
    } else {
      const body = code.replace(/fun main\s*\([^)]*\)\s*\{/, '').replace(/\}\s*$/, '').trim()
      script = `class JDoodle {\n  companion object {\n    @JvmStatic\n    fun main(args: Array<String>) {\n      ${body}\n    }\n  }\n}`
    }
  }

  try {
    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientId,
        clientSecret,
        script,
        language: langConfig.language,
        versionIndex: langConfig.versionIndex,
      }),
    })

    const result = await response.json()

    if (response.ok) {
      return res.status(200).json({
        output: result.output || '',
        error: result.error || '',
        statusCode: result.statusCode,
        memory: result.memory,
        cpuTime: result.cpuTime,
      })
    } else {
      return res.status(response.status).json({ error: result.error || 'Execution failed' })
    }
  } catch (error) {
    return res.status(500).json({ error: `Execution error: ${error.message}` })
  }
}
