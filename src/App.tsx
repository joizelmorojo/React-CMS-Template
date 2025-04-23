import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import ContentList from './pages/ContentList';
import CategoryList from './pages/CategoryList';
import MediaLibrary from './pages/MediaLibrary';
import LoginForm from './components/auth/LoginForm';
import { CMSProvider, useCMS } from './context/CMSContext';

const MainApp: React.FC = () => {
  const { currentUser } = useCMS();
  const [activePage, setActivePage] = useState<string>('dashboard');

  if (!currentUser) {
    return <LoginForm />;
  }

  const renderActivePage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'content':
        return <ContentList />;
      case 'categories':
        return <CategoryList />;
      case 'media':
        return <MediaLibrary />;
      case 'users':
        return <div>Users Management</div>;
      case 'settings':
        return <div>Settings</div>;
      default:
        return <Dashboard />;
    }
  };

  const getPageTitle = () => {
    switch (activePage) {
      case 'dashboard':
        return 'Dashboard';
      case 'content':
        return 'Content Management';
      case 'categories':
        return 'Categories';
      case 'media':
        return 'Media Library';
      case 'users':
        return 'User Management';
      case 'settings':
        return 'Settings';
      default:
        return 'Dashboard';
    }
  };

  return (
    <Layout
      title={getPageTitle()}
      activePage={activePage}
      onPageChange={setActivePage}
    >
      {renderActivePage()}
    </Layout>
  );
};

function App() {
  return (
    <CMSProvider>
      <MainApp />
    </CMSProvider>
  );
}

export default App;