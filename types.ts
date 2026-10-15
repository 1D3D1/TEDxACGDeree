
export interface Speaker {
  id: string;
  name: string;
  role: string;
  topic: string;
  imageUrl: string;
  track: 'Technology' | 'Bio-Design' | 'Culture' | 'Psychology' | 'Ethics' | 'Sustainability' | 'Astrophysics';
  bio: string;
}

export interface Talk {
  id: string;
  speaker: string;
  title: string;
  duration: string;
  thumbnailUrl: string;
  category: string;
  year: string;
  description: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
