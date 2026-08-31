import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL)

async function migrate() {
  console.log('Creating courses tables...')

  await sql`
    CREATE TABLE IF NOT EXISTS course_categories (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      slug VARCHAR(100) UNIQUE NOT NULL,
      icon VARCHAR(50),
      description TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS courses (
      id SERIAL PRIMARY KEY,
      category_id INT REFERENCES course_categories(id) ON DELETE CASCADE,
      title VARCHAR(200) NOT NULL,
      slug VARCHAR(200) UNIQUE NOT NULL,
      certification_code VARCHAR(20),
      description TEXT,
      difficulty VARCHAR(20) DEFAULT 'beginner',
      estimated_hours INT DEFAULT 0,
      total_lessons INT DEFAULT 0,
      order_num INT DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS lessons (
      id SERIAL PRIMARY KEY,
      course_id INT REFERENCES courses(id) ON DELETE CASCADE,
      title VARCHAR(200) NOT NULL,
      slug VARCHAR(200) NOT NULL,
      domain VARCHAR(200),
      content TEXT,
      key_concepts JSONB DEFAULT '[]',
      examples JSONB DEFAULT '[]',
      key_points JSONB DEFAULT '[]',
      pro_tips JSONB DEFAULT '[]',
      order_num INT DEFAULT 0,
      has_lab BOOLEAN DEFAULT FALSE,
      lab_url TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      UNIQUE(course_id, slug)
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS course_progress (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      lesson_id INT REFERENCES lessons(id) ON DELETE CASCADE,
      completed BOOLEAN DEFAULT FALSE,
      completed_at TIMESTAMPTZ,
      UNIQUE(user_id, lesson_id)
    )
  `

  await sql`CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category_id)`
  await sql`CREATE INDEX IF NOT EXISTS idx_lessons_course ON lessons(course_id)`
  await sql`CREATE INDEX IF NOT EXISTS idx_course_progress_user ON course_progress(user_id)`

  console.log('Courses tables created successfully!')
}

migrate().catch(console.error)
