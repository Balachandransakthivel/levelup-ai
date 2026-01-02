interface UserProfile {
  branch?: string;
  skill_level?: string;
}

export interface Roadmap {
  id: string;
  title: string;
  steps: Array<{ title: string; duration: string; topics: string[] }>;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  skills: string[];
  objectives: string[];
  teamSize: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const branchKnowledge: Record<string, string[]> = {
  CSE: ['Programming', 'Data Structures', 'Algorithms', 'Web Development', 'Mobile Development', 'Database Management'],
  IT: ['Networking', 'System Administration', 'Cloud Computing', 'IT Security', 'Database Management'],
  AIDS: ['Machine Learning', 'Deep Learning', 'Data Analysis', 'Statistics', 'Python', 'Neural Networks'],
  CS: ['Ethical Hacking', 'Network Security', 'Cryptography', 'Penetration Testing', 'Security Protocols'],
  MECH: ['CAD/CAM', 'Thermodynamics', 'Manufacturing', 'Fluid Mechanics', 'Material Science', 'AutoCAD'],
  EE: ['Power Systems', 'Electrical Machines', 'Circuit Analysis', 'Control Systems', 'Power Electronics'],
  ECE: ['Digital Electronics', 'Signal Processing', 'Communication Systems', 'Microcontrollers', 'VLSI Design'],
  CE: ['Structural Engineering', 'Construction Management', 'Surveying', 'Geotechnical Engineering', 'AutoCAD'],
  MECT: ['Robotics', 'PLC Programming', 'Automation', 'Sensors', 'Control Systems', 'Embedded Systems'],
  DS: ['Statistics', 'Python', 'R Programming', 'Data Visualization', 'Machine Learning', 'SQL'],
  IOT: ['Arduino', 'Raspberry Pi', 'Sensors', 'MQTT', 'Cloud Integration', 'Embedded C'],
  ROB: ['Robot Kinematics', 'Control Systems', 'Computer Vision', 'ROS', 'Path Planning', 'Sensors'],
  ES: ['Microcontrollers', 'ARM', 'RTOS', 'Embedded C', 'Firmware Development', 'Hardware Interfacing'],
  CC: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'DevOps', 'Serverless Architecture'],
};

const sampleRoadmaps: Record<string, Roadmap> = {
  'web development': {
    id: 'wd-1',
    title: 'Full Stack Web Development',
    steps: [
      { title: 'HTML & CSS Basics', duration: '2 weeks', topics: ['HTML', 'CSS', 'Responsive Design'] },
      { title: 'JavaScript Fundamentals', duration: '3 weeks', topics: ['JS Basics', 'DOM', 'Events'] },
      { title: 'React & Frontend', duration: '4 weeks', topics: ['React', 'Components', 'Hooks'] },
      { title: 'Backend with Node.js', duration: '3 weeks', topics: ['Node.js', 'Express', 'REST APIs'] },
      { title: 'Database & MongoDB', duration: '2 weeks', topics: ['MongoDB', 'Queries', 'Design'] },
      { title: 'Full Stack Projects', duration: '4 weeks', topics: ['Integration', 'Deployment'] },
    ],
  },
  'data science': {
    id: 'ds-1',
    title: 'Data Science Learning Path',
    steps: [
      { title: 'Python Basics', duration: '2 weeks', topics: ['Python', 'NumPy', 'Pandas'] },
      { title: 'Data Analysis', duration: '3 weeks', topics: ['Data Cleaning', 'EDA', 'Statistics'] },
      { title: 'Visualization', duration: '2 weeks', topics: ['Matplotlib', 'Seaborn', 'Plotly'] },
      { title: 'Machine Learning', duration: '4 weeks', topics: ['Algorithms', 'Scikit-learn', 'Models'] },
      { title: 'Deep Learning', duration: '4 weeks', topics: ['Neural Networks', 'TensorFlow', 'PyTorch'] },
      { title: 'Projects & Deployment', duration: '3 weeks', topics: ['Real datasets', 'Kaggle', 'Production'] },
    ],
  },
  'machine learning': {
    id: 'ml-1',
    title: 'Machine Learning Mastery',
    steps: [
      { title: 'ML Fundamentals', duration: '2 weeks', topics: ['Concepts', 'Supervised vs Unsupervised'] },
      { title: 'Regression & Classification', duration: '3 weeks', topics: ['Linear Regression', 'Logistic Regression'] },
      { title: 'Tree-based Models', duration: '2 weeks', topics: ['Decision Trees', 'Random Forest', 'Boosting'] },
      { title: 'Deep Learning', duration: '4 weeks', topics: ['Neural Networks', 'CNN', 'RNN'] },
      { title: 'NLP & Advanced Topics', duration: '3 weeks', topics: ['Text Processing', 'Transformers', 'LLMs'] },
      { title: 'Real-world Projects', duration: '4 weeks', topics: ['Kaggle Competitions', 'Production Deployment'] },
    ],
  },
};

