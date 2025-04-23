import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  activePage: string;
  onPageChange: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  activePage,
  onPageChange,
}) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} onPageChange={onPageChange} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={title} />
        
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;