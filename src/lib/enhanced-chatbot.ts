interface Reference {
  title: string;
  url: string;
  type: 'youtube' | 'website' | 'documentation';
}

interface Explanation {
  title: string;
  summary: string;
  details: string[];
  visualization?: string;
  references?: Reference[];
}

const explanations: Record<string, Explanation> = {
  'machine learning': {
    title: 'Machine Learning Explained',
    summary:
      'Machine Learning is AI where computers learn patterns from data without explicit programming. It powers recommendation systems, spam filters, and voice assistants.',
    details: [
      'Supervised Learning: Learning from labeled data (emails marked as spam/not spam)',
      'Unsupervised Learning: Finding patterns in unlabeled data (customer groups)',
      'Reinforcement Learning: Learning through rewards (game playing AI)',
      'Training: Feed data to algorithm, algorithm finds patterns',
      'Testing: Evaluate accuracy on new, unseen data',
    ],
    visualization: `
   Input Data → Algorithm → Model → Predictions
       ↓          ↓         ↓         ↓
    Features  Patterns  Weights   Output
    `,
    references: [
      {
        title: 'Google ML Crash Course',
        url: 'https://developers.google.com/machine-learning/crash-course',
        type: 'documentation',
      },
      {
        title: 'Machine Learning by Andrew Ng (Coursera)',
        url: 'https://www.coursera.org/learn/machine-learning',
        type: 'website',
      },
      {
        title: 'ML in 100 Seconds',
        url: 'https://www.youtube.com/watch?v=4qVRBYAdVQo',
        type: 'youtube',
      },
    ],
  },

  'web development': {
    title: 'Web Development Explained',
    summary:
      'Web development creates websites and web applications using frontend (what users see) and backend (server logic) technologies.',
    details: [
      'Frontend: HTML (structure), CSS (styling), JavaScript (interactivity)',
      'Backend: Node.js/Python/Java processes requests and manages data',
      'Database: Stores user data, posts, profiles, etc.',
      'APIs: Communication between frontend and backend',
      'Deployment: Uploading your app to the internet',
    ],
    visualization: `
   User Browser          Server           Database
       ↓                  ↓                  ↓
   HTML/CSS/JS ←→ Node.js/Express ←→ MongoDB/PostgreSQL
    (Frontend)   (Backend API)      (Data Storage)
    `,
    references: [
      {
        title: 'freeCodeCamp Web Development',
        url: 'https://www.youtube.com/c/FreeCodeCamp',
        type: 'youtube',
      },
      {
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/en-US/',
        type: 'documentation',
      },
      {
        title: 'The Odin Project (Free)',
        url: 'https://www.theodinproject.com/',
        type: 'website',
      },
    ],
  },

  'python': {
    title: 'Python Programming Explained',
    summary:
      'Python is a beginner-friendly language used for web development, data science, automation, and AI. Known for clean syntax and powerful libraries.',
    details: [
      'Variables: Store data (name = "John", age = 25)',
      'Data Types: Strings, Numbers, Lists, Dictionaries',
      'Loops: Repeat code (for i in range(5))',
      'Functions: Reusable blocks of code',
      'Libraries: Pre-written code for specific tasks (NumPy, Pandas)',
    ],
    visualization: `
   Python Code
       ↓
   Variables (Data)
       ↓
   Functions (Logic)
       ↓
   Libraries (Tools)
       ↓
   Output/Results
    `,
    references: [
      {
        title: 'Python Tutorial (Official)',
        url: 'https://docs.python.org/3/tutorial/',
        type: 'documentation',
      },
      {
        title: 'Python for Beginners',
        url: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
        type: 'youtube',
      },
      {
        title: 'Codecademy Python Course',
        url: 'https://www.codecademy.com/learn/learn-python-3',
        type: 'website',
      },
    ],
  },

  'data science': {
    title: 'Data Science Explained',
    summary:
      'Data Science extracts insights from data using statistics, programming, and visualization. Powers business decisions, predictions, and discoveries.',
    details: [
      'Data Collection: Gather data from various sources',
      'Data Cleaning: Remove errors and inconsistencies',
      'Exploratory Analysis: Visualize and understand patterns',
      'Model Building: Create predictive models using ML',
      'Visualization: Create charts to communicate findings',
    ],
    visualization: `
   Raw Data → Clean → Explore → Model → Visualize → Insights
     ↓         ↓        ↓        ↓        ↓          ↓
    CSV/DB   Handle   Charts   Train   Graphs    Reports
            Missing         Evaluate
    `,
    references: [
      {
        title: 'Data Science Roadmap',
        url: 'https://www.youtube.com/watch?v=X3paOmcrTjQ',
        type: 'youtube',
      },
      {
        title: 'Kaggle Datasets & Competitions',
        url: 'https://www.kaggle.com/',
        type: 'website',
      },
      {
        title: 'Pandas Documentation',
        url: 'https://pandas.pydata.org/docs/',
        type: 'documentation',
      },
    ],
  },

  'iot': {
    title: 'IoT (Internet of Things) Explained',
    summary:
      'IoT connects physical devices to the internet to collect and share data. Used in smart homes, wearables, and industrial systems.',
    details: [
      'Sensors: Collect data (temperature, motion, light, humidity)',
      'Microcontrollers: Process data locally (Arduino, ESP32)',
      'Connectivity: Send data to cloud (WiFi, Bluetooth, LoRa)',
      'Cloud Platform: Store and analyze data (AWS, Google Cloud)',
      'Mobile App: Users access and control devices remotely',
    ],
    visualization: `
   Sensor → Microcontroller → Internet → Cloud → User App
    ↓          ↓               ↓        ↓         ↓
   Data      Process         WiFi    Storage   Control
   Collect   & Send                  Analytics
    `,
    references: [
      {
        title: 'Arduino Getting Started',
        url: 'https://www.arduino.cc/en/Guide',
        type: 'documentation',
      },
      {
        title: 'IoT Full Course',
        url: 'https://www.youtube.com/watch?v=h0gWfVCSGQQ',
        type: 'youtube',
      },
      {
        title: 'Raspberry Pi Projects',
        url: 'https://www.raspberrypi.org/projects/',
        type: 'website',
      },
    ],
  },

  'cloud computing': {
    title: 'Cloud Computing Explained',
    summary:
      'Cloud computing delivers computing services (servers, storage, databases) over the internet instead of local hardware. Powers Netflix, Uber, Gmail.',
    details: [
      'IaaS (Infrastructure): Rent servers and storage (AWS EC2)',
      'PaaS (Platform): Pre-built tools for development',
      'SaaS (Software): Use software online (Gmail, Dropbox)',
      'Scalability: Automatically handle more users',
      'Pay-as-you-go: Pay only for what you use',
    ],
    visualization: `
   Traditional                Cloud
   ↓                          ↓
   Your Server          AWS/Google/Azure
   Your Storage         Shared Resources
   Your Maintenance     Provider Handles
   High Cost            Lower Cost
    `,
    references: [
      {
        title: 'AWS Free Tier',
        url: 'https://aws.amazon.com/free/',
        type: 'website',
      },
      {
        title: 'Cloud Computing Basics',
        url: 'https://www.youtube.com/watch?v=9kaILkbEVvE',
        type: 'youtube',
      },
      {
        title: 'Google Cloud Documentation',
        url: 'https://cloud.google.com/docs',
        type: 'documentation',
      },
    ],
  },

  'api': {
    title: 'APIs (Application Programming Interface) Explained',
    summary:
      'An API allows different software to communicate. Like a restaurant menu - you request data, and the server returns what you asked for.',
    details: [
      'Request: You ask for data (GET user info)',
      'Response: Server sends back data (JSON format)',
      'REST API: Uses HTTP methods (GET, POST, PUT, DELETE)',
      'Endpoints: Different URLs for different requests',
      'Authentication: Verify you have permission to access data',
    ],
    visualization: `
   Your App          API Server         Database
      ↓                 ↓                  ↓
   Request    →    Process     →    Retrieve
   (GET /user)     (Check DB)      (User Data)
      ↑                 ↑                  ↑
   Response    ←    Format      ←    Return
   (JSON)           (JSON)            Data
    `,
    references: [
      {
        title: 'REST API Tutorial',
        url: 'https://www.youtube.com/watch?v=SLwpqD8n3d0',
        type: 'youtube',
      },
      {
        title: 'How APIs Work',
        url: 'https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/',
        type: 'website',
      },
      {
        title: 'MDN - HTTP Methods',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods',
        type: 'documentation',
      },
    ],
  },

  'vs code': {
    title: 'VS Code (Visual Studio Code) Explained',
    summary:
      'VS Code is a lightweight, powerful code editor by Microsoft. It\'s used by millions of developers worldwide for writing code, debugging, and building applications across all programming languages.',
    details: [
      'Free & Open Source: No cost, free to download and use forever',
      'IntelliSense: Smart code suggestions as you type (auto-complete)',
      'Debugging: Find and fix errors in your code with built-in debugger',
      'Extensions: Install thousands of plugins to add features (Python, React, etc.)',
      'Terminal: Built-in command line to run commands directly',
      'Git Integration: Track code changes, commit, and push to GitHub',
      'Multiple Languages: Supports Python, JavaScript, C++, Java, Go, Rust, etc.',
      'Live Server: Preview websites in browser while editing (with extension)',
    ],
    visualization: `
   Write Code    ← VS Code →    Debug & Test
       ↓              ↓              ↓
   JavaScript      Editor         Run Code
   Python         Features      Extensions
   Java           IntelliSense   Terminal
       ↓              ↓              ↓
   GitHub Integration      Built-in Tools
    `,
    references: [
      {
        title: 'VS Code Official Website',
        url: 'https://code.visualstudio.com/',
        type: 'website',
      },
      {
        title: 'VS Code Tutorial for Beginners',
        url: 'https://www.youtube.com/watch?v=VqCgcpAypFQ',
        type: 'youtube',
      },
      {
        title: 'VS Code Documentation',
        url: 'https://code.visualstudio.com/docs',
        type: 'documentation',
      },
      {
        title: 'Top VS Code Extensions',
        url: 'https://www.youtube.com/watch?v=c5GJsrH811c',
        type: 'youtube',
      },
    ],
  },

  'javascript': {
    title: 'JavaScript Programming Explained',
    summary:
      'JavaScript is the programming language of the web. It runs in every browser and powers interactive websites. Used for front-end development, back-end (Node.js), and even mobile apps.',
    details: [
      'Variables: Store data (var, let, const)',
      'Data Types: Strings, Numbers, Booleans, Arrays, Objects',
      'Functions: Reusable blocks of code that perform tasks',
      'Events: Respond to user actions (click, hover, type)',
      'DOM Manipulation: Change HTML/CSS with JavaScript',
      'Async/Promises: Handle operations that take time (API calls)',
      'ES6+: Modern features like arrow functions, classes, async/await',
      'Frameworks: React, Vue, Angular simplify building apps',
    ],
    visualization: `
   Browser
      ↓
   JavaScript Engine
      ↓
   Reads Code → Interprets → Executes → Updates HTML/CSS
      ↓
   User Sees Changes
    `,
    references: [
      {
        title: 'JavaScript Basics (MDN)',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics',
        type: 'documentation',
      },
      {
        title: 'JavaScript Course (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=PkZYUXjMrWE',
        type: 'youtube',
      },
      {
        title: 'Eloquent JavaScript Book',
        url: 'https://eloquentjavascript.net/',
        type: 'website',
      },
    ],
  },

  'react': {
    title: 'React Framework Explained',
    summary:
      'React is a JavaScript library for building user interfaces. It makes it easy to create interactive, fast-loading web applications by breaking UIs into reusable components.',
    details: [
      'Components: Reusable pieces of UI (buttons, cards, forms)',
      'JSX: Write HTML-like code inside JavaScript',
      'State: Data that changes and causes UI updates',
      'Props: Pass data from parent to child components',
      'Hooks: Functions like useState, useEffect to manage state',
      'Virtual DOM: React updates only what changed (fast)',
      'Lifecycle: Components have birth, life, and death stages',
      'npm Packages: Extend React with libraries (react-router, axios)',
    ],
    visualization: `
   User Input
      ↓
   Update State
      ↓
   React Re-renders Component
      ↓
   Virtual DOM compares changes
      ↓
   Updates only changed elements
      ↓
   Browser displays new UI
    `,
    references: [
      {
        title: 'React Official Documentation',
        url: 'https://react.dev/',
        type: 'documentation',
      },
      {
        title: 'React Course (Scrimba)',
        url: 'https://scrimba.com/learn/learnreact',
        type: 'website',
      },
      {
        title: 'React in 100 Seconds',
        url: 'https://www.youtube.com/watch?v=Tn6-PIqc4UM',
        type: 'youtube',
      },
    ],
  },

  'git': {
    title: 'Git & GitHub Explained',
    summary:
      'Git is a version control system that tracks changes in your code. GitHub is where you store and share your code online. Essential for teamwork and managing code history.',
    details: [
      'Repository: Folder that contains your project and its history',
      'Commit: Save a snapshot of your code with a message',
      'Branch: Separate copy of code to work on features safely',
      'Push: Upload your code to GitHub',
      'Pull: Download latest code from GitHub',
      'Merge: Combine code from different branches',
      'Conflicts: When two changes affect the same lines',
      'GitHub: Cloud platform to host, share, and collaborate on code',
    ],
    visualization: `
   Your Computer          GitHub (Cloud)
      ↓                       ↓
   git init          Create Repository
      ↓                       ↓
   Write Code        Track History
      ↓                       ↓
   git add           Prepare Changes
      ↓                       ↓
   git commit        Save Snapshot
      ↓                       ↓
   git push          Upload to Cloud
      ↓                       ↓
   Others use        Download Code
   git pull          and Collaborate
    `,
    references: [
      {
        title: 'Git & GitHub for Beginners',
        url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
        type: 'youtube',
      },
      {
        title: 'GitHub Official Docs',
        url: 'https://docs.github.com/',
        type: 'documentation',
      },
      {
        title: 'Atlassian Git Tutorials',
        url: 'https://www.atlassian.com/git/tutorials',
        type: 'website',
      },
    ],
  },

  'html': {
    title: 'HTML Basics Explained',
    summary:
      'HTML (HyperText Markup Language) is the foundation of web pages. It provides the structure and content that browsers display. Every website starts with HTML.',
    details: [
      'Tags: HTML uses tags like <p>, <div>, <h1> to mark up content',
      'Structure: HTML defines what content is (heading, paragraph, list)',
      'Semantic HTML: Use proper tags for meaning (use <nav> for navigation)',
      'Forms: Collect user input (text, buttons, dropdowns)',
      'Attributes: Add info to tags (id="main", class="card")',
      'Meta Tags: Control page information (title, description for SEO)',
      'Accessibility: Make pages usable for everyone',
      'DOCTYPE: Tells browser how to interpret the page',
    ],
    visualization: `
   HTML Document
      ↓
   <html>
      ├─ <head> (Information)
      │    ├─ <title>Page Title</title>
      │    └─ <meta> tags
      │
      └─ <body> (Content)
           ├─ <header>
           ├─ <main>
           │    ├─ <p> paragraphs
           │    └─ <div> sections
           └─ <footer>
    `,
    references: [
      {
        title: 'HTML Basics (MDN)',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
        type: 'documentation',
      },
      {
        title: 'HTML Tutorial (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=UB3IbeQ0x5w',
        type: 'youtube',
      },
      {
        title: 'W3Schools HTML Reference',
        url: 'https://www.w3schools.com/html/',
        type: 'website',
      },
    ],
  },

  'css': {
    title: 'CSS (Styling) Explained',
    summary:
      'CSS (Cascading Style Sheets) makes websites look beautiful. While HTML creates structure, CSS adds colors, fonts, layouts, and animations.',
    details: [
      'Selectors: Target HTML elements (p, .class, #id, div > p)',
      'Properties: Change appearance (color, font-size, margin)',
      'Box Model: Everything has padding, border, margin, content',
      'Flexbox: Arrange items in rows/columns easily',
      'Grid: Create 2D layouts (rows and columns)',
      'Media Queries: Make websites responsive for all screen sizes',
      'Transitions: Smooth animations when properties change',
      'Pseudo-classes: Style elements in different states (:hover, :active)',
    ],
    visualization: `
   Element
      ↓
   Box Model (Margin → Border → Padding → Content)
      ↓
   CSS Properties Applied
      ↓
   Display (block, inline, flex, grid)
      ↓
   Colors, Fonts, Sizes
      ↓
   Responsive (Media Queries)
      ↓
   Beautiful Styled Website
    `,
    references: [
      {
        title: 'CSS Basics (MDN)',
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps',
        type: 'documentation',
      },
      {
        title: 'CSS Complete Course',
        url: 'https://www.youtube.com/watch?v=wRNinF7YQqQ',
        type: 'youtube',
      },
      {
        title: 'CSS-Tricks Guide',
        url: 'https://css-tricks.com/',
        type: 'website',
      },
    ],
  },

  'node': {
    title: 'Node.js Backend Programming Explained',
    summary:
      'Node.js lets you use JavaScript on servers instead of just browsers. It powers the backend of many modern web applications and enables full-stack JavaScript development.',
    details: [
      'JavaScript Runtime: Run JavaScript outside the browser',
      'npm: Package manager to install libraries and tools',
      'Modules: Break code into reusable files with require/import',
      'Express.js: Framework to build web servers and APIs quickly',
      'Async/Await: Handle slow operations without blocking code',
      'File System: Read and write files on the server',
      'Databases: Connect to MongoDB, PostgreSQL, etc.',
      'Deployment: Deploy to Heroku, AWS, or other platforms',
    ],
    visualization: `
   Client (Browser)
      ↓
   HTTP Request
      ↓
   Node.js Server
      ├─ Express Routes
      ├─ Business Logic
      └─ Database Queries
      ↓
   HTTP Response (JSON)
      ↓
   Browser receives data
    `,
    references: [
      {
        title: 'Node.js Official',
        url: 'https://nodejs.org/',
        type: 'website',
      },
      {
        title: 'Node.js & Express Course',
        url: 'https://www.youtube.com/watch?v=I-GXFV3tHvw',
        type: 'youtube',
      },
      {
        title: 'Node.js Documentation',
        url: 'https://nodejs.org/docs/',
        type: 'documentation',
      },
    ],
  },

  'database': {
    title: 'Databases Explained',
    summary:
      'Databases store and organize data so applications can retrieve it quickly. They\'re the backbone of all modern applications (social media, banking, e-commerce).',
    details: [
      'SQL Databases: Structured data in tables (PostgreSQL, MySQL)',
      'NoSQL Databases: Flexible data in JSON-like format (MongoDB)',
      'Queries: Request specific data from database',
      'Relationships: Connect data in different tables',
      'Indexing: Speed up searches on large datasets',
      'Transactions: Ensure data consistency (all or nothing)',
      'Backups: Protect data from loss',
      'Scaling: Handle millions of users and requests',
    ],
    visualization: `
   Application
      ↓
   Database Query
      ↓
   Database Engine
      ├─ Finds Data
      ├─ Filters Results
      └─ Sorts Records
      ↓
   Returns Data
      ↓
   Application uses data
    `,
    references: [
      {
        title: 'SQL Tutorial',
        url: 'https://www.w3schools.com/sql/',
        type: 'website',
      },
      {
        title: 'MongoDB University',
        url: 'https://university.mongodb.com/',
        type: 'website',
      },
      {
        title: 'Database Design Basics',
        url: 'https://www.youtube.com/watch?v=qpIiPyMWWh0',
        type: 'youtube',
      },
    ],
  },
};

export function getExplanation(topic: string): Explanation | undefined {
  const lowerTopic = topic.toLowerCase();
  for (const [key, explanation] of Object.entries(explanations)) {
    if (lowerTopic.includes(key)) {
      return explanation;
    }
  }
  return undefined;
}

export function formatExplanationAsText(explanation: Explanation): string {
  let text = `${explanation.title}\n${'='.repeat(explanation.title.length)}\n\n`;

  text += `Summary:\n${explanation.summary}\n\n`;

  if (explanation.details.length > 0) {
    text += `Key Points:\n`;
    explanation.details.forEach((detail) => {
      text += `• ${detail}\n`;
    });
    text += '\n';
  }

  if (explanation.visualization) {
    text += `Visual Diagram:\n${explanation.visualization}\n\n`;
  }

  if (explanation.references && explanation.references.length > 0) {
    text += `Learn More:\n`;
    explanation.references.forEach((ref) => {
      text += `• ${ref.title}: ${ref.url}\n`;
    });
  }

  return text;
}