const sampleProjects: Record<string, Project[]> = {
  'web development': [
    {
      id: 'wd-p1',
      title: 'Personal Portfolio Website',
      description: 'Build a responsive portfolio to showcase your work and projects',
      difficulty: 'beginner',
      duration: '2 weeks',
      skills: ['HTML', 'CSS', 'Responsive Design'],
      objectives: ['Create clean design', 'Make it responsive', 'Deploy on GitHub Pages'],
      teamSize: 1,
    },
    {
      id: 'wd-p2',
      title: 'Todo App with Local Storage',
      description: 'Interactive todo application with add, edit, delete, and filter features',
      difficulty: 'intermediate',
      duration: '1 week',
      skills: ['JavaScript', 'DOM', 'Local Storage'],
      objectives: ['Add/delete tasks', 'Filter by status', 'Persist data', 'Stylish UI'],
      teamSize: 1,
    },
    {
      id: 'wd-p3',
      title: 'E-commerce Store',
      description: 'Full-stack e-commerce application with shopping cart and payment',
      difficulty: 'advanced',
      duration: '8 weeks',
      skills: ['React', 'Node.js', 'MongoDB', 'Payment Integration'],
      objectives: ['Product catalog', 'User authentication', 'Payment system', 'Admin panel'],
      teamSize: 2,
    },
  ],
  'machine learning': [
    {
      id: 'ml-p1',
      title: 'Iris Flower Classification',
      description: 'Classify iris flowers using ML algorithms',
      difficulty: 'beginner',
      duration: '3 days',
      skills: ['Python', 'Scikit-learn', 'Data Analysis'],
      objectives: ['Load dataset', 'Train model', 'Evaluate accuracy'],
      teamSize: 1,
    },
    {
      id: 'ml-p2',
      title: 'House Price Prediction',
      description: 'Predict house prices using regression models',
      difficulty: 'intermediate',
      duration: '2 weeks',
      skills: ['Python', 'Pandas', 'Regression', 'Feature Engineering'],
      objectives: ['Data exploration', 'Build model', 'Optimize performance'],
      teamSize: 1,
    },
  ],
};

