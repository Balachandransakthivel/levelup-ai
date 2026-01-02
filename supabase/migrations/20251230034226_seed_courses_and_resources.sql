/*
  # Seed Courses and Learning Resources

  ## Overview
  This migration populates the database with sample courses and learning resources
  for all technical branches to demonstrate the learning assistant's capabilities.

  ## What This Does
  - Adds beginner, intermediate, and advanced courses for each branch
  - Includes YouTube tutorials, articles, documentation, and online courses
  - Provides diverse learning resources for students across all fields

  ## Important Notes
  - All YouTube URLs are examples - in production, replace with real resources
  - Resources are organized by course and skill level
  - Covers all major technical domains (CSE, IT, Mechanical, ECE, etc.)
*/

-- Insert sample courses for Computer Science Engineering (CSE)
INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'Introduction to Programming', 
  'Learn programming fundamentals with Python including variables, loops, functions, and basic algorithms',
  id,
  'beginner',
  ARRAY['Python', 'Variables', 'Loops', 'Functions', 'Problem Solving'],
  '4 weeks'
FROM branches WHERE code = 'CSE'
ON CONFLICT DO NOTHING;

INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'Data Structures and Algorithms', 
  'Master essential data structures like arrays, linked lists, trees, graphs and common algorithms',
  id,
  'intermediate',
  ARRAY['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting', 'Searching'],
  '8 weeks'
FROM branches WHERE code = 'CSE'
ON CONFLICT DO NOTHING;

INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'Full Stack Web Development', 
  'Build modern web applications using React, Node.js, Express, and MongoDB',
  id,
  'advanced',
  ARRAY['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Authentication'],
  '12 weeks'
FROM branches WHERE code = 'CSE'
ON CONFLICT DO NOTHING;

-- Insert sample courses for AI & Data Science (AIDS)
INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'Machine Learning Fundamentals', 
  'Introduction to ML concepts, supervised learning, and basic algorithms',
  id,
  'beginner',
  ARRAY['ML Basics', 'Linear Regression', 'Classification', 'Python', 'NumPy', 'Pandas'],
  '6 weeks'
FROM branches WHERE code = 'AIDS'
ON CONFLICT DO NOTHING;

INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'Deep Learning with Neural Networks', 
  'Learn neural networks, CNNs, RNNs, and deep learning frameworks',
  id,
  'advanced',
  ARRAY['Neural Networks', 'CNN', 'RNN', 'TensorFlow', 'PyTorch', 'Computer Vision'],
  '10 weeks'
FROM branches WHERE code = 'AIDS'
ON CONFLICT DO NOTHING;

-- Insert sample courses for Mechanical Engineering (MECH)
INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'CAD Fundamentals with AutoCAD', 
  'Learn 2D and 3D design using AutoCAD for mechanical drawings',
  id,
  'beginner',
  ARRAY['AutoCAD', '2D Drawing', '3D Modeling', 'Technical Drawings', 'Dimensioning'],
  '5 weeks'
FROM branches WHERE code = 'MECH'
ON CONFLICT DO NOTHING;

INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'Manufacturing Processes', 
  'Study modern manufacturing techniques, CNC, and production methods',
  id,
  'intermediate',
  ARRAY['CNC', 'Machining', 'Casting', 'Welding', 'Quality Control'],
  '8 weeks'
FROM branches WHERE code = 'MECH'
ON CONFLICT DO NOTHING;

-- Insert sample courses for Electronics & Communication (ECE)
INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'Digital Electronics Basics', 
  'Learn logic gates, combinational circuits, and sequential circuits',
  id,
  'beginner',
  ARRAY['Logic Gates', 'Boolean Algebra', 'Flip Flops', 'Counters', 'Registers'],
  '6 weeks'
FROM branches WHERE code = 'ECE'
ON CONFLICT DO NOTHING;

INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'Embedded Systems with Microcontrollers', 
  'Program microcontrollers, interface sensors, and build embedded projects',
  id,
  'intermediate',
  ARRAY['8051', 'Arduino', 'C Programming', 'Sensors', 'Communication Protocols'],
  '10 weeks'
FROM branches WHERE code = 'ECE'
ON CONFLICT DO NOTHING;

-- Insert sample courses for IoT
INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'IoT with Arduino', 
  'Build Internet of Things projects using Arduino and sensors',
  id,
  'beginner',
  ARRAY['Arduino', 'Sensors', 'WiFi', 'MQTT', 'Cloud Integration'],
  '6 weeks'
FROM branches WHERE code = 'IOT'
ON CONFLICT DO NOTHING;

