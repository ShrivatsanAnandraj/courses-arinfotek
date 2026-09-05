import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL);
try {
  const list = ['python'];
  const r = await sql`SELECT id, title, subject, course, level, topics, test_code, duration_minutes FROM tests WHERE (course = ANY(${list}::text[]) OR course = '' OR course = 'General') ORDER BY id`;
  console.log('OK-TAG', JSON.stringify(r));
} catch (e) {
  console.error('ERR-TAG', e.message);
}