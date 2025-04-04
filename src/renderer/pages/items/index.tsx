import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import ItemCardComponent from '@/components/ItemCardComponent';
import { Item } from '@/types/Item';
import { Link } from 'react-router-dom';

export default function ItemsList() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    window.api.getAllItems().then(setItems);
  }, []);

  if (items.length == 0) return (
    <MainLayout>
      <h2>No Items!</h2>
      <Link to="/">Home</Link>
    </MainLayout>
  )

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Items</h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {items.map((item: any) => (
          <div key={item.id} className="break-inside-avoid">
            <ItemCardComponent item={item} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
