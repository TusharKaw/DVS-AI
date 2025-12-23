export interface MLA {
  id: string;
  name: string;
  constituency: string;
  party: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
  bio: string;
  achievements: string[];
  committees: string[];
  tenure: {
    start: string;
    end?: string;
  };
}

export interface Speech {
  id: string;
  mlaId: string;
  date: string;
  session: string;
  topic: string;
  content: string;
  summary?: string;
}

export interface AssemblySession {
  id: string;
  date: string;
  sessionNumber: string;
  agenda: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  sources?: {
    type: 'mla' | 'speech' | 'session';
    id: string;
    title: string;
  }[];
}

