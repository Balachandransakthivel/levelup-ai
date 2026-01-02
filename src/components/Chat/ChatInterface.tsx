import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { Sidebar } from './Sidebar';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { ProfileSetup } from './ProfileSetup';
import { generateResponse } from '../../lib/chatbot';
import { getExplanation, formatExplanationAsText } from '../../lib/enhanced-chatbot';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
}

export function ChatInterface() {
  const { user } = useAuth();
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (currentConversationId) {
      loadMessages();
    } else {
      setMessages([]);
    }
  }, [currentConversationId]);

  const loadMessages = async () => {
    if (!currentConversationId) return;

    const { data } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', currentConversationId)
      .order('created_at', { ascending: true });

    if (data) {
      setMessages(data);
    }
  };

  const createNewConversation = async (firstMessage: string) => {
    if (!user) return null;

    const title = firstMessage.slice(0, 50) + (firstMessage.length > 50 ? '...' : '');

    const { data, error } = await supabase
      .from('conversations')
      .insert({
        user_id: user.id,
        title,
      })
      .select()
      .single();

    if (error || !data) return null;
    return data.id;
  };

  const handleSendMessage = async (content: string) => {
    if (!user) return;

    setLoading(true);

    try {
      let conversationId = currentConversationId;

      if (!conversationId) {
        conversationId = await createNewConversation(content);
        if (!conversationId) {
          setLoading(false);
          return;
        }
        setCurrentConversationId(conversationId);
      }

      const { data: userMessage } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId,
          role: 'user',
          content,
        })
        .select()
        .single();

      if (userMessage) {
        setMessages((prev) => [...prev, userMessage]);
      }

      await supabase
        .from('conversations')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', conversationId);

      const { data: profile } = await supabase
        .from('profiles')
        .select('branch, skill_level')
        .eq('id', user.id)
        .maybeSingle();

      let response = await generateResponse(content, profile);

      const explanation = getExplanation(content);
      if (explanation) {
        response = formatExplanationAsText(explanation);
      }

      const { data: assistantMessage } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId,
          role: 'assistant',
          content: response,
        })
        .select()
        .single();

      if (assistantMessage) {
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewConversation = () => {
    setCurrentConversationId(null);
    setMessages([]);
    setShowSidebar(false);
  };

  const handleSelectConversation = (id: string) => {
    setCurrentConversationId(id);
    setShowSidebar(false);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar
        currentConversationId={currentConversationId}
        onSelectConversation={handleSelectConversation}
        onNewConversation={handleNewConversation}
        onOpenProfile={() => setShowProfile(true)}
        isOpen={showSidebar}
        onClose={() => setShowSidebar(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <MessageList
          messages={messages}
          onToggleSidebar={() => setShowSidebar(!showSidebar)}
        />
        <MessageInput onSend={handleSendMessage} disabled={loading} />
      </div>

      <ProfileSetup isOpen={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  );
}
