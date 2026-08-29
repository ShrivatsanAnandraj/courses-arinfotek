export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { language, code } = req.body

  if (!language || !code) {
    return res.status(400).json({ error: 'Language and code are required' })
  }

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
    csharp: { language: 'csharp', versionIndex: '4' },
    ruby: { language: 'ruby', versionIndex: '4' },
    go: { language: 'go', versionIndex: '3' },
    kotlin: { language: 'kotlin', versionIndex: '4' },
    typescript: { language: 'typescript', versionIndex: '1' },
    html: { language: 'html', versionIndex: '0' },
    css: { language: 'css', versionIndex: '0' },
  }

  const langConfig = languageMap[language]
  if (!langConfig) {
    return res.status(400).json({ error: `Unsupported language: ${language}` })
  }

  try {
    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientId,
        clientSecret,
        script: code,
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