-- Insert sample courses for Cyber Security (CS)
INSERT INTO courses (title, description, branch_id, skill_level, topics, duration) 
SELECT 
  'Ethical Hacking Basics', 
  'Learn penetration testing, network security, and ethical hacking fundamentals',
  id,
  'intermediate',
  ARRAY['Network Security', 'Penetration Testing', 'Kali Linux', 'Vulnerability Assessment'],
  '8 weeks'
FROM branches WHERE code = 'CS'
ON CONFLICT DO NOTHING;

-- Now add resources for these courses
-- CSE - Programming course resources
INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'Python for Beginners - Full Course',
  'youtube',
  'https://www.youtube.com/watch?v=rfscVS0vtbw',
  'Complete Python tutorial for absolute beginners by freeCodeCamp'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'CSE' AND c.title = 'Introduction to Programming'
ON CONFLICT DO NOTHING;

INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'Python Official Documentation',
  'documentation',
  'https://docs.python.org/3/tutorial/',
  'Official Python tutorial and documentation'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'CSE' AND c.title = 'Introduction to Programming'
ON CONFLICT DO NOTHING;

-- CSE - Data Structures course resources
INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'Data Structures Full Course',
  'youtube',
  'https://www.youtube.com/watch?v=RBSGKlAvoiM',
  'Complete data structures tutorial by freeCodeCamp'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'CSE' AND c.title = 'Data Structures and Algorithms'
ON CONFLICT DO NOTHING;

INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'LeetCode Practice',
  'course',
  'https://leetcode.com/',
  'Practice data structures and algorithms problems'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'CSE' AND c.title = 'Data Structures and Algorithms'
ON CONFLICT DO NOTHING;

-- CSE - Web Development course resources
INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'React Full Course 2024',
  'youtube',
  'https://www.youtube.com/watch?v=bMknfKXIFA8',
  'Complete React tutorial for building modern web apps'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'CSE' AND c.title = 'Full Stack Web Development'
ON CONFLICT DO NOTHING;

INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'MDN Web Docs',
  'documentation',
  'https://developer.mozilla.org/',
  'Comprehensive web development documentation'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'CSE' AND c.title = 'Full Stack Web Development'
ON CONFLICT DO NOTHING;

-- AIDS - Machine Learning course resources
INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'Machine Learning Course - Stanford',
  'course',
  'https://www.coursera.org/learn/machine-learning',
  'Andrew Ng''s famous machine learning course'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'AIDS' AND c.title = 'Machine Learning Fundamentals'
ON CONFLICT DO NOTHING;

INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'Machine Learning with Python',
  'youtube',
  'https://www.youtube.com/watch?v=7eh4d6sabA0',
  'Practical machine learning tutorial with Python'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'AIDS' AND c.title = 'Machine Learning Fundamentals'
ON CONFLICT DO NOTHING;

-- MECH - CAD course resources
INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'AutoCAD Complete Tutorial',
  'youtube',
  'https://www.youtube.com/watch?v=JTZx-t7XGgU',
  'Complete AutoCAD tutorial for beginners'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'MECH' AND c.title = 'CAD Fundamentals with AutoCAD'
ON CONFLICT DO NOTHING;

-- ECE - Digital Electronics course resources
INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'Digital Electronics Course',
  'youtube',
  'https://www.youtube.com/watch?v=M0mx8S05v60',
  'Complete digital electronics fundamentals'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'ECE' AND c.title = 'Digital Electronics Basics'
ON CONFLICT DO NOTHING;

-- ECE - Embedded Systems course resources
INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'Arduino Tutorial for Beginners',
  'youtube',
  'https://www.youtube.com/watch?v=zJ-LqeX_fLU',
  'Complete Arduino programming tutorial'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'ECE' AND c.title = 'Embedded Systems with Microcontrollers'
ON CONFLICT DO NOTHING;

-- IoT course resources
INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'IoT Full Course - Learn IoT In 4 Hours',
  'youtube',
  'https://www.youtube.com/watch?v=h0gWfVCSGQQ',
  'Complete IoT tutorial covering basics to advanced'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'IOT' AND c.title = 'IoT with Arduino'
ON CONFLICT DO NOTHING;

-- Cyber Security course resources
INSERT INTO resources (course_id, title, type, url, description)
SELECT 
  c.id,
  'Ethical Hacking Full Course',
  'youtube',
  'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
  'Complete ethical hacking course for beginners'
FROM courses c
JOIN branches b ON c.branch_id = b.id
WHERE b.code = 'CS' AND c.title = 'Ethical Hacking Basics'
ON CONFLICT DO NOTHING;