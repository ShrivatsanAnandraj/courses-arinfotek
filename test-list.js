const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);
(async () => {
  try {
    const r = await sql(
      "SELECT id, title, subject, course, level, topics, test_code, duration_minutes FROM tests WHERE (course = ANY($1::text[]) OR course = '' OR course = 'General') ORDER BY id",
      ['python']
    );
    console.log('OK', JSON.stringify(r));
  } catch (e) {
    console.error('ERR', e.message);
  }
})();