import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import ItemCard from '@/components/ItemCard';

function uint8ArrayToDataUrl(bytes: Uint8Array): string {
  const blob = new Blob([bytes], { type: 'image/png' }); // adjust if image is jpeg etc
  return URL.createObjectURL(blob);
}

export default function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState<any>(null);
  const [categoryItems, setCategoryItems] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    window.api.getCategoryById(id).then(setCategory);
  }, [id]);

  useEffect(() => {
    async function fetchCategoryItems() {
      const rawCategoryItems = await window.api.getCategoryItems(id);

      const fullItems = await Promise.all(
        rawCategoryItems.map((categoryItem: any) =>
          window.api.getItemById(categoryItem.item_id)
        )
      );

      setCategoryItems(fullItems);
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
              <ItemCard item={item} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Items</p>
      )}

    </MainLayout>
  );
}
