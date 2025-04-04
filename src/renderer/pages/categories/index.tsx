import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import CategoryComponent from '@/components/CategoryComponent';
import { Category } from '@/types/Category';
import { Link } from 'react-router-dom';

export default function CategoriesList() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    window.api.getAllCategories()
      .then((categories) => {
        const filteredCategories = categories.filter((category: any) => category.id);
        setCategories(filteredCategories);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  if (categories.length == 0) return (
    <MainLayout>
      <h2>No Categories!</h2>
      <Link to="/">Home</Link>
    </MainLayout>
  )

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      <div className="columns-1 sm:columns-2 gap-4 space-y-4">
        {categories.map((category: any) => (
          <div key={category.id} className="break-inside-avoid">
            {
              category.id ? (<CategoryComponent category={category} />) : <></>
            }
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
