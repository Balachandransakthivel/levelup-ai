# Chat-Based Intelligent Learning Assistant

A comprehensive AI-powered learning platform that helps students from ALL technical branches with personalized course recommendations, step-by-step learning guidance, and curated educational resources.

## Features

### Core Capabilities
- **Multi-Domain Support**: Covers all technical fields including CSE, IT, AI & Data Science, Cyber Security, Mechanical, Electrical, ECE, Civil, Mechatronics, IoT, Robotics, Embedded Systems, and Cloud Computing
- **Personalized Recommendations**: Course suggestions based on your branch, skill level, and interests
- **Step-by-Step Learning**: Concept explanations broken down like a tutor would teach
- **Learning Resources**: Curated YouTube videos, articles, documentation, and online courses
- **Career Roadmaps**: Structured learning paths from beginner to advanced
- **Project Suggestions**: Real-world project ideas to build practical skills
- **Progress Tracking**: Save your learning progress and conversation history

### User Experience
- **ChatGPT-like Interface**: Intuitive chat interface for natural conversations
- **Conversation History**: Access all your previous learning conversations
- **Profile Management**: Set your technical branch, skill level, and learning goals
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Secure Authentication**: Email/password authentication with Supabase

## Technology Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for build tooling

### Backend & Database
- Supabase (PostgreSQL database)
- Supabase Authentication
- Row Level Security (RLS) for data protection

### Features Implemented
- Real-time chat interface
- User authentication and profiles
- Conversation management
- Message persistence
- Course and resource database
- Responsive mobile design

## Database Schema

### Tables
- `profiles` - User profiles with branch, skill level, and interests
- `branches` - Technical branches/domains (pre-populated with 14 fields)
- `conversations` - Chat conversation sessions
- `messages` - Individual messages in conversations
- `courses` - Course catalog for different branches
- `resources` - Learning resources (YouTube, articles, docs, courses)
- `roadmaps` - Learning roadmaps for different fields
- `user_progress` - Track user learning progress

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase project created
- Environment variables configured

### Environment Setup
1. Copy `.env.example` to `.env`
2. Add your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Usage Examples

### Get Course Recommendations
"I'm a CSE student, beginner level, what should I learn?"

### Learn Concepts
"Explain Machine Learning step by step"
"How does IoT work?"
"What are data structures?"

### Get Resources
"Best resources for learning React"
"YouTube tutorials for Python"

### Career Guidance
"Show me a roadmap for Data Science"
"What skills do I need for web development?"

### Project Ideas
"Suggest beginner projects for ECE students"
"What can I build to practice my skills?"

## Supported Technical Domains

### Computer & IT Fields
- Computer Science Engineering (CSE)
- Information Technology (IT)
- Artificial Intelligence & Data Science (AIDS)
- Cyber Security (CS)

### Core Engineering Fields
- Mechanical Engineering (MECH)
- Electrical Engineering (EE)
- Electronics & Communication (ECE)
- Civil Engineering (CE)
- Mechatronics (MECT)

### Science & Applied Tech
- Data Science (DS)
- Internet of Things (IOT)
- Robotics (ROB)
- Embedded Systems (ES)
- Cloud Computing (CC)

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   └── Chat/
│       ├── ChatInterface.tsx
│       ├── Sidebar.tsx
│       ├── MessageList.tsx
│       ├── MessageInput.tsx
│       └── ProfileSetup.tsx
├── contexts/
│   └── AuthContext.tsx
├── lib/
│   ├── supabase.ts
│   └── chatbot.ts
├── types/
│   └── database.ts
├── App.tsx
└── main.tsx
```

## Security Features

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Authenticated access required for all operations
- Secure password authentication
- Environment variables for sensitive data

## Future Enhancements

- Quiz & self-assessment features
- Voice-based interaction
- Advanced AI integration for better responses
- Project-based learning modules
- Peer learning and community features
- Mobile app (React Native)
- Video tutorials integration
- Gamification and achievements

## License

This project is open source and available for educational purposes.

## Support

For questions or support, please refer to the documentation or contact the development team.
