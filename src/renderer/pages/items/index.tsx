import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import ItemCard from '@/components/ItemCard';

export default function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.api.getAllItems().then(setItems);
  }, []);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Items</h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {items.map((item: any) => (
          <div key={item.id} className="break-inside-avoid">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
