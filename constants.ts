
import { Speaker, Talk } from './types';

export const SPEAKERS: Speaker[] = [
  {
    id: '1',
    name: 'Dr. Aris Vlahos',
    role: 'AI Ethicist',
    topic: 'The Quantum Identity Crisis',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    track: 'Technology',
    bio: 'A leading expert in decentralized systems, Dr. Aris is currently pioneering new ways to secure digital identities in the era of quantum computing.'
  },
  {
    id: '2',
    name: 'Elena Pavlides',
    role: 'Architect',
    topic: 'Buildings that Breathe',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    track: 'Bio-Design',
    bio: 'Elena researches the intersection of biological architecture and smart city design, focusing on self-healing building materials.'
  },
  {
    id: '3',
    name: 'Marcus Chen',
    role: 'Narrative Architect',
    topic: 'The Algorithmic Soul',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    track: 'Culture',
    bio: 'Marcus uses AI to generate dynamic storytelling environments for VR, pushing the limits of empathy in tech.'
  },
  {
    id: '4',
    name: 'Dr. Sarah Kostic',
    role: 'Psychologist',
    topic: 'The Productivity Paradox',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    track: 'Psychology',
    bio: 'Dr. Sarah is an organizational psychologist redefining how we view "unproductive" time in the corporate world.'
  }
];

export const TALKS: Talk[] = [
  {
    id: '1',
    speaker: 'Dr. Aris Papadopoulos',
    title: 'AI Ethics: The Invisible Bias in Our Algorithms',
    duration: '18:42',
    thumbnailUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    category: 'Technology',
    year: '2023',
    description: 'A deep dive into how data sets perpetuate human prejudices in modern machine learning systems.'
  },
  {
    id: '2',
    speaker: 'Sophia Lin',
    title: 'The Psychology of Digital Minimalism',
    duration: '12:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=800&auto=format&fit=crop',
    category: 'Humanity',
    year: '2022',
    description: 'Reclaiming your focus in a world designed to steal your attention every second.'
  },
  {
    id: '3',
    speaker: 'Marcus Thorne',
    title: 'Regenerative Design: Beyond Sustainability',
    duration: '15:58',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518005020251-0eb5c1842971?q=80&w=800&auto=format&fit=crop',
    category: 'Sustainability',
    year: '2021',
    description: 'Why doing "less harm" isn\'t enough anymore, and how we can heal the planet through architecture.'
  }
];