const sampleQuizzes: Record<string, QuizQuestion[]> = {
  'machine learning': [
    {
      id: 'ml-q1',
      question: 'What is supervised learning?',
      options: [
        'Learning without labeled data',
        'Learning with labeled input-output pairs',
        'Learning by imitating humans',
        'Learning through random exploration',
      ],
      correctAnswer: 1,
      explanation: 'Supervised learning uses labeled training data where each example has an input and correct output label.',
    },
    {
      id: 'ml-q2',
      question: 'What is the main purpose of data preprocessing?',
      options: [
        'To make data look pretty',
        'To clean and prepare data for modeling',
        'To reduce dataset size',
        'To improve hardware performance',
      ],
      correctAnswer: 1,
      explanation: 'Data preprocessing involves cleaning, transforming, and organizing raw data to improve model performance.',
    },
    {
      id: 'ml-q3',
      question: 'What does overfitting mean?',
      options: [
        'Model performs well on training but poorly on test data',
        'Model performs poorly on both training and test data',
        'Model is too simple to learn patterns',
        'Model has too many layers',
      ],
      correctAnswer: 0,
      explanation: 'Overfitting occurs when a model learns noise in training data rather than general patterns.',
    },
  ],
  'python': [
    {
      id: 'py-q1',
      question: 'What does list.append() do?',
      options: [
        'Removes the last element',
        'Adds an element to the end',
        'Sorts the list',
        'Creates a copy of the list',
      ],
      correctAnswer: 1,
      explanation: 'append() adds a single element to the end of a list and modifies the list in-place.',
    },
  ],
};

const conceptExplanations: Record<string, string> = {
  'machine learning': `Machine Learning - Step by Step:

Step 1: What is Machine Learning?
Machine Learning is a subset of AI where computers learn from data without being explicitly programmed. Instead of following fixed rules, they find patterns and make decisions.

Step 2: Types of Machine Learning
- Supervised Learning: Learning from labeled data (e.g., email spam detection)
- Unsupervised Learning: Finding patterns in unlabeled data (e.g., customer segmentation)
- Reinforcement Learning: Learning through trial and error (e.g., game playing)

Step 3: Basic Workflow
1. Collect data
2. Prepare and clean data
3. Choose an algorithm
4. Train the model
5. Test and evaluate
6. Deploy and monitor

Step 4: Popular Algorithms
- Linear Regression (predictions)
- Decision Trees (classification)
- Neural Networks (complex patterns)
- K-Means (clustering)

Step 5: Getting Started
- Learn Python basics
- Study NumPy and Pandas
- Practice with Scikit-learn
- Work on real datasets

Try asking: "Show me a Data Science roadmap" or "Suggest ML projects"`,

  'iot': `Internet of Things (IoT) - Complete Guide:

Step 1: What is IoT?
IoT connects physical devices to the internet, allowing them to collect and share data. Examples: smart homes, wearables, industrial sensors.

Step 2: Key Components
- Sensors: Collect data (temperature, motion, light)
- Microcontrollers: Process data (Arduino, ESP32, Raspberry Pi)
- Connectivity: Send data (WiFi, Bluetooth, LoRa)
- Cloud: Store and analyze data
- Apps: User interface

Step 3: How It Works
1. Sensor collects data
2. Microcontroller processes it
3. Data sent to cloud via internet
4. Cloud analyzes and stores
5. User accesses via app

Step 4: Popular Platforms
- Arduino (beginners)
- ESP32/ESP8266 (WiFi projects)
- Raspberry Pi (advanced projects)
- AWS IoT, Google Cloud IoT

Step 5: Getting Started
- Start with Arduino basics
- Learn basic electronics
- Practice with LED, sensors
- Build simple projects
- Move to WiFi-enabled projects

Ready to start your first IoT project?`,

  'web development': `Web Development - Complete Roadmap:

Step 1: Frontend Basics
- HTML: Structure of web pages
- CSS: Styling and layout
- JavaScript: Interactivity and logic

Step 2: Frontend Frameworks
- React.js: Component-based UI
- Vue.js: Progressive framework
- Angular: Full-featured framework

Step 3: Backend Development
- Node.js: JavaScript runtime
- Express.js: Web framework
- Python: Django or Flask
- Databases: SQL and NoSQL

Step 4: Essential Skills
- Git & GitHub: Version control
- REST APIs: Communication
- Authentication: User management
- Deployment: Hosting your app

Step 5: Learning Path
1. Start with HTML/CSS (2 weeks)
2. Learn JavaScript (4 weeks)
3. Pick a frontend framework (4 weeks)
4. Learn backend basics (4 weeks)
5. Build full-stack projects

Step 6: Project Ideas
- Portfolio website
- Todo app with database
- Blog platform
- E-commerce site
- Social media clone

Ready to start your web development journey?`,

  'python': `Python Programming - Beginner to Advanced:

Step 1: Python Basics
- Variables and data types
- Operators and expressions
- Input/output operations
- Comments and documentation

Step 2: Control Flow
- If-else conditions
- For and while loops
- Break and continue
- Exception handling

Step 3: Data Structures
- Lists and tuples
- Dictionaries and sets
- String manipulation
- List comprehensions

Step 4: Functions & Modules
- Defining functions
- Parameters and arguments
- Lambda functions
- Importing modules

Step 5: Object-Oriented Programming
- Classes and objects
- Inheritance
- Polymorphism
- Encapsulation

Step 6: Advanced Topics
- File handling
- Regular expressions
- Decorators
- Generators

Step 7: Popular Libraries
- NumPy: Numerical computing
- Pandas: Data analysis
- Matplotlib: Visualization
- Requests: HTTP library

Would you like specific exercises or project ideas?`,
};

