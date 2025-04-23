import React from 'react';
import { BarChart, FileText, FolderOpen, Image, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { useCMS } from '../context/CMSContext';

const Dashboard: React.FC = () => {
  const { content, categories, media, users } = useCMS();
  
  // Count content by status
  const contentStats = {
    published: content.filter(item => item.status === 'published').length,
    draft: content.filter(item => item.status === 'draft').length,
    archived: content.filter(item => item.status === 'archived').length,
  };

  // Get recent content
  const recentContent = [...content]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Content</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{content.length}</h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText size={24} className="text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Categories</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{categories.length}</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <FolderOpen size={24} className="text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Media Items</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{media.length}</h3>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Image size={24} className="text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Users</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{users.length}</h3>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Users size={24} className="text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Content Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="pt-2 space-y-4">
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: `${(contentStats.published / content.length) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-4 text-sm">
                  Published: {contentStats.published}
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-yellow-500 h-4 rounded-full"
                    style={{ width: `${(contentStats.draft / content.length) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-4 text-sm">
                  Draft: {contentStats.draft}
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gray-500 h-4 rounded-full"
                    style={{ width: `${(contentStats.archived / content.length) * 100}%` }}
                  ></div>
                </div>
                <span className="ml-4 text-sm">
                  Archived: {contentStats.archived}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContent.map((item) => (
                <div key={item.id} className="flex items-center">
                  <div className={`h-2 w-2 rounded-full mr-2 ${
                    item.status === 'published' ? 'bg-green-500' : 
                    item.status === 'draft' ? 'bg-yellow-500' : 'bg-gray-500'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                    <p className="text-xs text-gray-500">
                      Updated {new Date(item.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize bg-gray-100">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;