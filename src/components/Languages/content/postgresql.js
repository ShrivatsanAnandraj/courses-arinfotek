const postgresql = {
  // ==================== INTRO LEVEL ====================
  intro: {
    definition: 'PostgreSQL is a relational database — a program that stores your data in tidy tables and lets you ask questions about it using SQL.',
    whyUse: 'Databases run the real world: banks store your account balance, IRCTC stores train seats, Amazon stores orders. This very website (courses.arinfotek.co.in) uses PostgreSQL to store your students, their progress, and their test scores. Whenever an app must remember data after the page closes, a database like PostgreSQL does the job.',
    whereUse: null,
    syntax: null,
    explanation: 'PostgreSQL (also called "Postgres") is free, open source, and has been developed since 1986 — nearly 40 years of testing. You store data in tables (like Excel sheets) and ask questions with SQL commands such as SELECT, INSERT, UPDATE, and DELETE. It runs on Windows, Linux, and macOS, and is famous for being extremely reliable and safe.',
    examples: [
      { title: 'What SQL Looks Like', code: '-- Ask the database a question\nSELECT name, marks FROM students WHERE marks > 80;', output: ' name   | marks\n--------+-------\n Anita  |    92\n Suresh |    85\n(2 rows)' },
      { title: 'Where You Will Use It', code: '-- Real tables behind everyday apps:\n-- Bank        → accounts, transactions\n-- Instagram   → users, posts, likes\n-- Your site   → students, progress, tests\nSELECT \'This is how apps remember data!\' AS message;', output: '            message\n----------------------------------\n This is how apps remember data!\n(1 row)' },
      { title: 'PostgreSQL vs Others', code: '-- PostgreSQL strengths in one query\nSELECT feature, reason FROM (VALUES\n  (\'Free and open source\', \'No license cost\'),\n  (\'Very reliable\', \'35+ years of battle testing\'),\n  (\'Handles complex data\', \'JSON, arrays, full text search\')\n) AS t(feature, reason);', output: '       feature        |        reason\n----------------------+-------------------------\n Free and open source | No license cost\n Very reliable        | 35+ years of battle test\n Handles complex data | JSON, arrays, full text\n(3 rows)' },
      { title: 'Your First Taste of SQL', code: 'SELECT 2 + 2 AS answer, now() AS current_time;', output: ' answer |          current_time\n--------+-------------------------------\n      4 | 2026-01-15 10:30:00.123456+05\n(1 row)' }
    ],
    keyPoints: ['PostgreSQL stores data in tables (rows and columns).', 'You talk to it using SQL commands.', 'It is free, open source, and used by banks, governments, and startups.'],
    commonMistakes: ['Confusing PostgreSQL (the database) with SQL (the language you speak to it).', 'Thinking databases live "in the cloud only" — they can run on your own machine too.'],
    proTips: ['SQL works on PostgreSQL, MySQL, and most databases — learning it once pays off everywhere.', 'This website itself runs on PostgreSQL — you are already using it!']
  },
  setup: {
    definition: 'To start learning, you need three things: the PostgreSQL server, a command-line tool (psql), and a graphical tool (pgAdmin).',
    whyUse: 'Real developers keep these three tools ready: the server stores data, psql is the fast keyboard tool for quick queries, and pgAdmin (or DBeaver) is the visual tool for browsing tables. Students who set up their environment once can practice anywhere — college lab, home PC, or a free cloud database.',
    whereUse: null,
    syntax: null,
    explanation: 'Install PostgreSQL from postgresql.org — during setup you set a password for the superuser (keep it safe, default user is "postgres"). The installer also adds psql to your PATH. Open a terminal, type psql -U postgres, enter your password, and you are connected. pgAdmin opens like a website in your browser and lets you click around tables visually.',
    examples: [
      { title: 'Connect with psql', code: '# Run in terminal / command prompt\npsql -U postgres\n# Then inside psql:\n\\l          -- list databases\n\\q          -- quit', output: 'List of databases\n------------------\n postgres\n template0\n template1\n school        (your own database)' },
      { title: 'Create Your Practice Database', code: '-- Run inside psql after connecting\nCREATE DATABASE practice;\n\\c practice   -- connect to it\nSELECT current_database();', output: ' current_database\n------------------\n practice\n(1 row)' },
      { title: 'Check Your Version', code: 'SELECT version();', output: ' PostgreSQL 16.2 (Debian 16.2-1.pgdg120+1) on x86_64...' },
      { title: 'pgAdmin (Visual Tool)', code: '-- After installing pgAdmin:\n-- 1. Open pgAdmin from the Start menu\n-- 2. Right-click Servers → Register → Server\n-- 3. Host: localhost  Port: 5432\n-- 4. Save, expand, and browse your tables by clicking', output: 'A visual list of databases and tables appears' },
      { title: 'Quick Check Everything Works', code: 'SELECT \'Setup complete!\' AS status, current_user AS logged_in_as;', output: '     status     | logged_in_as\n----------------+-------------\n Setup complete! | postgres\n(1 row)' }
    ],
    keyPoints: ['psql = command line tool, pgAdmin = visual tool.', 'Default port is 5432, default superuser is "postgres".', 'CREATE DATABASE makes a new database; \\c connects to it.'],
    commonMistakes: ['Forgetting the postgres password set during installation.', 'Running queries in the wrong database — check with \\c first.'],
    proTips: ['Free cloud option: Neon.tech gives you a free PostgreSQL database in the browser — no install needed.', 'psql backslash commands (\\l, \\c, \\dt) are shortcuts, not SQL — do not add a semicolon.']
  },
  concepts: {
    definition: 'A database server holds many databases. Each database holds tables. Each table holds rows (records) and columns (fields).',
    whyUse: 'This mental model prevents confusion later. When you design an app, you decide: one table for students, one for courses, one for marks. Banks separate accounts from transactions; Instagram separates users from posts. Thinking in tables first makes every SQL command obvious.',
    whereUse: null,
    syntax: null,
    explanation: 'Think of a server as a building, a database as a room, a table as a cupboard, a column as a labelled shelf (name, marks, email), and a row as one student\'s record. Every row has a unique id called the PRIMARY KEY — like a roll number — so no two rows can be confused, even if everything else is identical.',
    examples: [
      { title: 'See the Structure', code: '-- A table is rows + columns\n-- students table example:\n-- | id | name  | marks |\n-- |----|-------|-------|\n-- | 1  | Ravi  | 85    |\n-- | 2  | Anita | 92    |\nSELECT \'id, name, marks are columns\' AS note;', output: '             note\n-------------------------------\n id, name, marks are columns\n(1 row)' },
      { title: 'Primary Key = Roll Number', code: 'CREATE TABLE students (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL,\n  marks INT\n);\nINSERT INTO students (name, marks) VALUES (\'Ravi\', 85);\nINSERT INTO students (name, marks) VALUES (\'Anita\', 92);\nSELECT * FROM students;', output: ' id | name  | marks\n----+-------+-------\n  1 | Ravi  |    85\n  2 | Anita |    92\n(2 rows)' },
      { title: 'One-to-Many: Student and Marks', code: '-- One student can have many subject marks\n-- That is why marks live in a SEPARATE table\nCREATE TABLE subjects (\n  id SERIAL PRIMARY KEY,\n  student_id INT REFERENCES students(id),\n  subject TEXT,\n  score INT\n);\nINSERT INTO subjects VALUES (DEFAULT, 1, \'Math\', 88);\nSELECT s.name, sub.subject, sub.score\nFROM students s JOIN subjects sub ON s.id = sub.student_id;', output: ' name | subject | score\n------+---------+-------\n Ravi | Math    |    88\n(1 row)' },
      { title: 'Database → Tables → Rows', code: 'SELECT current_database() AS database,\n       \'students\' AS table_name,\n       2 AS rows_count;', output: ' database | table_name | rows_count\n----------+------------+------------\n practice | students   |          2\n(1 row)' }
    ],
    keyPoints: ['Server → Database → Table → Row → Column.', 'PRIMARY KEY uniquely identifies every row.', 'Related data goes in separate tables, linked by id.'],
    commonMistakes: ['Putting everything in one giant table — it becomes messy fast.', 'Using email or phone as primary key — they can change; use an id.'],
    proTips: ['Name tables in plural: students, orders, courses.', 'Always design your tables on paper before writing SQL.']
  },
  select: {
    definition: 'SELECT is how you read data. It asks the database: "give me these columns from this table".',
    whyUse: 'Every report, search result, and dashboard is a SELECT: "show me all students who scored above 80", "list today\'s orders", "find my unread messages". SELECT is the most-used SQL command — you will write it thousands of times.',
    whereUse: null,
    syntax: null,
    explanation: 'The basic shape is: SELECT columns FROM table. Use * to pick all columns, or name the ones you need (faster and clearer). You can compute new values in a SELECT too — like marks + 5 or name || \' (Student)\'. Order matters: SELECT first, then FROM.',
    examples: [
      { title: 'Select All Columns', code: 'SELECT * FROM students;', output: ' id | name  | marks\n----+-------+-------\n  1 | Ravi  |    85\n  2 | Anita |    92\n(2 rows)' },
      { title: 'Select Specific Columns', code: 'SELECT name FROM students;', output: ' name\n------\n Ravi\n Anita\n(2 rows)' },
      { title: 'Compute While Selecting', code: 'SELECT name, marks, marks + 5 AS bonus_marks\nFROM students;', output: ' name  | marks | bonus_marks\n-------+-------+-------------\n Ravi  |    85 |          90\n Anita |    92 |          97\n(2 rows)' },
      { title: 'Rename Columns with AS', code: 'SELECT name AS student, marks AS score\nFROM students;', output: ' student | score\n---------+-------\n Ravi    |    85\n Anita   |    92\n(2 rows)' },
      { title: 'Combine Text', code: 'SELECT name || \' scored \' || marks AS result\nFROM students;', output: '       result\n---------------------\n Ravi scored 85\n Anita scored 92\n(2 rows)' }
    ],
    keyPoints: ['SELECT picks columns, FROM picks the table.', '* means all columns — fine for learning, name columns in real projects.', 'AS renames a column or gives a computed value a name.'],
    commonMistakes: ['Typing columns before SELECT or forgetting FROM.', 'Using * in huge production tables — it wastes memory.'],
    proTips: ['Always alias computed columns: marks + 5 AS bonus — readable output.', 'Run SELECT * first to see the table, then choose the columns you need.']
  },
  where: {
    definition: 'WHERE filters rows. It tells the database: "only give me rows that match this condition".',
    whyUse: 'Nobody wants all 10,000 rows — banks show only YOUR account, Netflix shows only YOUR watchlist, teachers see only students who FAILED. WHERE is how every app narrows data down to what matters right now.',
    whereUse: null,
    syntax: null,
    explanation: 'Put the condition after WHERE: WHERE marks > 80. The database checks every row and returns only the ones where the condition is true. You can combine conditions with AND / OR, use IN for a list of values, BETWEEN for a range, and LIKE for text patterns.',
    examples: [
      { title: 'Simple Condition', code: 'SELECT name, marks FROM students WHERE marks > 86;', output: ' name  | marks\n-------+-------\n Anita |    92\n(1 row)' },
      { title: 'AND / OR', code: 'SELECT name, marks FROM students\nWHERE marks >= 80 AND name <> \'Ravi\';', output: ' name  | marks\n-------+-------\n Anita |    92\n(1 row)' },
      { title: 'IN (Match a List)', code: 'SELECT name FROM students\nWHERE name IN (\'Ravi\', \'Anita\', \'Suresh\');', output: ' name\n------\n Ravi\n Anita\n(2 rows)' },
      { title: 'BETWEEN (Range)', code: 'SELECT name, marks FROM students\nWHERE marks BETWEEN 80 AND 90;', output: ' name | marks\n------+-------\n Ravi |    85\n(1 row)' },
      { title: 'LIKE (Text Pattern)', code: 'SELECT name FROM students\nWHERE name LIKE \'A%\';   -- names starting with A', output: ' name\n------\n Anita\n(1 row)' }
    ],
    keyPoints: ['WHERE works on rows — HAVING (later) works on groups.', 'Use AND / OR to combine conditions.', 'LIKE patterns: % matches any text, _ matches one character.'],
    commonMistakes: ['Using = with BETWEEN (it is BETWEEN 80 AND 90, not =).', 'Forgetting quotes around text: WHERE name = Ravi is wrong.'],
    proTips: ['Put the most selective condition first for readability.', 'Use IN instead of many OR conditions — cleaner and faster.']
  },
  syntax: {
    definition: 'SQL has simple rules: statements end with a semicolon, keywords are upper case by convention, and comments are ignored.',
    whyUse: 'Clean SQL is readable by your team and safe to run. A missing semicolon can make psql wait forever for more input; a forgotten comment can hide dangerous code. These small habits prevent big headaches.',
    whereUse: null,
    syntax: null,
    explanation: 'Each statement ends with ; — that tells the database "I am done, run it". Keywords (SELECT, FROM, WHERE) are written in CAPS by convention so humans can scan code fast; the database does not care about case. Two kinds of comments: -- for one line and /* */ for blocks. SQL runs top to bottom, one statement at a time.',
    examples: [
      { title: 'Semicolon Ends a Statement', code: 'SELECT name FROM students;\nSELECT marks FROM students;', output: ' name\n------\n Ravi\n Anita\n(2 rows)\n\n marks\n-------\n    85\n    92\n(2 rows)' },
      { title: 'One-line Comment', code: '-- This line is ignored by the database\nSELECT 1 AS number;   -- inline comment too', output: ' number\n--------\n      1\n(1 row)' },
      { title: 'Multi-line Comment', code: '/* This is a\n   multi-line comment\n   used for long notes */\nSELECT \'Comments are ignored\' AS note;', output: '        note\n--------------------\n Comments are ignored\n(1 row)' },
      { title: 'Case Does Not Matter (But Use CAPS)', code: 'select name from Students where MARKS > 80;', output: '-- Works fine, but convention is:\nSELECT name FROM students WHERE marks > 80;' },
      { title: 'Formatting for Readability', code: 'SELECT name,\n       marks\nFROM   students\nWHERE  marks > 80\nORDER BY marks DESC;', output: ' name  | marks\n-------+-------\n Anita |    92\n(1 row)' }
    ],
    keyPoints: ['Every statement ends with a semicolon ;', 'SQL keywords are case-insensitive — CAPS is a style choice.', '-- comments one line, /* */ comments a block.'],
    commonMistakes: ['Missing semicolon — psql keeps waiting for more input.', 'Mixing quotes: text uses single quotes \'like this\', not double quotes.'],
    proTips: ['One statement per line-group, indented like a recipe — far easier to debug.', 'In psql, press the up arrow to recall previous statements.']
  },
  operators: {
    definition: 'Operators compare values (=, <>, >, <) and combine conditions (AND, OR, NOT). They power every WHERE clause.',
    whyUse: 'Every filter you have seen uses operators: marks > 80 (= comparison), status = \'active\' AND age >= 18 (= logic). Login checks, search filters, report conditions — all built from these few symbols.',
    whereUse: null,
    syntax: null,
    explanation: '= checks equality, <> checks "not equal" (SQL has no != in standard form, though PostgreSQL accepts it too), and > < >= <= compare numbers and text. AND needs both sides true, OR needs one. LIKE does pattern matching, IN checks membership, BETWEEN checks a range. NULL needs special handling with IS NULL — = NULL never works.',
    examples: [
      { title: 'Comparison Operators', code: 'SELECT 10 > 5 AS greater, 10 = 10 AS equal,\n       10 <> 5 AS not_equal, 10 <= 10 AS less_eq;', output: ' greater | equal | not_equal | less_eq\n---------+-------+-----------+--------\n t       | t     | t         | t\n(1 row)' },
      { title: 'AND / OR / NOT', code: 'SELECT (10 > 5 AND 2 > 1) AS both_true,\n       (10 > 5 OR 2 > 10)  AS one_true,\n       NOT (10 > 5)        AS opposite;', output: ' both_true | one_true | opposite\n-----------+----------+---------\n t         | t        | f\n(1 row)' },
      { title: 'LIKE Patterns', code: 'SELECT \'student@school.com\' LIKE \'%@%\' AS has_email,\n       \'Ravi\' LIKE \'R%\' AS starts_with_r,\n       \'Anita\' LIKE \'%ita\' AS ends_with_ita;', output: ' has_email | starts_with_r | ends_with_ita\n-----------+---------------+--------------\n t         | t             | t\n(1 row)' },
      { title: 'IN and BETWEEN', code: 'SELECT 2 IN (1, 2, 3) AS in_list,\n       5 BETWEEN 1 AND 10 AS in_range;', output: ' in_list | in_range\n---------+---------\n t       | t\n(1 row)' },
      { title: 'NULL Is Special', code: 'SELECT NULL = NULL AS wrong_check,\n       NULL IS NULL AS right_check;', output: ' wrong_check | right_check\n-------------+-------------\n f           | t\n(1 row)' }
    ],
    keyPoints: ['Use <> for "not equal" (PostgreSQL also accepts !=).', 'NULL = NULL is always false — use IS NULL / IS NOT NULL.', 'AND needs both true, OR needs one true.'],
    commonMistakes: ['Writing = NULL — it never matches; always use IS NULL.', 'Mixing up AND and OR precedence — use parentheses to be safe.'],
    proTips: ['Wrap complex conditions in parentheses: (a OR b) AND c.', 'COALESCE(column, 0) turns NULL into a usable value for math.']
  },

  // ==================== BASIC LEVEL ====================
  datatypes: {
    definition: 'Every column has a data type. It decides what can be stored: whole numbers, text, dates, true/false, or money.',
    whyUse: 'Types keep data honest. A marks column that only accepts integers rejects the typo "eighty-five". A price column uses NUMERIC so 99.99 stays exact — floating point would round money wrongly. Choosing types right is half of good database design.',
    whereUse: null,
    syntax: null,
    explanation: 'Common types: INTEGER (whole numbers), TEXT / VARCHAR(n) (words), NUMERIC (exact decimals for money), BOOLEAN (true/false), DATE (day), TIMESTAMP (date + time), SERIAL (auto-increasing id). PostgreSQL is strict: insert the wrong type and you get a clear error instead of dirty data.',
    examples: [
      { title: 'A Table Using Many Types', code: 'CREATE TABLE products (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL,\n  price NUMERIC(10,2),\n  in_stock BOOLEAN DEFAULT true,\n  added_on DATE\n);\nINSERT INTO products VALUES\n  (DEFAULT, \'Keyboard\', 1499.50, true, \'2026-01-10\'),\n  (DEFAULT, \'Mouse\', 499.00, false, \'2026-01-12\');\nSELECT * FROM products;', output: ' id | name    |  price  | in_stock |  added_on\n----+---------+---------+----------+------------\n  1 | Keyboard| 1499.50 | t        | 2026-01-10\n  2 | Mouse   |  499.00 | f        | 2026-01-12\n(2 rows)' },
      { title: 'Check a Column Type', code: 'SELECT column_name, data_type\nFROM information_schema.columns\nWHERE table_name = \'products\';', output: ' column_name | data_type\n-------------+-----------\n id          | integer\n name        | text\n price       | numeric\n in_stock    | boolean\n added_on    | date\n(5 rows)' },
      { title: 'TEXT vs VARCHAR', code: '-- Both store text. TEXT = any length,\n-- VARCHAR(n) = fixed maximum length.\nSELECT \'hello\'::text AS t, \'hello\'::varchar(10) AS v;', output: '   t   |   v\n-------+-------\n hello | hello\n(1 row)' },
      { title: 'NUMERIC for Money (Exact)', code: 'SELECT 0.1 + 0.2 AS numeric_math,\n       (0.1::float8 + 0.2::float8) AS float_math;', output: ' numeric_math | float_math\n--------------+-------------\n         0.30 | 0.30000000000000004\n(1 row)' },
      { title: 'Type Casting with ::', code: 'SELECT \'85\'::int + 5 AS converted,\n       \'2026-01-15\'::date AS d;', output: ' converted |     d\n-----------+------------\n        90 | 2026-01-15\n(1 row)' }
    ],
    keyPoints: ['INTEGER for counts, NUMERIC for money, TEXT for words.', 'SERIAL creates auto-increasing ids — perfect for primary keys.', ':: casts one type to another: \'85\'::int.'],
    commonMistakes: ['Using FLOAT for money — rounding errors appear; use NUMERIC.', 'Forgetting that DATE stores only the date, TIMESTAMP stores date + time.'],
    proTips: ['Use TEXT unless you truly need a length limit — PostgreSQL handles it efficiently.', 'Always give columns sensible types; it acts as free validation.']
  },
  insert: {
    definition: 'INSERT INTO adds new rows to a table. It is how data gets into the database.',
    whyUse: 'Every signup, order, and message is an INSERT: a student fills a form → the app runs INSERT INTO students. Without it, tables stay empty. Mastering it means knowing how to add one row, many rows at once, and how to get the new id back.',
    whereUse: null,
    syntax: null,
    explanation: 'Basic form: INSERT INTO table (columns) VALUES (values). The column list and value list must match in count and order. You can insert several rows in one statement with multiple value groups — much faster than one-by-one. RETURNING gives you the inserted row (handy for getting the generated id).',
    examples: [
      { title: 'Insert One Row', code: 'INSERT INTO students (name, marks) VALUES (\'Suresh\', 78);\nSELECT * FROM students;', output: ' id | name  | marks\n----+-------+-------\n  1 | Ravi  |    85\n  2 | Anita |    92\n  3 | Suresh|    78\n(3 rows)' },
      { title: 'Insert Multiple Rows at Once', code: 'INSERT INTO students (name, marks) VALUES\n  (\'Deepa\', 88),\n  (\'Arun\', 64),\n  (\'Meera\', 95);\nSELECT count(*) AS total_students FROM students;', output: ' total_students\n----------------\n              6\n(1 row)' },
      { title: 'Get the New id Back', code: 'INSERT INTO students (name, marks) VALUES (\'Kumar\', 71)\nRETURNING id, name;', output: ' id | name\n----+-------\n  7 | Kumar\n(1 row)' },
      { title: 'Insert from Another Table', code: 'CREATE TABLE toppers AS\nSELECT * FROM students WHERE marks >= 90;\nSELECT * FROM toppers;', output: ' id | name  | marks\n----+-------+-------\n  2 | Anita |    92\n  6 | Meera |    95\n(2 rows)' },
      { title: 'Common Error: Wrong Value Count', code: '-- This FAILS on purpose to show the rule\nINSERT INTO students (name, marks) VALUES (\'Ravi\');', output: 'ERROR:  INSERT has more target columns than expressions' }
    ],
    keyPoints: ['Column list and VALUES list must match in length.', 'Multiple VALUE groups = one fast multi-row insert.', 'RETURNING id gives you the new primary key immediately.'],
    commonMistakes: ['Mismatched column/value counts — the classic beginner error.', 'Forgetting quotes around text values: VALUES (Ravi) fails.'],
    proTips: ['Use INSERT ... SELECT to copy or transform data between tables.', 'In apps, get the id back with RETURNING so you can link related rows.']
  },
  update_delete: {
    definition: 'UPDATE changes existing rows; DELETE removes them. Both are controlled by WHERE so you change exactly what you intend.',
    whyUse: 'Data changes constantly: a student retests and marks change (UPDATE), a record is removed by mistake (DELETE). These commands keep the database current — but without WHERE they affect EVERY row, which is how people accidentally wipe tables.',
    whereUse: null,
    syntax: null,
    explanation: 'UPDATE table SET column = value WHERE condition. DELETE FROM table WHERE condition. Always, always write the WHERE first and run a SELECT with the same WHERE to preview which rows will be affected — a professional habit that saves careers.',
    examples: [
      { title: 'Update One Row', code: 'UPDATE students SET marks = 90 WHERE name = \'Ravi\';\nSELECT name, marks FROM students WHERE name = \'Ravi\';', output: ' name | marks\n------+-------\n Ravi |    90\n(1 row)' },
      { title: 'Update Multiple Columns', code: 'UPDATE students\nSET marks = 95, name = \'Ravi K\'\nWHERE id = 1;\nSELECT * FROM students WHERE id = 1;', output: ' id | name  | marks\n----+-------+-------\n  1 | Ravi K|    95\n(1 row)' },
      { title: 'Safe Delete: Preview First', code: '-- Step 1: preview with SELECT\nSELECT * FROM students WHERE marks < 70;\n-- Step 2: delete the same rows\nDELETE FROM students WHERE marks < 70;\nSELECT count(*) AS remaining FROM students;', output: ' id | name | marks\n----+------+-------\n  5 | Arun |    64\n(1 row)\n\n remaining\n-----------\n         5\n(1 row)' },
      { title: 'Update with a Condition from Another Table', code: 'UPDATE students s\nSET marks = s.marks + 5\nWHERE s.marks < 70;\nSELECT name, marks FROM students WHERE marks < 75;', output: ' name | marks\n------+-------\n Arun |    69\n(1 row)' },
      { title: 'Danger: No WHERE', code: '-- NEVER run this on real data!\n-- UPDATE students SET marks = 0;\n-- It sets EVERY row to 0.\nSELECT \'Always add WHERE\' AS warning;', output: '     warning\n------------------\n Always add WHERE\n(1 row)' }
    ],
    keyPoints: ['UPDATE ... SET ... WHERE changes matching rows.', 'DELETE FROM ... WHERE removes matching rows.', 'Without WHERE, ALL rows are affected.'],
    commonMistakes: ['Running UPDATE or DELETE without WHERE — the number one database accident.', 'Forgetting quotes: SET name = Ravi fails (treated as a column name).'],
    proTips: ['Write the WHERE, then run it as SELECT first to preview the rows.', 'Use transactions (later topic) so you can ROLLBACK a mistake.']
  },
  order: {
    definition: 'ORDER BY sorts rows, DISTINCT removes duplicates, and LIMIT keeps only the first N rows.',
    whyUse: 'Every list you see is sorted: "top 10 students", "newest orders first", "A to Z by name". Distinct answers "which cities do we have customers in?" without repeats. These three together power leaderboards, reports, and search results.',
    whereUse: null,
    syntax: null,
    explanation: 'ORDER BY column puts values in order — add ASC (default) or DESC for descending. DISTINCT in SELECT removes duplicate combinations. LIMIT n caps the result count; OFFSET skips rows for pagination ("page 2"). PostgreSQL also supports NULLS FIRST / NULLS LAST for careful ordering.',
    examples: [
      { title: 'Sort Ascending and Descending', code: 'SELECT name, marks FROM students ORDER BY marks DESC;', output: ' name  | marks\n-------+-------\n Meera |    95\n Anita |    92\n Ravi K|    90\n Deepa |    88\n Suresh|    78\n(5 rows)' },
      { title: 'Sort by Multiple Columns', code: 'SELECT name, marks FROM students\nORDER BY marks DESC, name ASC;', output: ' name  | marks\n-------+-------\n Meera |    95\n Anita |    92\n ... (ties broken by name A→Z)' },
      { title: 'Top 3 Students', code: 'SELECT name, marks FROM students\nORDER BY marks DESC\nLIMIT 3;', output: ' name  | marks\n-------+-------\n Meera |    95\n Anita |    92\n Ravi K|    90\n(3 rows)' },
      { title: 'DISTINCT: Unique Values Only', code: 'SELECT DISTINCT marks FROM students ORDER BY marks;', output: ' marks\n-------\n    69\n    78\n    88\n    90\n    92\n    95\n(6 rows)' },
      { title: 'Pagination with OFFSET', code: '-- Page 1: rows 1-2\nSELECT name FROM students ORDER BY id LIMIT 2 OFFSET 0;\n-- Page 2: rows 3-4\nSELECT name FROM students ORDER BY id LIMIT 2 OFFSET 2;', output: ' name\n-------\n Ravi K\n Anita\n(2 rows)\n\n name\n-------\n Deepa\n Suresh\n(2 rows)' }
    ],
    keyPoints: ['ORDER BY DESC = biggest first, ASC = smallest first.', 'LIMIT caps rows — use for top-N and pagination.', 'DISTINCT removes duplicate rows from the result.'],
    commonMistakes: ['Expecting default order to be sorted — without ORDER BY, order is not guaranteed.', 'Using DISTINCT to hide duplicate rows caused by a bad JOIN — fix the query instead.'],
    proTips: ['Always add ORDER BY when using LIMIT — otherwise "top 3" is random.', 'OFFSET pagination gets slow on huge tables — keyset pagination is the pro trick.']
  },
  aggregation: {
    definition: 'Aggregates summarize many rows into one number: COUNT, SUM, AVG, MIN, MAX. GROUP BY summarizes each group separately.',
    whyUse: 'Reports are aggregation: total sales today, average marks per class, count of active users, highest score in a subject. Anytime the question starts with "how many" or "what total", you need these tools.',
    whereUse: null,
    syntax: null,
    explanation: 'Aggregate functions collapse many rows into one value. Without GROUP BY, they summarize the whole table. With GROUP BY column, they produce one row per distinct value — e.g., average marks per subject. HAVING filters groups AFTER aggregation (WHERE filters rows BEFORE it).',
    examples: [
      { title: 'COUNT, SUM, AVG', code: 'SELECT count(*) AS students,\n       sum(marks) AS total,\n       round(avg(marks), 1) AS average\nFROM students;', output: ' students | total | average\n----------+-------+---------\n        6 |   509 |    84.8\n(1 row)' },
      { title: 'MIN and MAX', code: 'SELECT min(marks) AS lowest, max(marks) AS highest\nFROM students;', output: ' lowest | highest\n--------+---------\n     69 |      95\n(1 row)' },
      { title: 'GROUP BY: Per Group Summary', code: 'CREATE TABLE marks (\n  student TEXT, subject TEXT, score INT\n);\nINSERT INTO marks VALUES\n  (\'Ravi\', \'Math\', 88), (\'Ravi\', \'Science\', 76),\n  (\'Anita\', \'Math\', 95), (\'Anita\', \'Science\', 90);\nSELECT subject, round(avg(score)) AS avg_score\nFROM marks\nGROUP BY subject;', output: ' subject | avg_score\n---------+-----------\n Math    |        92\n Science |        83\n(2 rows)' },
      { title: 'WHERE vs HAVING', code: '-- WHERE filters rows first, HAVING filters groups\nSELECT subject, count(*) AS attempts\nFROM marks\nWHERE score >= 80          -- rows\nGROUP BY subject\nHAVING count(*) >= 2;      -- groups', output: ' subject | attempts\n---------+----------\n Math    |        2\n(1 row)' },
      { title: 'COUNT with Condition', code: 'SELECT count(*) FILTER (WHERE score >= 90) AS top_scores,\n       count(*) AS total\nFROM marks;', output: ' top_scores | total\n------------+-------\n          2 |     4\n(1 row)' }
    ],
    keyPoints: ['COUNT(*) counts rows, COUNT(column) counts non-NULL values.', 'GROUP BY produces one output row per group.', 'WHERE filters rows, HAVING filters groups — order matters.'],
    commonMistakes: ['Selecting a column that is not in GROUP BY — PostgreSQL rejects it.', 'Using WHERE with an aggregate — that is what HAVING is for.'],
    proTips: ['round(avg(x), 1) gives cleaner report numbers.', 'COUNT(*) FILTER (WHERE ...) is a clean PostgreSQL alternative to CASE inside COUNT.']
  },
  constraints: {
    definition: 'Constraints are rules the database enforces for you: PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, and DEFAULT.',
    whyUse: 'Constraints are quality guards. They stop duplicate roll numbers, orphan orders with no student, empty names, and forgotten fields — automatically, in every app that touches the table. Validation in the database protects you even if the app has a bug.',
    whereUse: null,
    syntax: null,
    explanation: 'PRIMARY KEY uniquely identifies a row (and cannot be NULL). NOT NULL blocks empty values. UNIQUE allows many rows but forbids duplicates in that column. FOREIGN KEY links a column to another table\'s primary key, keeping relationships honest. DEFAULT fills a value when you omit it.',
    examples: [
      { title: 'Table with All Constraints', code: 'CREATE TABLE courses (\n  id SERIAL PRIMARY KEY,\n  title TEXT NOT NULL UNIQUE,\n  fee NUMERIC(8,2) NOT NULL DEFAULT 0,\n  active BOOLEAN DEFAULT true\n);\nINSERT INTO courses (title, fee) VALUES (\'PostgreSQL\', 4999);\nSELECT * FROM courses;', output: ' id |   title    |  fee  | active\n----+------------+-------+--------\n  1 | PostgreSQL | 4999.00 | t\n(1 row)' },
      { title: 'NOT NULL in Action', code: 'INSERT INTO courses (title, fee) VALUES (NULL, 100);', output: 'ERROR:  null value in column "title" violates not-null constraint' },
      { title: 'UNIQUE Stops Duplicates', code: 'INSERT INTO courses (title, fee) VALUES (\'PostgreSQL\', 999);', output: 'ERROR:  duplicate key value violates unique constraint "courses_title_key"' },
      { title: 'FOREIGN KEY: Linking Tables', code: 'CREATE TABLE enrollments (\n  id SERIAL PRIMARY KEY,\n  student_id INT NOT NULL REFERENCES students(id),\n  course_id INT NOT NULL REFERENCES courses(id)\n);\nINSERT INTO enrollments (student_id, course_id) VALUES (1, 1);\n-- This FAILS — student 99 does not exist:\nINSERT INTO enrollments (student_id, course_id) VALUES (99, 1);', output: 'ERROR:  insert or update violates foreign key constraint' },
      { title: 'DEFAULT Saves Typing', code: 'INSERT INTO courses (title) VALUES (\'Python\');\nSELECT title, fee, active FROM courses WHERE title = \'Python\';', output: ' title  | fee | active\n--------+-------+--------\n Python | 0.00 | t\n(1 row)' }
    ],
    keyPoints: ['PRIMARY KEY = unique id, NOT NULL = value required.', 'FOREIGN KEY keeps relationships between tables valid.', 'DEFAULT fills in a value when you skip the column.'],
    commonMistakes: ['Adding a foreign key to a column of the wrong type — types must match exactly.', 'Forgetting UNIQUE on columns like email, allowing duplicate accounts.'],
    proTips: ['Put constraints in the table definition — it is easier than adding them later.', 'Let SERIAL + PRIMARY KEY handle ids; never manage ids by hand.']
  },
  alter: {
    definition: 'ALTER TABLE changes a table after it exists: add a column, change a type, rename, or drop.',
    whyUse: 'Requirements change: the app launches with name only, then needs email, then phone. ALTER TABLE lets the database evolve with the product instead of starting over. You will use it constantly in real projects.',
    whereUse: null,
    syntax: null,
    explanation: 'ALTER TABLE table ADD COLUMN col type adds a column (existing rows get NULL or a default). ALTER TABLE table RENAME TO new_name renames. ALTER TABLE table DROP COLUMN col removes a column — permanently. Changing a type uses ALTER COLUMN ... TYPE, and it fails if existing data does not convert.',
    examples: [
      { title: 'Add a Column', code: 'ALTER TABLE students ADD COLUMN email TEXT;\nSELECT * FROM students LIMIT 2;', output: ' id | name  | marks | email\n----+-------+-------+-------\n  1 | Ravi K|    95 | \n  2 | Anita |    92 | \n(2 rows)' },
      { title: 'Add with a Default', code: 'ALTER TABLE students ADD COLUMN city TEXT DEFAULT \'Unknown\';\nSELECT name, city FROM students LIMIT 2;', output: ' name  |   city\n-------+---------\n Ravi K| Unknown\n Anita | Unknown\n(2 rows)' },
      { title: 'Rename Table and Column', code: 'ALTER TABLE students RENAME TO learners;\nALTER TABLE learners RENAME COLUMN marks TO score;\nSELECT name, score FROM learners LIMIT 2;', output: ' name  | score\n-------+-------\n Ravi K|    95\n Anita |    92\n(2 rows)' },
      { title: 'Change a Column Type', code: 'ALTER TABLE learners\nALTER COLUMN score TYPE NUMERIC(5,1);\nSELECT name, score FROM learners LIMIT 2;', output: ' name  | score\n-------+-------\n Ravi K|  95.0\n Anita |  92.0\n(2 rows)' },
      { title: 'Drop a Column', code: 'ALTER TABLE learners DROP COLUMN city;\n\\d learners   -- structure no longer shows city', output: 'Column | Type\n--------+------\n id     | integer\n name   | text\n score  | numeric(5,1)' }
    ],
    keyPoints: ['ADD COLUMN is safe — existing rows get NULL or the default.', 'DROP COLUMN is permanent — double-check before running.', 'RENAME is instant and does not touch data.'],
    commonMistakes: ['Dropping a column that other queries still use — breakage appears later.', 'Changing a type when data cannot convert — the ALTER fails (good thing!).'],
    proTips: ['Add columns with DEFAULT so existing rows stay valid.', 'In real teams, write ALTER statements as migration files and review them.']
  },

  // ==================== MEDIUM LEVEL ====================
  joins: {
    definition: 'JOIN combines rows from two or more tables using a matching column — usually primary key to foreign key.',
    whyUse: 'Real data is split across tables: students in one, enrollments in another. A report showing "student name + course title" must JOIN them. Every dashboard, order page, and profile screen is built on joins — this is the single most important skill in SQL.',
    whereUse: null,
    syntax: null,
    explanation: 'INNER JOIN returns only rows that match in BOTH tables. LEFT JOIN keeps all rows from the left table even if there is no match (missing side becomes NULL). The ON clause says which columns to match: ON a.id = b.student_id. You can join more than two tables by chaining JOINs.',
    examples: [
      { title: 'Setup: Two Related Tables', code: 'CREATE TABLE students2 (\n  id SERIAL PRIMARY KEY, name TEXT\n);\nCREATE TABLE enrollments (\n  student_id INT REFERENCES students2(id),\n  course TEXT\n);\nINSERT INTO students2 VALUES (1, \'Ravi\'), (2, \'Anita\'), (3, \'Kumar\');\nINSERT INTO enrollments VALUES (1, \'PostgreSQL\'), (2, \'Python\');', output: 'INSERT 0 3\nINSERT 0 2' },
      { title: 'INNER JOIN: Matches Only', code: 'SELECT s.name, e.course\nFROM students2 s\nINNER JOIN enrollments e ON s.id = e.student_id;', output: ' name  |  course\n-------+----------\n Ravi  | PostgreSQL\n Anita | Python\n(2 rows)' },
      { title: 'LEFT JOIN: Everyone, Even Without a Course', code: 'SELECT s.name, e.course\nFROM students2 s\nLEFT JOIN enrollments e ON s.id = e.student_id;', output: ' name  |  course\n-------+----------\n Ravi  | PostgreSQL\n Anita | Python\n Kumar | NULL\n(3 rows)' },
      { title: 'Find Students With No Course', code: 'SELECT s.name\nFROM students2 s\nLEFT JOIN enrollments e ON s.id = e.student_id\nWHERE e.student_id IS NULL;', output: ' name\n-------\n Kumar\n(1 row)' },
      { title: 'Join Three Tables', code: 'SELECT s.name, e.course, c.fee\nFROM students2 s\nJOIN enrollments e ON s.id = e.student_id\nJOIN courses c ON c.title = e.course;', output: ' name  |  course   |  fee\n-------+-----------+-------\n Ravi  | PostgreSQL | 4999.00\n Anita | Python     | 0.00\n(2 rows)' }
    ],
    keyPoints: ['INNER = matches only, LEFT = all rows from left table.', 'ON defines the match: left.key = right.foreign_key.', 'Give tables short aliases (s, e) — easier to type and read.'],
    commonMistakes: ['Forgetting ON — you get a Cartesian product (every × every row).', 'Joining columns of mismatched types (INT vs TEXT) — it errors.'],
    proTips: ['Run each table separately first, then join — easier to debug.', 'LEFT JOIN + WHERE right.id IS NULL = the classic "missing related row" trick.']
  },
  functions: {
    definition: 'PostgreSQL ships with hundreds of built-in functions for text, numbers, and dates. They transform values right inside your query.',
    whyUse: 'Reports need formatting: full names joined, prices rounded, dates shown as "15 Jan 2026", missing values replaced with defaults. Instead of doing this in app code, do it in SQL — the database is fast and every tool benefits.',
    whereUse: null,
    syntax: null,
    explanation: 'Text: UPPER, LOWER, LENGTH, CONCAT or ||, SUBSTRING, TRIM, REPLACE. Numbers: ROUND, CEIL, FLOOR, ABS. Dates: NOW, CURRENT_DATE, AGE, DATE_TRUNC. Null handling: COALESCE(a, b) returns the first non-NULL value — extremely useful for defaults.',
    examples: [
      { title: 'Text Functions', code: 'SELECT upper(\'postgres\') AS up,\n       length(\'hello\') AS len,\n       \'  trim me  \'::text AS raw,\n       trim(\'  trim me  \') AS trimmed;', output: '    up    | len |     raw      |  trimmed\n-----------+-----+--------------+-----------\n POSTGRES  |   5 |   trim me    | trim me\n(1 row)' },
      { title: 'Concatenation with ||', code: 'SELECT \'Ravi\' || \' \' || \'Kumar\' AS full_name;', output: ' full_name\n-----------\n Ravi Kumar\n(1 row)' },
      { title: 'Number Functions', code: 'SELECT round(84.56) AS rounded,\n       ceil(84.1) AS up,\n       floor(84.9) AS down,\n       abs(-42) AS absolute;', output: ' rounded | up | down | absolute\n---------+----+------+---------\n      85 | 85 |   84 |      42\n(1 row)' },
      { title: 'Date Functions', code: 'SELECT current_date AS today,\n       now() AS right_now,\n       age(\'2000-01-01\'::date) AS age_of_2000_kid;', output: '    today     |        right_now           |       age_of_2000_kid\n--------------+----------------------------+-----------------------------\n 2026-01-15   | 2026-01-15 10:30:00.12+05  | 26 years 0 mons 14 days\n(1 row)' },
      { title: 'COALESCE: Fill Missing Values', code: 'SELECT name, COALESCE(email, \'no-email@site.com\') AS contact\nFROM (VALUES (\'Ravi\', \'ravi@mail.com\'), (\'Anita\', NULL)) AS t(name, email);', output: ' name  |     contact\n-------+------------------\n Ravi  | ravi@mail.com\n Anita | no-email@site.com\n(2 rows)' }
    ],
    keyPoints: ['|| concatenates text; UPPER/LOWER/LENGTH change it.', 'ROUND, CEIL, FLOOR handle numbers; NOW/CURRENT_DATE handle dates.', 'COALESCE(a, b) = first value that is not NULL.'],
    commonMistakes: ['Using + to join strings — PostgreSQL uses || (or CONCAT()).', 'Mixing TIMESTAMP WITH TIME ZONE and plain TIMESTAMP — pick one convention.'],
    proTips: ['Do formatting in SQL, not in the app — one place to change.', 'DATE_TRUNC(\'month\', date) groups dates into months for monthly reports.']
  },
  subqueries: {
    definition: 'A subquery is a query inside another query. It runs first and its result is used by the outer query.',
    whyUse: 'Real questions are layered: "students who scored above the AVERAGE" needs the average first, then the list. "Customers who bought product X" needs the buyer ids first. Subqueries express these two-step questions in one statement.',
    whereUse: null,
    syntax: null,
    explanation: 'Three common positions: in WHERE with IN (match a list), in WHERE as a scalar (compare to a single value), and in FROM (treat a query result as a temporary table). PostgreSQL also allows EXISTS to check whether a related row exists — usually the fastest pattern.',
    examples: [
      { title: 'Scalar Subquery', code: 'SELECT name, marks FROM students\nWHERE marks > (SELECT avg(marks) FROM students);', output: ' name  | marks\n-------+-------\n Meera |    95\n Anita |    92\n Ravi K|    90\n Deepa |    88\n(4 rows)' },
      { title: 'IN with Subquery', code: 'SELECT name FROM students\nWHERE id IN (SELECT student_id FROM enrollments);', output: ' name\n-------\n Ravi K\n Anita\n(2 rows)' },
      { title: 'Subquery in FROM', code: 'SELECT top.name, top.marks\nFROM (SELECT name, marks FROM students ORDER BY marks DESC LIMIT 3) AS top;', output: ' name  | marks\n-------+-------\n Meera |    95\n Anita |    92\n Ravi K|    90\n(3 rows)' },
      { title: 'EXISTS: Check for Related Rows', code: 'SELECT s.name FROM students2 s\nWHERE EXISTS (\n  SELECT 1 FROM enrollments e WHERE e.student_id = s.id\n);', output: ' name\n-------\n Ravi\n Anita\n(2 rows)' },
      { title: 'Update Using a Subquery', code: 'UPDATE students SET marks = marks + 5\nWHERE id IN (SELECT id FROM students WHERE marks < 75);\nSELECT name, marks FROM students WHERE marks < 80;', output: ' name  | marks\n-------+-------\n Suresh|    83\n Arun  |    74\n(2 rows)' }
    ],
    keyPoints: ['Subquery in parentheses runs before the outer query.', 'Scalar subquery must return exactly ONE value.', 'EXISTS is great for "has at least one related row" checks.'],
    commonMistakes: ['Scalar subquery returning many rows — PostgreSQL throws an error.', 'Slow correlated subqueries — a JOIN or EXISTS is often faster.'],
    proTips: ['If a subquery returns many rows, use IN or EXISTS, not =.', 'Run the subquery alone first — confirm its result, then wrap it.']
  },
  transactions: {
    definition: 'A transaction groups several statements so they ALL succeed or ALL fail — like a single atomic action.',
    whyUse: 'Money must never be half-transferred: debiting an account without crediting another would lose money. Booking a ticket, placing an order, transferring marks — every multi-step change needs a transaction. It is how databases guarantee correctness when things crash mid-way.',
    whereUse: null,
    syntax: null,
    explanation: 'BEGIN starts a transaction, COMMIT saves all changes, ROLLBACK undoes them. Until COMMIT, other users cannot see your uncommitted changes (isolation). If any statement fails, you can safely ROLLBACK — the database returns to how it was. In psql, autocommit is on by default, so BEGIN is what turns it off.',
    examples: [
      { title: 'The Classic: Money Transfer', code: 'BEGIN;\nUPDATE accounts SET balance = balance - 1000 WHERE owner = \'Ravi\';\nUPDATE accounts SET balance = balance + 1000 WHERE owner = \'Anita\';\nCOMMIT;   -- both happen, or neither', output: 'BEGIN\nUPDATE 1\nUPDATE 1\nCOMMIT' },
      { title: 'ROLLBACK Undoes Mistakes', code: 'BEGIN;\nUPDATE students SET marks = 0;\n-- Oops! Wrong update. Undo it:\nROLLBACK;\nSELECT name, marks FROM students LIMIT 2;', output: 'BEGIN\nUPDATE 6\nROLLBACK\n\n name  | marks\n-------+-------\n Ravi K|    95\n Anita |    92\n(2 rows)' },
      { title: 'Failure Triggers Automatic Undo', code: 'BEGIN;\nINSERT INTO courses (title, fee) VALUES (\'Java\', 3999);\nINSERT INTO courses (title, fee) VALUES (\'Java\', 5999);  -- duplicate!\nROLLBACK;   -- safe: nothing was saved', output: 'INSERT 0 1\nERROR:  duplicate key value violates unique constraint\nROLLBACK' },
      { title: 'Savepoints: Partial Undo', code: 'BEGIN;\nINSERT INTO students (name, marks) VALUES (\'Temp1\', 50);\nSAVEPOINT sp1;\nINSERT INTO students (name, marks) VALUES (\'Temp2\', 60);\nROLLBACK TO sp1;   -- undo only Temp2\nCOMMIT;            -- keep Temp1', output: 'BEGIN\nINSERT 0 1\nSAVEPOINT\nINSERT 0 1\nROLLBACK TO\nCOMMIT' },
      { title: 'See It in Action', code: '-- Steps: BEGIN → make changes → COMMIT or ROLLBACK\nSELECT \'Never COMMIT without checking your changes first\' AS tip;', output: '                     tip\n--------------------------------------------\n Never COMMIT without checking your changes\n(1 row)' }
    ],
    keyPoints: ['BEGIN → changes → COMMIT (save) or ROLLBACK (undo).', 'Without COMMIT, changes are invisible to other users.', 'A failed statement inside a transaction leaves it open — decide COMMIT or ROLLBACK.'],
    commonMistakes: ['Leaving transactions open forever — locks block other users.', 'Forgetting COMMIT in psql — closing the session rolls back automatically.'],
    proTips: ['Wrap multi-step changes in a transaction — always.', 'ROLLBACK is your undo button; use it freely while learning.']
  },
  indexes: {
    definition: 'An index is a lookup structure that makes WHERE and JOIN on a column much faster — like the index at the back of a book.',
    whyUse: 'A students table with 1 million rows: scanning every row for a name takes seconds; with an index it takes milliseconds. Search boxes, login by email, and joins on foreign keys all depend on indexes. But indexes cost space and slow down inserts slightly — so choose wisely.',
    whereUse: null,
    syntax: null,
    explanation: 'CREATE INDEX idx_name ON table(column). PostgreSQL uses a B-tree by default. Index columns you search or sort by often: WHERE email = ..., JOIN on foreign keys, ORDER BY created_at. Do NOT index tiny tables or columns with few distinct values (like gender) — the overhead outweighs the gain.',
    examples: [
      { title: 'Create an Index', code: 'CREATE INDEX idx_students_name ON students(name);\nSELECT indexname FROM pg_indexes WHERE tablename = \'students\';', output: '   indexname\n-------------------\n students_pkey\n idx_students_name\n(2 rows)' },
      { title: 'See the Speed Difference', code: '-- Without index: Sequential Scan (checks every row)\nEXPLAIN SELECT * FROM students WHERE name = \'Anita\';\n-- With index: Index Scan (jumps straight to it)\n-- -> Index Scan using idx_students_name', output: ' Seq Scan on students  (cost=0.00..1.05 rows=1 width=44)\n   Filter: (name = \'Anita\'::text)' },
      { title: 'Index a Foreign Key (Always)', code: 'CREATE INDEX idx_enroll_student ON enrollments(student_id);\n-- Makes every JOIN students↔enrollments fast', output: 'CREATE INDEX' },
      { title: 'Partial Index (Smart & Small)', code: 'CREATE INDEX idx_active_courses ON courses(title) WHERE active = true;\n-- Index covers only active rows — tiny and fast', output: 'CREATE INDEX' },
      { title: 'Drop an Index', code: 'DROP INDEX idx_students_name;\nSELECT indexname FROM pg_indexes WHERE tablename = \'students\';', output: '   indexname\n--------------\n students_pkey\n(1 row)' }
    ],
    keyPoints: ['Index columns used in WHERE, JOIN, and ORDER BY.', 'Primary keys are indexed automatically.', 'Indexes slow down INSERT/UPDATE slightly — do not over-index.'],
    commonMistakes: ['Indexing every column — write-heavy tables crawl.', 'Forgetting to index foreign keys — joins stay slow.'],
    proTips: ['Always EXPLAIN before and after adding an index — measure, do not guess.', 'Composite index (a, b) helps WHERE a = ... AND b = ... — column order matters.']
  },
  views: {
    definition: 'A view is a saved query. You give it a name and use it like a table — without storing duplicate data.',
    whyUse: 'Reports repeat complex joins every time. Save that join as a view: analysts query vw_student_report without knowing the joins, and you can change the view once to fix the logic everywhere. Views also hide sensitive columns from users who should not see them.',
    whereUse: null,
    syntax: null,
    explanation: 'CREATE VIEW name AS SELECT ... stores only the query, not the rows — so views never go stale. Query it like any table: SELECT * FROM view_name. Views can be simple (one table) or complex (joins, aggregates). DROP VIEW removes it; no data is lost.',
    examples: [
      { title: 'Create a Simple View', code: 'CREATE VIEW toppers AS\nSELECT name, marks FROM students WHERE marks >= 90;\nSELECT * FROM toppers ORDER BY marks DESC;', output: ' name  | marks\n-------+-------\n Meera |    95\n Anita |    92\n Ravi K|    90\n(3 rows)' },
      { title: 'A Complex Report as a View', code: 'CREATE VIEW student_report AS\nSELECT s.name, e.course, c.fee\nFROM students2 s\nLEFT JOIN enrollments e ON s.id = e.student_id\nLEFT JOIN courses c ON c.title = e.course;\nSELECT * FROM student_report;', output: ' name  |  course   |  fee\n-------+-----------+-------\n Ravi  | PostgreSQL | 4999.00\n Anita | Python     | 0.00\n Kumar | NULL      | NULL\n(3 rows)' },
      { title: 'Views Update Automatically', code: '-- Insert a new topper, the view shows it immediately\nINSERT INTO students (name, marks) VALUES (\'Star\', 99);\nSELECT * FROM toppers ORDER BY marks DESC LIMIT 2;', output: ' name  | marks\n-------+-------\n Star  |    99\n Meera |    95\n(2 rows)' },
      { title: 'Replace a View', code: 'CREATE OR REPLACE VIEW toppers AS\nSELECT name, marks FROM students WHERE marks >= 95;\nSELECT * FROM toppers;', output: ' name  | marks\n-------+-------\n Meera |    95\n Star  |    99\n(2 rows)' },
      { title: 'Drop a View', code: 'DROP VIEW IF EXISTS toppers;', output: 'DROP VIEW' }
    ],
    keyPoints: ['A view stores the query, not the data — always fresh.', 'Use CREATE OR REPLACE VIEW to update logic without dropping.', 'Views simplify reports and hide sensitive columns.'],
    commonMistakes: ['Building deeply nested views (view on view on view) — hard to debug.', 'Expecting views to be faster — they run the same query underneath.'],
    proTips: ['Name views with vw_ or v_ prefix so everyone knows it is a view.', 'For heavy reports, consider materialized views (they DO store data).']
  },
  jsonb: {
    definition: 'JSONB is PostgreSQL\'s binary JSON type. You can store flexible documents AND query them with full SQL speed.',
    whyUse: 'Not everything fits tidy columns: product variants, form settings, app metadata. Instead of creating a new table for every extra field, store it as JSONB — and still filter and index it. This hybrid power is one reason developers pick PostgreSQL over other databases.',
    whereUse: null,
    syntax: null,
    explanation: 'Use -> to get a JSON value, ->> to get it as text, and #> for deep paths. The @> operator checks containment, and GIN indexes make JSON searches fast. JSONB is stored in a decomposed binary form — faster to query and supports indexing, unlike plain JSON.',
    examples: [
      { title: 'Store JSON Data', code: 'CREATE TABLE settings (\n  id SERIAL PRIMARY KEY,\n  data JSONB\n);\nINSERT INTO settings (data) VALUES\n(\'{"theme":"dark","lang":"en","notifications":true}\');\nSELECT * FROM settings;', output: ' id |                             data\n----+------------------------------------------------------------------\n  1 | {"theme": "dark", "lang": "en", "notifications": true}\n(1 row)' },
      { title: 'Extract Values with -> and ->>', code: 'SELECT data->>\'theme\' AS theme,       -- text\n       data->\'notifications\' AS notify  -- json\nFROM settings;', output: ' theme | notify\n-------+--------\n dark  | true\n(1 row)' },
      { title: 'Filter by JSON Content', code: 'SELECT id FROM settings\nWHERE data @> \'{"theme":"dark"}\';', output: ' id\n----\n  1\n(1 row)' },
      { title: 'Nested JSON Paths', code: 'INSERT INTO settings (data)\nVALUES (\'{"user":{"name":"Ravi","prefs":{"theme":"light"}}}\');\nSELECT data#>>\'{user,prefs,theme}\' AS theme\nFROM settings WHERE id = 2;', output: ' theme\n-------\n light\n(1 row)' },
      { title: 'JSON Aggregation', code: '-- Build JSON from table rows (handy for APIs)\nSELECT json_agg(name) AS all_names\nFROM students LIMIT 1;', output: '                    all_names\n--------------------------------------------------\n ["Ravi K", "Anita", "Suresh", "Deepa", "Arun", ...]\n(1 row)' }
    ],
    keyPoints: ['-> returns JSON, ->> returns text.', 'Use @> containment with a GIN index for fast lookups.', 'json_agg() turns rows into a JSON array — perfect for APIs.'],
    commonMistakes: ['Using ->> when you need math — convert to number with ::int first.', 'Storing data that should be columns as JSON — filter/reporting becomes harder.'],
    proTips: ['Mix both: stable fields as columns, variable extras as JSONB.', 'CREATE INDEX ... USING GIN (data) makes JSON filters fly.']
  },

  // ==================== ADVANCED LEVEL ====================
  ctes: {
    definition: 'A CTE (Common Table Expression) is a named temporary result created with the WITH clause. It makes complex queries readable.',
    whyUse: 'Multi-step reports get messy fast: totals per student, then ranks, then filters. CTEs break the logic into named steps — step1, step2 — like variables in a program. Teams prefer CTEs because anyone can read the query top to bottom and understand the flow.',
    whereUse: null,
    syntax: null,
    explanation: 'WITH name AS (SELECT ...) defines a CTE; the main query then uses name like a table. CTEs can reference earlier CTEs, chaining steps. PostgreSQL 14+ also supports RECURSIVE CTEs to walk hierarchies — org charts, category trees, and comment threads.',
    examples: [
      { title: 'Basic CTE', code: 'WITH topper_list AS (\n  SELECT name, marks FROM students WHERE marks >= 90\n)\nSELECT count(*) AS toppers FROM topper_list;', output: ' toppers\n---------\n       4\n(1 row)' },
      { title: 'Chained CTEs (Step by Step)', code: 'WITH per_subject AS (\n  SELECT subject, avg(score) AS avg_score FROM marks GROUP BY subject\n),\nstrongest AS (\n  SELECT * FROM per_subject ORDER BY avg_score DESC LIMIT 1\n)\nSELECT * FROM strongest;', output: ' subject | avg_score\n---------+-----------\n Math    |        92\n(1 row)' },
      { title: 'CTE with JOIN', code: 'WITH enrolled AS (\n  SELECT DISTINCT student_id FROM enrollments\n)\nSELECT s.name FROM students2 s\nJOIN enrolled e ON s.id = e.student_id;', output: ' name\n-------\n Ravi\n Anita\n(2 rows)' },
      { title: 'RECURSIVE CTE: Category Tree', code: 'CREATE TABLE categories (\n  id INT PRIMARY KEY, name TEXT, parent_id INT\n);\nINSERT INTO categories VALUES\n  (1, \'Electronics\', NULL),\n  (2, \'Phones\', 1),\n  (3, \'Laptops\', 1),\n  (4, \'Android\', 2);\n\nWITH RECURSIVE tree AS (\n  SELECT id, name, parent_id, 1 AS depth\n  FROM categories WHERE parent_id IS NULL\n  UNION ALL\n  SELECT c.id, c.name, c.parent_id, t.depth + 1\n  FROM categories c JOIN tree t ON c.parent_id = t.id\n)\nSELECT repeat(\'  \', depth - 1) || name AS hierarchy FROM tree;', output: ' hierarchy\n-------------------\n Electronics\n   Phones\n     Android\n   Laptops\n(4 rows)' },
      { title: 'CTE as a Temporary Table', code: 'WITH recent AS (\n  SELECT * FROM students ORDER BY id DESC LIMIT 2\n)\nSELECT name FROM recent;', output: ' name\n-------\n Star\n Kumar\n(2 rows)' }
    ],
    keyPoints: ['WITH name AS (...) defines a readable named step.', 'CTEs can reference each other — build queries like layers.', 'RECURSIVE walks hierarchical data (trees).'],
    commonMistakes: ['Using a CTE only once when a subquery would do — CTEs are for readability, not speed.', 'Recursive CTEs without a proper exit condition — infinite loop risk.'],
    proTips: ['Name CTEs after what they represent: active_users, monthly_sales.', 'In PostgreSQL 12+, MATERIALIZED/NOT MATERIALIZED controls caching if needed.']
  },
  window: {
    definition: 'Window functions calculate across a set of rows related to the current row — without collapsing them into one row like GROUP BY.',
    whyUse: 'Rankings ("student #3 in class"), running totals ("balance after each transaction"), and comparisons ("this month vs last month") all need row-by-row context. Window functions do this in one query — a must-have skill for analytics and reporting roles.',
    whereUse: null,
    syntax: null,
    explanation: 'The shape is: function() OVER (PARTITION BY group ORDER BY order). ROW_NUMBER() numbers rows, RANK() gives competition ranking, LAG(col) looks at the previous row, and SUM(col) OVER (...) makes running totals. Unlike GROUP BY, every input row still appears in the output.',
    examples: [
      { title: 'ROW_NUMBER: Simple Ranking', code: 'SELECT name, marks,\n       ROW_NUMBER() OVER (ORDER BY marks DESC) AS rank_no\nFROM students;', output: ' name  | marks | rank_no\n-------+-------+---------\n Star  |    99 |       1\n Meera |    95 |       2\n Anita |    92 |       3\n(6 rows)' },
      { title: 'RANK vs DENSE_RANK', code: 'SELECT name, marks,\n       RANK() OVER (ORDER BY marks DESC) AS rnk,\n       DENSE_RANK() OVER (ORDER BY marks DESC) AS dense_rnk\nFROM students;', output: ' name  | marks | rnk | dense_rnk\n-------+-------+-----+-----------\n Star  |    99 |   1 |         1\n Meera |    95 |   2 |         2\n Anita |    92 |   3 |         3' },
      { title: 'PARTITION BY: Rank Within Groups', code: 'SELECT subject, student, score,\n       ROW_NUMBER() OVER (PARTITION BY subject ORDER BY score DESC) AS pos\nFROM marks;', output: ' subject | student | score | pos\n---------+---------+-------+----\n Math    | Anita   |    95 |  1\n Math    | Ravi    |    88 |  2\n Science | Anita   |    90 |  1\n Science | Ravi    |    76 |  2' },
      { title: 'Running Total', code: 'SELECT name, marks,\n       SUM(marks) OVER (ORDER BY id) AS running_total\nFROM students;', output: ' name  | marks | running_total\n-------+-------+--------------\n Ravi K|    95 |           95\n Anita |    92 |          187\n Suresh|    78 |          265' },
      { title: 'LAG: Compare With Previous Row', code: 'SELECT name, marks,\n       marks - LAG(marks) OVER (ORDER BY id) AS diff_from_prev\nFROM students;', output: ' name  | marks | diff_from_prev\n-------+-------+----------------\n Ravi K|    95 |           NULL\n Anita |    92 |             -3\n Suresh|    78 |            -14' }
    ],
    keyPoints: ['OVER (...) defines the window; PARTITION BY splits into groups.', 'ROW_NUMBER never ties, RANK skips, DENSE_RANK does not skip.', 'LAG/LEAD look at previous/next rows — great for trends.'],
    commonMistakes: ['Using window functions in WHERE — use them in SELECT or a subquery.', 'Forgetting ORDER BY inside OVER — ranking becomes random.'],
    proTips: ['Wrap window functions in a subquery when you must filter on their result.', 'Running totals with SUM() OVER (ORDER BY ...) beat cursor loops by miles.']
  },
  plpgsql: {
    definition: 'PL/pgSQL is PostgreSQL\'s built-in programming language. It lets you write functions with variables, conditions, and loops that run inside the database.',
    whyUse: 'When logic belongs with the data — tax calculations, audit logging, complex validations — stored functions keep it fast and consistent. Every app calling the same function gets the same rules, even if five different apps use the database.',
    whereUse: null,
    syntax: null,
    explanation: 'CREATE FUNCTION with LANGUAGE plpgsql. Use DECLARE for variables, BEGIN ... END for the body, IF/THEN/ELSE for conditions, and loops for repetition. RETURN sends a value back. Modern PostgreSQL also supports procedures (CALL) that can commit transactions inside.',
    examples: [
      { title: 'A Simple Function', code: 'CREATE FUNCTION add_marks(a INT, b INT)\nRETURNS INT AS $$\nBEGIN\n  RETURN a + b;\nEND;\n$$ LANGUAGE plpgsql;\n\nSELECT add_marks(85, 90);', output: ' add_marks\n-----------\n       175\n(1 row)' },
      { title: 'Function with IF/ELSE', code: 'CREATE FUNCTION grade(m INT)\nRETURNS TEXT AS $$\nBEGIN\n  IF m >= 90 THEN RETURN \'A\';\n  ELSIF m >= 75 THEN RETURN \'B\';\n  ELSIF m >= 40 THEN RETURN \'C\';\n  ELSE RETURN \'F\';\n  END IF;\nEND;\n$$ LANGUAGE plpgsql;\n\nSELECT name, grade(marks) AS grade FROM students LIMIT 3;', output: ' name  | grade\n-------+-------\n Ravi K| A\n Anita | A\n Suresh| C\n(3 rows)' },
      { title: 'Function with a Loop', code: 'CREATE FUNCTION count_up(n INT)\nRETURNS TEXT AS $$\nDECLARE\n  i INT := 1;\n  result TEXT := \'\';\nBEGIN\n  WHILE i <= n LOOP\n    result := result || i || \' \';\n    i := i + 1;\n  END LOOP;\n  RETURN trim(result);\nEND;\n$$ LANGUAGE plpgsql;\n\nSELECT count_up(5);', output: ' count_up\n----------\n 1 2 3 4 5\n(1 row)' },
      { title: 'Function That Updates Data', code: 'CREATE FUNCTION bonus_marks(pct INT)\nRETURNS INT AS $$\nDECLARE\n  updated INT;\nBEGIN\n  UPDATE students SET marks = marks + pct\n  WHERE marks < 75;\n  GET DIAGNOSTICS updated = ROW_COUNT;\n  RETURN updated;\nEND;\n$$ LANGUAGE plpgsql;\n\nSELECT bonus_marks(5);', output: ' bonus_marks\n-------------\n           2\n(1 row)' },
      { title: 'Drop a Function', code: 'DROP FUNCTION IF EXISTS add_marks(INT, INT);', output: 'DROP FUNCTION' }
    ],
    keyPoints: ['DECLARE variables, BEGIN...END the body, RETURN outputs.', 'IF / ELSIF / ELSE and LOOP give full control flow.', 'Functions run on the server — fast and reusable by all apps.'],
    commonMistakes: ['Forgetting the $$ quoting around the function body.', 'Not handling NULL — arithmetic with NULL returns NULL.'],
    proTips: ['Keep functions small; complex logic can live in app code too.', 'Use %TYPE for variables to match column types automatically.']
  },
  security: {
    definition: 'PostgreSQL security means users, roles, and permissions: who can connect, who can read, and who can change data.',
    whyUse: 'Real databases hold salaries, passwords, and personal data. Giving every app full superuser access is how breaches happen. Proper roles mean the reporting team can read but not delete, and the app user can only touch its own tables.',
    whereUse: null,
    syntax: null,
    explanation: 'Roles combine users and groups. CREATE ROLE makes one; GRANT gives permissions (SELECT, INSERT, UPDATE, DELETE, ALL); REVOKE takes them away. The superuser (postgres) can do everything — never let your application run as superuser. Principle of least privilege: give only what is needed, nothing more.',
    examples: [
      { title: 'Create a User and Grant Access', code: 'CREATE ROLE student_login WITH LOGIN PASSWORD \'safe_pass123\';\nGRANT CONNECT ON DATABASE practice TO student_login;\nGRANT USAGE ON SCHEMA public TO student_login;\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO student_login;', output: 'CREATE ROLE\nGRANT\nGRANT\nGRANT' },
      { title: 'Grant on One Table Only', code: 'GRANT SELECT, INSERT ON students TO student_login;\n-- Can read and add, but NOT delete or alter', output: 'GRANT' },
      { title: 'Revoke a Permission', code: 'REVOKE INSERT ON students FROM student_login;', output: 'REVOKE' },
      { title: 'See Current Roles', code: 'SELECT rolname, rolsuper, rolcanlogin\nFROM pg_roles\nWHERE rolname NOT LIKE \'pg_%\';', output: '   rolname    | rolsuper | rolcanlogin\n--------------+-----------+-------------\n postgres     | t         | t\n student_login| f         | t\n(2 rows)' },
      { title: 'Least Privilege in Practice', code: '-- Rule every DBA follows:\n-- 1. App connects as a NORMAL role, never postgres\n-- 2. Grant only the tables and actions it needs\n-- 3. Audit with: \\dp  (see privileges on a table)', output: 'Schema | Name     | Access privileges\n-------+----------+------------------------------------\n public | students | student_login=r/owner=r\n(1 row)' }
    ],
    keyPoints: ['CREATE ROLE / GRANT / REVOKE manage access.', 'Never run your application as the superuser.', 'Grant the minimum privilege needed — nothing more.'],
    commonMistakes: ['Sharing the postgres password with the app.', 'GRANT ALL on everything to everyone "temporarily" — it stays forever.'],
    proTips: ['Create one role per application, not one per person.', 'Check privileges anytime with \\dp table_name in psql.']
  },
  explain: {
    definition: 'EXPLAIN shows the query plan — the steps PostgreSQL will take. EXPLAIN ANALYZE runs the query and reports real timing.',
    whyUse: 'When a page loads slowly, the database is usually the reason. EXPLAIN ANALYZE tells you exactly which step eats the time: a missing index, a bad join order, or a sequential scan on a huge table. This skill separates junior developers from engineers who fix performance for a living.',
    whereUse: null,
    syntax: null,
    explanation: 'Read plans bottom-up: the innermost step runs first. Look for Seq Scan on large tables (usually bad), high actual time, and rows estimated far from actual (bad statistics). Cost numbers are relative estimates — compare them, do not treat them as seconds. After adding an index, run EXPLAIN again to confirm it is used.',
    examples: [
      { title: 'Basic EXPLAIN', code: 'EXPLAIN SELECT * FROM students WHERE name = \'Anita\';', output: '                          QUERY PLAN\n---------------------------------------------------------------\n Seq Scan on students  (cost=0.00..1.05 rows=1 width=44)\n   Filter: (name = \'Anita\'::text)\n(2 rows)' },
      { title: 'EXPLAIN ANALYZE (Real Timing)', code: 'EXPLAIN ANALYZE SELECT * FROM students WHERE marks > 80;', output: ' Seq Scan on students  (cost=0.00..1.06 rows=5 width=44) (actual time=0.012..0.015 rows=5 loops=1)\n Planning Time: 0.05 ms\n Execution Time: 0.03 ms' },
      { title: 'Confirm an Index Is Used', code: 'CREATE INDEX idx_students_marks ON students(marks);\nEXPLAIN SELECT * FROM students WHERE marks > 90;', output: ' Index Scan using idx_students_marks on students\n   Index Cond: (marks > 90)' },
      { title: 'Spot a Slow Sequential Scan', code: '-- Before indexing a big table:\nEXPLAIN ANALYZE SELECT * FROM enrollments WHERE student_id = 1;', output: ' Seq Scan on enrollments  (actual time=150.2..480.9 rows=2 loops=1)\n Execution Time: 481.3 ms   ← add an index on student_id!' },
      { title: 'Read the Plan Checklist', code: 'SELECT \'1. Seq Scan on big table?\' AS check,\n       \'2. Actual rows ≈ estimated rows?\' AS check2,\n       \'3. Execution Time reasonable?\' AS check3;', output: '           check            |              check2               |            check3\n----------------------------+------------------------------------+----------------------------\n 1. Seq Scan on big table?   | 2. Actual rows ≈ estimated rows?   | 3. Execution Time reasonable?' }
    ],
    keyPoints: ['Read plans from the inside out (bottom step runs first).', 'Seq Scan on a large table = usually a missing index.', 'EXPLAIN = estimates only; EXPLAIN ANALYZE = real run + timing.'],
    commonMistakes: ['Optimizing tiny tables — they are fast either way.', 'Adding indexes without re-checking EXPLAIN — always verify.'],
    proTips: ['Before/after EXPLAIN ANALYZE is how you prove a performance fix.', 'ANALYZE table_name updates statistics when estimates drift.']
  },
  design: {
    definition: 'Database design is planning your tables before writing SQL: what data you store, how tables relate, and how to remove repetition.',
    whyUse: 'A bad design causes duplicate data, update errors, and impossible reports. A good design makes the app simple to build and cheap to change. Interviews for data roles ask exactly this — normalization, keys, and relationships. Design first, code second.',
    whereUse: null,
    syntax: null,
    explanation: 'Steps: list entities (Student, Course, Enrollment), decide their attributes, define relationships (a student enrolls in many courses), then normalize. 1NF: no repeating groups or lists in one cell. 2NF: no partial dependency on part of a key. 3NF: no dependency of one non-key column on another. Practical rule: one fact is stored in one place.',
    examples: [
      { title: 'Bad Design: Everything in One Table', code: '-- Anti-pattern: columns course1, course2, course3...\n-- Adding a 4th course requires ALTER TABLE!\nSELECT \'Use a separate enrollments table instead\' AS fix;', output: '                  fix\n-----------------------------------------\n Use a separate enrollments table instead\n(1 row)' },
      { title: 'Good Design: Three Tables', code: 'CREATE TABLE students3 (\n  id SERIAL PRIMARY KEY, name TEXT NOT NULL\n);\nCREATE TABLE courses3 (\n  id SERIAL PRIMARY KEY, title TEXT NOT NULL\n);\nCREATE TABLE enrollments3 (\n  student_id INT REFERENCES students3(id),\n  course_id INT REFERENCES courses3(id),\n  enrolled_on DATE DEFAULT current_date,\n  PRIMARY KEY (student_id, course_id)\n);', output: 'CREATE TABLE\nCREATE TABLE\nCREATE TABLE' },
      { title: '1NF: Atomic Values Only', code: '-- Bad:  \'Math, Science\' in one cell\n-- Good: one row per subject\nINSERT INTO marks VALUES (\'Ravi\', \'Math\', 88), (\'Ravi\', \'Science\', 76);\nSELECT * FROM marks WHERE student = \'Ravi\';', output: ' student | subject | score\n---------+---------+-------\n Ravi    | Math    |    88\n Ravi    | Science |    76\n(2 rows)' },
      { title: 'Reduce Replication', code: '-- Store \'PostgreSQL\' title ONCE in courses,\n-- reference it by id in enrollments — not text\nSELECT s.name, c.title\nFROM students3 s\nJOIN enrollments3 e ON s.id = e.student_id\nJOIN courses3 c ON c.id = e.course_id;', output: ' name | title\n------+-------\n Ravi | PostgreSQL\n(1 row)' },
      { title: 'Design Checklist', code: 'SELECT \'Every table has a primary key\' AS rule1,\n       \'One fact stored in one place\' AS rule2,\n       \'Foreign keys enforce relationships\' AS rule3,\n       \'No repeating column groups (course1, course2)\' AS rule4;', output: '              rule1              |  ... \n---------------------------------+------\n Every table has a primary key   | ...' }
    ],
    keyPoints: ['Entities become tables; relationships become foreign keys.', '1NF/2NF/3NF remove duplicate and dependent data.', 'Store each fact in ONE place, reference it by id.'],
    commonMistakes: ['Storing related data as comma-separated text in one column.', 'Skipping design and patching the schema with ALTER forever.'],
    proTips: ['Sketch tables on paper first — 10 minutes of design saves days of fixes.', 'If you copy the same column into many rows, it belongs in its own table.']
  },
  project: {
    definition: 'Final project: design and build a complete PostgreSQL database from scratch — schema, data, reports — without following a guide.',
    whyUse: 'This is the level interviewers and employers care about. Knowing syntax is not enough: you must take an idea, design the tables, write the SQL, test the queries, and hand over a working database. The workflow below is exactly what professional database work looks like.',
    whereUse: null,
    syntax: null,
    explanation: 'Professional workflow: (1) List entities and relationships on paper. (2) Create the database and tables with constraints. (3) Insert realistic sample data. (4) Write the reports your "client" asked for. (5) Add indexes for slow queries. (6) Create roles for access. (7) Test everything, then document it. Build the school database below — then rebuild YOUR OWN idea (library, e-commerce, gym) without this guide.',
    examples: [
      { title: 'Step 1: Create the Database and Tables', code: 'CREATE TABLE students (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT UNIQUE,\n  joined_on DATE DEFAULT current_date\n);\n\nCREATE TABLE subjects (\n  id SERIAL PRIMARY KEY,\n  title TEXT NOT NULL UNIQUE\n);\n\nCREATE TABLE scores (\n  student_id INT REFERENCES students(id) ON DELETE CASCADE,\n  subject_id INT REFERENCES subjects(id),\n  score NUMERIC(5,1) NOT NULL CHECK (score BETWEEN 0 AND 100),\n  PRIMARY KEY (student_id, subject_id)\n);', output: 'CREATE TABLE\nCREATE TABLE\nCREATE TABLE' },
      { title: 'Step 2: Load Realistic Data', code: 'INSERT INTO students (name, email) VALUES\n  (\'Ravi\', \'ravi@school.com\'),\n  (\'Anita\', \'anita@school.com\'),\n  (\'Kumar\', \'kumar@school.com\');\n\nINSERT INTO subjects (title) VALUES\n  (\'Mathematics\'), (\'Science\'), (\'English\');\n\nINSERT INTO scores VALUES\n  (1, 1, 88), (1, 2, 76),\n  (2, 1, 95), (2, 2, 90),\n  (3, 1, 64), (3, 3, 71);', output: 'INSERT 0 3\nINSERT 0 3\nINSERT 0 6' },
      { title: 'Step 3: The Reports the Client Asked For', code: '-- Report A: Class average per subject\nSELECT sub.title, round(avg(sc.score), 1) AS class_avg\nFROM scores sc JOIN subjects sub ON sub.id = sc.subject_id\nGROUP BY sub.title ORDER BY class_avg DESC;\n\n-- Report B: Student report card\nSELECT s.name, sub.title, sc.score\nFROM scores sc\nJOIN students s ON s.id = sc.student_id\nJOIN subjects sub ON sub.id = sc.subject_id\nWHERE s.name = \'Anita\';', output: '   title    | class_avg\n-------------+-----------\n Mathematics |      82.3\n Science     |      83.0\n English     |      71.0\n\n name  |   title    | score\n-------+------------+-------\n Anita | Mathematics |  95.0\n Anita | Science     |  90.0' },
      { title: 'Step 4: Performance and Access', code: '-- Index the column used in filters\nCREATE INDEX idx_scores_student ON scores(student_id);\n\n-- A safe read-only role for reports\nCREATE ROLE reporter WITH LOGIN PASSWORD \'report_pass1\';\nGRANT CONNECT ON DATABASE practice TO reporter;\nGRANT SELECT ON ALL TABLES IN SCHEMA public TO reporter;\n\nEXPLAIN SELECT * FROM scores WHERE student_id = 1;', output: 'CREATE INDEX\nCREATE ROLE\nGRANT\nGRANT\n\n Index Scan using idx_scores_student on scores ...' },
      { title: 'Step 5: Test Everything', code: '-- Test checklist before you deliver:\n-- 1. Wrong data is rejected (NULL, duplicate email, score > 100)\n-- 2. All 3 reports return correct rows\n-- 3. EXPLAIN shows index scans on big-table queries\n-- 4. reporter role can SELECT but cannot DELETE\n-- 5. No red errors in psql when running your script\nSELECT \'Database ready to ship!\' AS status;', output: '        status\n----------------------\n Database ready to ship!\n(1 row)' }
    ],
    keyPoints: ['Design tables on paper before writing any CREATE TABLE.', 'Constraints and foreign keys protect data better than app code.', 'Test with wrong data too — see that the database refuses it.'],
    commonMistakes: ['Skipping the design phase and patching schema forever.', 'Never testing reports with realistic data volumes.'],
    proTips: ['Deliver with a README: tables, sample queries, and how to run them.', 'After this project, rebuild the same idea for a library or shop — without this guide. That proves you learned it.']
  }
}

export default postgresql
