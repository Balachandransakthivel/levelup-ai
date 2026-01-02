import { useEffect, useRef } from 'react';
import { User, Bot } from 'lucide-react';
import { Header } from '../Common/Header';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
}

interface MessageListProps {
  messages: Message[];
  onToggleSidebar: () => void;
}

export function MessageList({ messages, onToggleSidebar }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-950">
        <Header onToggleSidebar={onToggleSidebar} />
        <div className="flex-1 flex items-center justify-center overflow-y-auto px-4">
          <div className="text-center max-w-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-2xl mb-6">
              <Bot className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Level Up AI
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Your intelligent learning companion. Ask me about courses, concepts, roadmaps, projects, and more.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-blue-100 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Course Recommendations</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">"I'm a CSE student, what skills?"</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-blue-100 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Step-by-Step Learning</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">"Explain Machine Learning"</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-blue-100 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Learning Roadmaps</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">"Show roadmap for DS"</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-blue-100 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">Project Ideas</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">"Suggest projects"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-gray-950">
      <Header onToggleSidebar={onToggleSidebar} />
      <div className="flex-1 overflow-y-auto w-full min-h-0">
        <div className="max-w-3xl mx-auto w-full px-4 py-8">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 mb-6 w-full ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.role === 'assistant' && (
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white max-w-xl break-words'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 max-w-2xl'
                }`}
              >
                <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
              </div>
              {message.role === 'user' && (
                <div className="flex-shrink-0 w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </div>
              )}
            </div>
          ))}
          <div ref={bottomRef} className="h-4" />
        </div>
      </div>
    </div>
  );
}
