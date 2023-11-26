DROP TABLE IF EXISTS users, preferences, saved_jobs CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE preferences (
  id SERIAL PRIMARY KEY NOT NULL,
  job_title VARCHAR(255),
  company TEXT DEFAULT NULL,
  city VARCHAR (255),
  province VARCHAR (255),
  min_salary INTEGER DEFAULT NULL,
  max_salary INTEGER DEFAULT NULL,
  job_type VARCHAR(255) DEFAULT NULL,
  is_remote BOOLEAN DEFAULT FALSE,
  no_experience_required BOOLEAN DEFAULT TRUE,
  min_education_level VARCHAR(255) DEFAULT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE saved_jobs (
  id SERIAL PRIMARY KEY NOT NULL,
  job_posting_id VARCHAR(255),
  applied BOOLEAN DEFAULT NULL,
  company TEXT,
  job_title VARCHAR(255),
  city VARCHAR (255),
  province VARCHAR (255),
  min_salary INTEGER,
  max_salary INTEGER,
  job_description TEXT,
  job_type VARCHAR(255),
  is_remote BOOLEAN DEFAULT FALSE,
  benefits TEXT DEFAULT NULL,
  posted_at DATE,
  website TEXT DEFAULT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);