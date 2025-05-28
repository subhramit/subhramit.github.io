import { Character, BlogPost } from '../types';

export const characters: Character[] = [
  { name: 'Mom and Dad', description: '' },
  { name: 'Varna', description: 'my favourite poet as well as one of my best friends' },
  { name: 'Madhav', description: 'my best buddy in college, a partner in crime who\'s been with me through thick and thin' },
  // Add other characters...
];

export const blogPosts: BlogPost[] = [
  {
    title: 'Thought - The Patronus Charm',
    date: '10.07.2023',
    quote: {
      text: 'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.',
      author: 'Albus Dumbledore, Harry Potter and the Prisoner of Azkaban'
    },
    content: 'Whenever we think about fantasies like the Harry Potter series...' // Add full content here
  }
  // Add other blog posts...
];