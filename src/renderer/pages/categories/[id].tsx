import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import ItemCardComponent from '@/components/ItemCardComponent';
import uint8ArrayToDataUrl from '@/utils/image';
import { Category } from '@/types/Category';
import { CategoryItem } from '@/types/CategoryItem';
import { Item } from '@/types/Item';

export default function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [categoryItems, setCategoryItems] = useState<CategoryItem[] | Item[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  if (!id) return (
    <MainLayout>
      <h2>Missing Category ID!</h2>
      <Link to="/categories">Category List</Link>
    </MainLayout>
  )

  useEffect(() => {
    window.api.getCategoryById(id).then(setCategory);
  }, [id]);

  useEffect(() => {
    async function fetchCategoryItems() {
      if (!id) return; // id type guard to quiet error from typescript

      const rawCategoryItems = await window.api.getCategoryItems(id);

      let fullItems = await Promise.all(
        rawCategoryItems.map((categoryItem: any) =>
          window.api.getItemById(categoryItem.item_id)
        )
      );

      const validItems = fullItems.filter((item): item is Item => item !== null);

      setCategoryItems(validItems);
    }

    fetchCategoryItems();
  }, [category, id]);

  useEffect(() => {
    if (category) {
      setImageUrl(category.image ? uint8ArrayToDataUrl(category.image) : '');
    }
  }, [category]);

  if (!category) return <MainLayout>Loading...</MainLayout>;

  return (
    <MainLayout>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={category.id}
          className="w-full h-auto object-contain bg-gray-100 m-auto pixelated"
        />
      )}

      <h1 className="text-2xl font-bold">{category.id}</h1>

      {categoryItems ? (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {categoryItems.map((item: any) => (
            <div key={item.id} className="break-inside-avoid">
              <ItemCardComponent item={item} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Items</p>
      )}

    </MainLayout>
  );
}
