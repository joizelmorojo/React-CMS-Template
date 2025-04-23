import React, { createContext, useContext, useState, useEffect } from 'react';
import { ContentItem, Category, User, MediaItem } from '../types';
import { mockContent, mockCategories, mockUsers, mockMedia } from '../data/mockData';

interface CMSContextType {
  content: ContentItem[];
  categories: Category[];
  users: User[];
  media: MediaItem[];
  addContent: (item: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateContent: (item: ContentItem) => void;
  deleteContent: (id: string) => void;
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateCategory: (category: Category) => void;
  deleteCategory: (id: string) => void;
  getContentByCategory: (categorySlug: string) => ContentItem[];
  searchContent: (query: string) => ContentItem[];
  currentUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<ContentItem[]>(mockContent);
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [media, setMedia] = useState<MediaItem[]>(mockMedia);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Load data from localStorage if available
  useEffect(() => {
    const storedContent = localStorage.getItem('cms_content');
    const storedCategories = localStorage.getItem('cms_categories');
    const storedMedia = localStorage.getItem('cms_media');
    const storedUser = localStorage.getItem('cms_current_user');

    if (storedContent) setContent(JSON.parse(storedContent));
    if (storedCategories) setCategories(JSON.parse(storedCategories));
    if (storedMedia) setMedia(JSON.parse(storedMedia));
    if (storedUser) setCurrentUser(JSON.parse(storedUser));
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cms_content', JSON.stringify(content));
    localStorage.setItem('cms_categories', JSON.stringify(categories));
    localStorage.setItem('cms_media', JSON.stringify(media));
    if (currentUser) {
      localStorage.setItem('cms_current_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('cms_current_user');
    }
  }, [content, categories, media, currentUser]);

  const addContent = (item: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem: ContentItem = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setContent([...content, newItem]);
  };

  const updateContent = (updatedItem: ContentItem) => {
    setContent(
      content.map((item) =>
        item.id === updatedItem.id ? { ...updatedItem, updatedAt: new Date() } : item
      )
    );
  };

  const deleteContent = (id: string) => {
    setContent(content.filter((item) => item.id !== id));
  };

  const addCategory = (category: Omit<Category, 'id'>) => {
    const newCategory: Category = {
      ...category,
      id: Date.now().toString(),
    };
    setCategories([...categories, newCategory]);
  };

  const updateCategory = (updatedCategory: Category) => {
    setCategories(
      categories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    );
  };

  const deleteCategory = (id: string) => {
    setCategories(categories.filter((category) => category.id !== id));
  };

  const getContentByCategory = (categorySlug: string) => {
    return content.filter(
      (item) => categories.find((c) => c.id === item.category)?.slug === categorySlug
    );
  };

  const searchContent = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    return content.filter(
      (item) =>
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.content.toLowerCase().includes(lowercaseQuery) ||
        (item.excerpt && item.excerpt.toLowerCase().includes(lowercaseQuery)) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would validate against a backend
    // For demo, we just check if the email exists in our mock users
    const user = users.find((u) => u.email === email);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <CMSContext.Provider
      value={{
        content,
        categories,
        users,
        media,
        addContent,
        updateContent,
        deleteContent,
        addCategory,
        updateCategory,
        deleteCategory,
        getContentByCategory,
        searchContent,
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};