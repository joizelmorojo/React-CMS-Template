import { ContentItem, Category, User, MediaItem } from '../types';

export const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    content: 'React is a popular JavaScript library for building user interfaces, particularly single-page applications...',
    excerpt: 'Learn the basics of React and how to get started with your first application.',
    author: 'Jane Doe',
    status: 'published',
    category: 'tutorials',
    tags: ['react', 'javascript', 'frontend'],
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-20'),
    featuredImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Advanced TypeScript Techniques',
    content: 'TypeScript adds static typing to JavaScript, enabling developers to catch errors early and make code more maintainable...',
    excerpt: 'Explore advanced TypeScript features to improve your code quality.',
    author: 'John Smith',
    status: 'draft',
    category: 'tutorials',
    tags: ['typescript', 'javascript', 'advanced'],
    createdAt: new Date('2025-02-10'),
    updatedAt: new Date('2025-02-12'),
    featuredImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'Design Systems for Developers',
    content: 'A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications...',
    excerpt: 'Learn how to implement and maintain design systems in your projects.',
    author: 'Alex Johnson',
    status: 'published',
    category: 'design',
    tags: ['design-systems', 'ui', 'frontend'],
    createdAt: new Date('2025-03-05'),
    updatedAt: new Date('2025-03-10'),
    featuredImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'Building RESTful APIs',
    content: 'REST (Representational State Transfer) is an architectural style for designing networked applications...',
    excerpt: 'A comprehensive guide to building RESTful APIs from scratch.',
    author: 'Sam Wilson',
    status: 'archived',
    category: 'backend',
    tags: ['api', 'rest', 'backend'],
    createdAt: new Date('2025-01-25'),
    updatedAt: new Date('2025-02-28'),
    featuredImage: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Tutorials',
    slug: 'tutorials',
    description: 'Step-by-step guides for learning new technologies',
  },
  {
    id: '2',
    name: 'Design',
    slug: 'design',
    description: 'Articles about UI/UX design and design systems',
  },
  {
    id: '3',
    name: 'Backend',
    slug: 'backend',
    description: 'Server-side development topics',
  },
  {
    id: '4',
    name: 'Frontend',
    slug: 'frontend',
    description: 'Client-side development topics',
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'editor',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'author',
    avatar: 'https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const mockMedia: MediaItem[] = [
  {
    id: '1',
    name: 'react-banner.jpg',
    url: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'image',
    size: 1024000,
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-10'),
  },
  {
    id: '2',
    name: 'typescript-code.jpg',
    url: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'image',
    size: 2048000,
    createdAt: new Date('2025-02-05'),
    updatedAt: new Date('2025-02-05'),
  },
  {
    id: '3',
    name: 'design-system.jpg',
    url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'image',
    size: 3072000,
    createdAt: new Date('2025-03-01'),
    updatedAt: new Date('2025-03-01'),
  },
];