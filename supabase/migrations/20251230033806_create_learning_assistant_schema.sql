/*
  # Chat-Based Intelligent Learning Assistant - Database Schema

  ## Overview
  This migration creates the complete database schema for an intelligent learning assistant
  that supports students from all technical branches with personalized course recommendations,
  step-by-step learning, and progress tracking.

  ## New Tables

  ### 1. `profiles`
  - `id` (uuid, FK to auth.users) - User identifier
  - `full_name` (text) - User's full name
  - `branch` (text) - Technical branch (CSE, Mechanical, ECE, etc.)
  - `skill_level` (text) - beginner, intermediate, advanced
  - `interests` (text[]) - Array of learning interests
  - `bio` (text) - User biography
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `branches`
  - `id` (uuid) - Branch identifier
  - `name` (text) - Branch name (e.g., Computer Science Engineering)
  - `code` (text) - Short code (e.g., CSE, MECH, ECE)
  - `category` (text) - Category (Computer & IT, Core Engineering, etc.)
  - `description` (text) - Branch description
  - `created_at` (timestamptz) - Creation timestamp

  ### 3. `conversations`
  - `id` (uuid) - Conversation identifier
  - `user_id` (uuid, FK) - User who owns this conversation
  - `title` (text) - Conversation title
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last message timestamp

  ### 4. `messages`
  - `id` (uuid) - Message identifier
  - `conversation_id` (uuid, FK) - Parent conversation
  - `role` (text) - user or assistant
  - `content` (text) - Message content
  - `created_at` (timestamptz) - Message timestamp

  ### 5. `courses`
  - `id` (uuid) - Course identifier
  - `title` (text) - Course title
  - `description` (text) - Course description
  - `branch_id` (uuid, FK) - Associated branch
  - `skill_level` (text) - Target skill level
  - `topics` (text[]) - Array of topics covered
  - `duration` (text) - Estimated duration
  - `created_at` (timestamptz) - Creation timestamp

  ### 6. `resources`
  - `id` (uuid) - Resource identifier
  - `course_id` (uuid, FK) - Associated course
  - `title` (text) - Resource title
  - `type` (text) - youtube, article, documentation, course
  - `url` (text) - Resource URL
  - `description` (text) - Resource description
  - `created_at` (timestamptz) - Creation timestamp

  ### 7. `roadmaps`
  - `id` (uuid) - Roadmap identifier
  - `branch_id` (uuid, FK) - Associated branch
  - `title` (text) - Roadmap title
  - `steps` (jsonb) - Ordered learning steps
  - `created_at` (timestamptz) - Creation timestamp

  ### 8. `user_progress`
  - `id` (uuid) - Progress identifier
  - `user_id` (uuid, FK) - User
  - `course_id` (uuid, FK) - Course being studied
  - `status` (text) - not_started, in_progress, completed
  - `progress_percentage` (int) - Completion percentage
  - `started_at` (timestamptz) - Start timestamp
  - `completed_at` (timestamptz) - Completion timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on all tables
  - Users can only access their own data
  - Public read access for branches, courses, resources, and roadmaps
  - Users can create conversations and messages for themselves
  - Users can track their own progress
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name text NOT NULL DEFAULT '',
  branch text DEFAULT '',
  skill_level text DEFAULT 'beginner',
  interests text[] DEFAULT '{}',
  bio text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create branches table
CREATE TABLE IF NOT EXISTS branches (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text NOT NULL UNIQUE,
  category text NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE branches ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view branches"
  ON branches FOR SELECT
  TO authenticated
  USING (true);

-- Create conversations table
CREATE TABLE IF NOT EXISTS conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  title text NOT NULL DEFAULT 'New Conversation',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own conversations"
  ON conversations FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own conversations"
  ON conversations FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own conversations"
  ON conversations FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own conversations"
  ON conversations FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid NOT NULL REFERENCES conversations ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('user', 'assistant')),
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view messages from own conversations"
  ON messages FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM conversations
      WHERE conversations.id = messages.conversation_id
      AND conversations.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create messages in own conversations"
  ON messages FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM conversations
      WHERE conversations.id = messages.conversation_id
      AND conversations.user_id = auth.uid()
    )
  );

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  branch_id uuid REFERENCES branches ON DELETE SET NULL,
  skill_level text NOT NULL DEFAULT 'beginner',
  topics text[] DEFAULT '{}',
  duration text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view courses"
  ON courses FOR SELECT
  TO authenticated
  USING (true);

-- Create resources table
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses ON DELETE CASCADE,
  title text NOT NULL,
  type text NOT NULL CHECK (type IN ('youtube', 'article', 'documentation', 'course')),
  url text NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view resources"
  ON resources FOR SELECT
  TO authenticated
  USING (true);

-- Create roadmaps table
CREATE TABLE IF NOT EXISTS roadmaps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  branch_id uuid NOT NULL REFERENCES branches ON DELETE CASCADE,
  title text NOT NULL,
  steps jsonb NOT NULL DEFAULT '[]',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE roadmaps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view roadmaps"
  ON roadmaps FOR SELECT
  TO authenticated
  USING (true);

-- Create user_progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  course_id uuid NOT NULL REFERENCES courses ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed')),
  progress_percentage int DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, course_id)
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own progress"
  ON user_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress"
  ON user_progress FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Insert sample branches
INSERT INTO branches (name, code, category, description) VALUES
  ('Computer Science Engineering', 'CSE', 'Computer & IT Fields', 'Focuses on software development, algorithms, and computer systems'),
  ('Information Technology', 'IT', 'Computer & IT Fields', 'Covers IT infrastructure, networking, and system administration'),
  ('Artificial Intelligence & Data Science', 'AIDS', 'Computer & IT Fields', 'Specializes in AI, ML, and data analytics'),
  ('Cyber Security', 'CS', 'Computer & IT Fields', 'Focuses on security, ethical hacking, and protection systems'),
  ('Mechanical Engineering', 'MECH', 'Core Engineering Fields', 'Deals with design, manufacturing, and mechanical systems'),
  ('Electrical Engineering', 'EE', 'Core Engineering Fields', 'Covers power systems, electrical machines, and circuits'),
  ('Electronics & Communication', 'ECE', 'Core Engineering Fields', 'Focuses on electronics, communication systems, and signal processing'),
  ('Civil Engineering', 'CE', 'Core Engineering Fields', 'Covers construction, structural design, and infrastructure'),
  ('Mechatronics', 'MECT', 'Core Engineering Fields', 'Combines mechanical, electronics, and computer systems'),
  ('Data Science', 'DS', 'Science & Applied Tech', 'Focuses on data analysis, statistics, and machine learning'),
  ('Internet of Things', 'IOT', 'Science & Applied Tech', 'Covers connected devices, sensors, and IoT applications'),
  ('Robotics', 'ROB', 'Science & Applied Tech', 'Specializes in robot design, control systems, and automation'),
  ('Embedded Systems', 'ES', 'Science & Applied Tech', 'Focuses on microcontrollers, firmware, and embedded programming'),
  ('Cloud Computing', 'CC', 'Science & Applied Tech', 'Covers cloud platforms, DevOps, and distributed systems')
ON CONFLICT (code) DO NOTHING;