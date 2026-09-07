import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code, action, courses } = req.query;

  try {
    const sql = neon(process.env.DATABASE_URL);

    if (action === 'list') {
      if (!courses) {
        return res.status(400).json({ error: 'Courses are required' });
      }
      const list = courses.split(',').map((c) => c.trim()).filter(Boolean);
      if (list.length === 0) {
        return res.status(400).json({ error: 'Courses are required' });
      }
      const patterns = list.map((c) => `%${c}%`);
      const tests = await sql`SELECT id, title, subject, course, level, topics, test_code, duration_minutes FROM tests WHERE (course = ANY(${list}::text[]) OR title ILIKE ANY(${patterns}::text[])) ORDER BY id`;
      return res.status(200).json({ tests });
    }

    if (action === 'attempts') {
      const { username } = req.query;
      if (!username) {
        return res.status(400).json({ error: 'username is required' });
      }
      const attempts = await sql`
        SELECT DISTINCT ON (a.test_id) a.test_id, a.score, a.total, a.submitted_at, t.title, t.test_code, t.subject, t.course
        FROM attempts a
        JOIN tests t ON a.test_id = t.id
        WHERE a.student_register_id = ${username}
        ORDER BY a.test_id, a.submitted_at DESC
      `;
      return res.status(200).json({ attempts });
    }

    if (action === 'delete') {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'id is required' });
      }
      const found = await sql`SELECT id, test_code FROM tests WHERE id = ${Number(id)}`;
      if (found.length === 0) {
        return res.status(404).json({ error: 'Test not found' });
      }
      const code = found[0].test_code;
      await sql`DELETE FROM attempts WHERE test_id = ${Number(id)}`;
      await sql`DELETE FROM tab_flags WHERE test_code = ${code}`;
      await sql`DELETE FROM tests WHERE id = ${Number(id)}`;
      return res.status(200).json({ success: true });
    }

    if (!code) {
      return res.status(400).json({ error: 'Test code is required' });
    }

    const upperCode = code.toUpperCase();

    const testResult = await sql`SELECT id, title, subject, course, level, topics, test_code, duration_minutes FROM tests WHERE test_code = ${upperCode}`;

    if (testResult.length === 0) {
      return res.status(404).json({ error: 'Invalid test code' });
    }

    const test = testResult[0];

    const questions = await sql`SELECT id, question_text, options FROM questions WHERE test_id = ${test.id} ORDER BY id`;

    return res.status(200).json({ test, questions });
  } catch (error) {
    console.error('Error fetching test:', error);
    return res.status(500).json({ error: 'Failed to fetch test' });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};