import React, { useState } from 'react';
import { useCMS } from '../context/CMSContext';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Edit, Trash2, Plus, Save, X } from 'lucide-react';

const CategoryList: React.FC = () => {
  const { categories, addCategory, updateCategory, deleteCategory } = useCMS();
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategorySlug, setNewCategorySlug] = useState('');
  const [newCategoryDescription, setNewCategoryDescription] = useState('');

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    
    const slug = newCategorySlug.trim() || newCategoryName.trim().toLowerCase().replace(/\s+/g, '-');
    
    addCategory({
      name: newCategoryName.trim(),
      slug,
      description: newCategoryDescription.trim() || undefined,
    });
    
    setIsAddingCategory(false);
    setNewCategoryName('');
    setNewCategorySlug('');
    setNewCategoryDescription('');
  };

  const handleUpdateCategory = (id: string) => {
    if (!newCategoryName.trim()) return;
    
    const slug = newCategorySlug.trim() || newCategoryName.trim().toLowerCase().replace(/\s+/g, '-');
    
    updateCategory({
      id,
      name: newCategoryName.trim(),
      slug,
      description: newCategoryDescription.trim() || undefined,
    });
    
    setEditingCategoryId(null);
    setNewCategoryName('');
    setNewCategorySlug('');
    setNewCategoryDescription('');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      deleteCategory(id);
    }
  };

  const startEditing = (category: typeof categories[0]) => {
    setEditingCategoryId(category.id);
    setNewCategoryName(category.name);
    setNewCategorySlug(category.slug);
    setNewCategoryDescription(category.description || '');
  };

  const cancelEditing = () => {
    setEditingCategoryId(null);
    setNewCategoryName('');
    setNewCategorySlug('');
    setNewCategoryDescription('');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
        <Button 
          variant="primary" 
          icon={<Plus size={16} />}
          onClick={() => setIsAddingCategory(true)}
          disabled={isAddingCategory}
        >
          Add Category
        </Button>
      </div>
      
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Slug
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isAddingCategory && (
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Category Name"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="category-slug"
                        value={newCategorySlug}
                        onChange={(e) => setNewCategorySlug(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        placeholder="Description (optional)"
                        value={newCategoryDescription}
                        onChange={(e) => setNewCategoryDescription(e.target.value)}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="success"
                          size="sm"
                          icon={<Save size={16} />}
                          onClick={handleAddCategory}
                        >
                          Save
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          icon={<X size={16} />}
                          onClick={() => setIsAddingCategory(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </td>
                  </tr>
                )}
                
                {categories.map((category) => (
                  <tr key={category.id} className={`hover:bg-gray-50 ${editingCategoryId === category.id ? 'bg-blue-50' : ''}`}>
                    {editingCategoryId === category.id ? (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            value={newCategorySlug}
                            onChange={(e) => setNewCategorySlug(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="text"
                            value={newCategoryDescription}
                            onChange={(e) => setNewCategoryDescription(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="success"
                              size="sm"
                              icon={<Save size={16} />}
                              onClick={() => handleUpdateCategory(category.id)}
                            >
                              Save
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              icon={<X size={16} />}
                              onClick={cancelEditing}
                            >
                              Cancel
                            </Button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{category.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {category.slug}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {category.description || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              icon={<Edit size={16} />}
                              onClick={() => startEditing(category)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              icon={<Trash2 size={16} />}
                              onClick={() => handleDelete(category.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
                {categories.length === 0 && !isAddingCategory && (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                      No categories found. Create a new category to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryList;