import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'username is required' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);

    const attempts = await sql`
      SELECT DISTINCT ON (a.test_id) a.test_id, a.score, a.total, a.submitted_at, t.title, t.test_code, t.subject, t.course
      FROM attempts a
      JOIN tests t ON a.test_id = t.id
      WHERE a.student_register_id = ${username}
      ORDER BY a.test_id, a.submitted_at DESC
    `;

    return res.status(200).json({ attempts });
  } catch (error) {
    console.error('Error fetching attempts:', error);
    return res.status(500).json({ error: 'Failed to fetch attempts' });
  }
}