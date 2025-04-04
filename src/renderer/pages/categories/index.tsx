import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Category from '@/components/Category';

export default function CategoriesList() {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    window.api.getAllCategories().then(setcategories);
  }, []);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      <div className="columns-1 sm:columns-2 gap-4 space-y-4">
        {categories.map((category: any) => (
          <div key={category.id} className="break-inside-avoid">
            {
              category.id ? (<Category category={category} />) : <></>
            }
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
