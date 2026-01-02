export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string
          branch: string
          skill_level: string
          interests: string[]
          bio: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string
          branch?: string
          skill_level?: string
          interests?: string[]
          bio?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          branch?: string
          skill_level?: string
          interests?: string[]
          bio?: string
          created_at?: string
          updated_at?: string
        }
      }
      branches: {
        Row: {
          id: string
          name: string
          code: string
          category: string
          description: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          code: string
          category: string
          description?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          code?: string
          category?: string
          description?: string
          created_at?: string
        }
      }
      conversations: {
        Row: {
          id: string
          user_id: string
          title: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          conversation_id: string
          role: 'user' | 'assistant'
          content: string
          created_at: string
        }
        Insert: {
          id?: string
          conversation_id: string
          role: 'user' | 'assistant'
          content: string
          created_at?: string
        }
        Update: {
          id?: string
          conversation_id?: string
          role?: 'user' | 'assistant'
          content?: string
          created_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string
          branch_id: string | null
          skill_level: string
          topics: string[]
          duration: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string
          branch_id?: string | null
          skill_level?: string
          topics?: string[]
          duration?: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          branch_id?: string | null
          skill_level?: string
          topics?: string[]
          duration?: string
          created_at?: string
        }
      }
      resources: {
        Row: {
          id: string
          course_id: string | null
          title: string
          type: 'youtube' | 'article' | 'documentation' | 'course'
          url: string
          description: string
          created_at: string
        }
        Insert: {
          id?: string
          course_id?: string | null
          title: string
          type: 'youtube' | 'article' | 'documentation' | 'course'
          url: string
          description?: string
          created_at?: string
        }
        Update: {
          id?: string
          course_id?: string | null
          title?: string
          type?: 'youtube' | 'article' | 'documentation' | 'course'
          url?: string
          description?: string
          created_at?: string
        }
      }
      roadmaps: {
        Row: {
          id: string
          branch_id: string
          title: string
          steps: Json
          created_at: string
        }
        Insert: {
          id?: string
          branch_id: string
          title: string
          steps?: Json
          created_at?: string
        }
        Update: {
          id?: string
          branch_id?: string
          title?: string
          steps?: Json
          created_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          course_id: string
          status: 'not_started' | 'in_progress' | 'completed'
          progress_percentage: number
          started_at: string
          completed_at: string | null
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          status?: 'not_started' | 'in_progress' | 'completed'
          progress_percentage?: number
          started_at?: string
          completed_at?: string | null
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          status?: 'not_started' | 'in_progress' | 'completed'
          progress_percentage?: number
          started_at?: string
          completed_at?: string | null
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