export function getRoadmap(topic: string): Roadmap | undefined {
  const lowerTopic = topic.toLowerCase();
  for (const [key, roadmap] of Object.entries(sampleRoadmaps)) {
    if (lowerTopic.includes(key)) return roadmap;
  }
  return undefined;
}

export function getProjects(topic: string): Project[] {
  const lowerTopic = topic.toLowerCase();
  for (const [key, projects] of Object.entries(sampleProjects)) {
    if (lowerTopic.includes(key)) return projects;
  }
  return [];
}

export function getQuiz(topic: string): QuizQuestion[] {
  const lowerTopic = topic.toLowerCase();
  for (const [key, questions] of Object.entries(sampleQuizzes)) {
    if (lowerTopic.includes(key)) return questions;
  }
  return [];
}

export async function generateResponse(userMessage: string, profile: UserProfile | null): Promise<string> {
  const messageLower = userMessage.toLowerCase();

  if (messageLower.includes('recommend') || messageLower.includes('what should i learn') || messageLower.includes('course')) {
    if (profile?.branch && branchKnowledge[profile.branch]) {
      const skills = branchKnowledge[profile.branch];
      const level = profile.skill_level || 'beginner';

      return `Based on your ${profile.branch} background and ${level} level, here are recommended courses:

${skills.map((skill, idx) => `${idx + 1}. ${skill}`).join('\n')}

For ${level} level, I suggest starting with:
${level === 'beginner' ? '- Focus on fundamentals and hands-on practice\n- Start with 1-2 topics and master them\n- Build small projects' : level === 'intermediate' ? '- Deepen your knowledge in core areas\n- Work on real-world projects\n- Start contributing to open source' : '- Specialize in advanced topics\n- Work on complex projects\n- Consider mentoring others'}

Would you like a detailed roadmap or project suggestions?`;
    }

    return `I'd love to help recommend courses! To give you the best suggestions, please:

1. Update your profile with your technical branch
2. Set your skill level (beginner/intermediate/advanced)
3. Tell me your specific interests

You can update your profile by clicking "Profile Settings" in the sidebar.

Alternatively, ask: "I'm a [branch] student, [skill level], interested in [topics]"`;
  }

  for (const [key, explanation] of Object.entries(conceptExplanations)) {
    if (messageLower.includes(key)) {
      return explanation;
    }
  }

  if (messageLower.includes('roadmap')) {
    return `Which topic would you like a roadmap for? Here are popular options:

1. Web Development
2. Data Science
3. Machine Learning
4. Python Programming
5. IoT
6. Mobile Development

Try saying: "Show me a roadmap for web development" or "Data Science learning path"`;
  }

  if (messageLower.includes('project') || messageLower.includes('build')) {
    return `Great! Here are project ideas by difficulty level:

Beginner Projects:
1. Calculator or converter app
2. Todo list with database
3. Personal portfolio website
4. Simple game (tic-tac-toe)
5. Weather app using API

Intermediate Projects:
1. Chat application
2. Real-time collaboration tool
3. Music streaming app
4. Task management system
5. Blog with CMS

Advanced Projects:
1. Video streaming platform
2. IoT home automation
3. ML recommendation system
4. Blockchain application
5. Full-stack SaaS product

Which area interests you? I can provide detailed guidance!`;
  }

  if (messageLower.includes('quiz') || messageLower.includes('test')) {
    return `I can help you with quizzes! Which topic would you like to test yourself on?

Available quizzes:
- Machine Learning Quiz
- Python Programming Quiz
- Web Development Quiz
- Data Science Quiz

Try asking: "Take a machine learning quiz" or "Give me a Python quiz"`;
  }

  if (messageLower.includes('resource') || messageLower.includes('learn') || messageLower.includes('tutorial')) {
    return `Here are trusted learning resources:

📺 YouTube Channels:
- freeCodeCamp
- Traversy Media
- The Net Ninja
- Academind
- Programming with Mosh

📚 Online Learning Platforms:
- freeCodeCamp.org (Free)
- Coursera (University courses)
- Udemy (Practical courses)
- edX (Free certificates)
- The Odin Project (Web dev)

📖 Documentation & Practice:
- Official documentation
- MDN Web Docs (Web)
- W3Schools (Beginners)
- LeetCode (Coding practice)
- HackerRank (Interview prep)

📱 Interactive Learning:
- Codecademy
- Scrimba
- SoloLearn
- Exercism

Which specific topic do you want resources for?`;
  }

  if (messageLower.includes('hello') || messageLower.includes('hi') || messageLower.includes('hey')) {
    return `Hello! Welcome to Level Up AI 🚀

I'm your intelligent learning companion. Here's what I can help with:

✓ Course recommendations based on your branch
✓ Step-by-step concept explanations
✓ Learning roadmaps and career paths
✓ Project ideas and guidance
✓ Quizzes to test your knowledge
✓ Resource recommendations
✓ Study tips and strategies

Try asking:
- "I'm a CSE student, what should I learn?"
- "Explain Machine Learning step by step"
- "Show me a roadmap for Data Science"
- "Suggest beginner projects"
- "Give me a Python quiz"

What would you like to learn today?`;
  }

  if (messageLower.includes('career') || messageLower.includes('job')) {
    return `Career guidance for technical fields:

1. Build a Strong Foundation
- Master core concepts
- Complete 3-5 substantial projects
- Build a portfolio website

2. Practical Skills
- Version control (Git/GitHub)
- Problem-solving ability
- Communication skills
- Continuous learning mindset

3. Get Experience
- Internships
- Freelance projects
- Open source contributions
- Hackathons and competitions

4. Job Preparation
- Update resume with projects
- Practice coding interviews
- Build LinkedIn profile
- Network with professionals

5. Interview Prep
- Data structures & algorithms
- System design basics
- Behavioral questions
- Technical depth in your field

6. Resources
- LeetCode for DSA practice
- System Design Primer
- Interview Cake
- Company-specific prep

What aspect of career preparation would you like to focus on?`;
  }

  return `I'm here to help you learn! Available features:

🎓 Course Recommendations
- Ask: "I'm a [branch] student, what skills?"

📚 Step-by-Step Learning
- Ask: "Explain [concept]"
- Try: "Explain Machine Learning"

🗺️ Learning Roadmaps
- Ask: "Show roadmap for [topic]"
- Example: "Data Science roadmap"

💻 Project Ideas
- Ask: "Suggest projects for [topic]"
- Try: "Beginner web dev projects"

🧠 Knowledge Quizzes
- Ask: "Quiz me on [topic]"
- Try: "Machine Learning quiz"

📖 Learning Resources
- Ask: "Best resources for [topic]"

🎯 Career Guidance
- Ask: "How to prepare for [field]"

What would you like to explore?`;
}
