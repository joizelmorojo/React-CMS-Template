export interface ContentItem {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  author: string;
  status: 'draft' | 'published' | 'archived';
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  featuredImage?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'author';
  avatar?: string;
}

export interface MediaItem {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'document' | 'other';
  size: number;
  createdAt: Date;
  updatedAt: Date;
}