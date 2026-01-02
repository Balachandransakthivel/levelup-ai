import { useState, useEffect } from 'react';
import { Plus, MessageSquare, LogOut, User, Moon, Sun } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

interface Conversation {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

interface SidebarProps {
  currentConversationId: string | null;
  onSelectConversation: (id: string) => void;
  onNewConversation: () => void;
  onOpenProfile: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({
  currentConversationId,
  onSelectConversation,
  onNewConversation,
  onOpenProfile,
  isOpen,
  onClose,
}: SidebarProps) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const { signOut } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    loadConversations();
  }, [currentConversationId]);

  const loadConversations = async () => {
    const { data } = await supabase
      .from('conversations')
      .select('*')
      .order('updated_at', { ascending: false });

    if (data) {
      setConversations(data);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white flex flex-col h-screen transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
      <div className="p-4 border-b border-gray-700">
        <div className="mb-3 flex items-center gap-2 px-2">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">LU</span>
          </div>
          <div>
            <p className="font-bold text-white text-sm">Level Up AI</p>
            <p className="text-xs text-gray-400">Learn & Grow</p>
          </div>
        </div>
        <button
          onClick={onNewConversation}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-3 rounded-lg transition font-medium text-white"
        >
          <Plus className="w-5 h-5" />
          <span>New Chat</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => onSelectConversation(conv.id)}
              className={`w-full text-left px-3 py-3 rounded-lg mb-1 transition flex items-center gap-3 ${
                currentConversationId === conv.id
                  ? 'bg-gray-800 text-white'
                  : 'hover:bg-gray-800 text-gray-300'
              }`}
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <span className="truncate text-sm">{conv.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700">
        <button
          onClick={onOpenProfile}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition"
        >
          <User className="w-5 h-5" />
          <span className="text-sm">Profile Settings</span>
        </button>
        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
          <span className="text-sm">{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
        </button>
        <button
          onClick={signOut}
          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-800 transition"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
      </div>
    </>
  );
}
