import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'arinfotek'

function isAuthorized(req) {
  const key = req.headers['x-admin-key']
  return key === ADMIN_PASSWORD
}

async function listStudents() {
  const users = await sql`SELECT id, username, email, password_hash, created_at FROM users ORDER BY created_at DESC`

  const activationsRes = await sql`SELECT user_id, course FROM user_activations`
  const activationsByUser = {}
  for (const row of activationsRes) {
    if (!activationsByUser[row.user_id]) activationsByUser[row.user_id] = []
    activationsByUser[row.user_id].push(row.course)
  }

  const progressRes = await sql`SELECT user_id, language, COUNT(*)::int AS completed FROM progress WHERE completed = TRUE GROUP BY user_id, language`
  const progressByUser = {}
  for (const row of progressRes) {
    if (!progressByUser[row.user_id]) progressByUser[row.user_id] = {}
    progressByUser[row.user_id][row.language] = row.completed
  }

  return users.map(u => ({
    id: u.id,
    username: u.username,
    email: u.email,
    password: Buffer.from(u.password_hash, 'base64').toString('utf8'),
    activations: activationsByUser[u.id] || [],
    progress: progressByUser[u.id] || {},
    created_at: u.created_at
  }))
}

export default async function handler(req, res) {
  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const { method } = req

  if (method === 'GET') {
    try {
      const students = await listStudents()
      return res.status(200).json({ students })
    } catch (error) {
      console.error('Admin list students error:', error)
      return res.status(500).json({ error: 'Failed to load students' })
    }
  }

  if (method === 'POST') {
    const { user_id, courses } = req.body || {}
    if (!user_id || !Array.isArray(courses)) {
      return res.status(400).json({ error: 'user_id and courses array are required' })
    }
    try {
      await sql`DELETE FROM user_activations WHERE user_id = ${user_id}`
      for (const course of courses) {
        await sql`INSERT INTO user_activations (user_id, course) VALUES (${user_id}, ${course}) ON CONFLICT DO NOTHING`
      }
      const students = await listStudents()
      return res.status(200).json({ ok: true, students })
    } catch (error) {
      console.error('Admin set activations error:', error)
      return res.status(500).json({ error: 'Failed to update activations' })
    }
  }

  if (method === 'DELETE') {
    const { user_id } = req.body || {}
    if (!user_id) {
      return res.status(400).json({ error: 'user_id is required' })
    }
    try {
      const result = await sql`DELETE FROM users WHERE id = ${user_id} RETURNING id`
      if (result.length === 0) {
        return res.status(404).json({ error: 'Student not found' })
      }
      const students = await listStudents()
      return res.status(200).json({ ok: true, students })
    } catch (error) {
      console.error('Admin delete student error:', error)
      return res.status(500).json({ error: 'Failed to delete student' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
