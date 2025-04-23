import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  Users, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Image
} from 'lucide-react';
import { useCMS } from '../../context/CMSContext';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
  const { currentUser, logout } = useCMS();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'content', label: 'Content', icon: <FileText size={20} /> },
    { id: 'categories', label: 'Categories', icon: <FolderOpen size={20} /> },
    { id: 'media', label: 'Media', icon: <Image size={20} /> },
    { id: 'users', label: 'Users', icon: <Users size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  if (!currentUser) return null;

  return (
    <div className={`bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!collapsed && (
          <h1 className="text-xl font-bold text-gray-900">React CMS</h1>
        )}
        <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-gray-100 ml-auto">
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`${
                activePage === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              } group flex items-center px-3 py-3 text-sm font-medium rounded-md w-full transition-colors duration-150 ease-in-out`}
            >
              <span className={`${collapsed ? 'mx-auto' : 'mr-3'}`}>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="flex items-center px-3 py-3 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 w-full transition-colors duration-150 ease-in-out"
        >
          <span className={`${collapsed ? 'mx-auto' : 'mr-3'}`}>
            <LogOut size={20} />
          </span>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;