import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

function uint8ArrayToDataUrl(bytes: Uint8Array): string {
  const blob = new Blob([bytes], { type: 'image/png' }); // adjust if image is jpeg etc
  return URL.createObjectURL(blob);
}

export default function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    window.api.getItemById(id).then(setItem);
  }, [id]);

  useEffect(() => {
    if (item) {
      setImageUrl(item.image ? uint8ArrayToDataUrl(item.image) : '');
    }
  }, [item]);

  if (!item) return <MainLayout>Loading...</MainLayout>;

  return (
    <MainLayout>
      <div className="mt-4">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={item.name}
            className="w-sm h-auto object-contain rounded-lg bg-gray-100 m-auto pixelated"
          />
        )}
      </div>

      <h1 className="text-2xl font-bold">{item.name}</h1>
      <p>{item.description}</p>

      <div className="mt-4">
        <p className="text-gray-500">Item ID: {item.id}</p>
      </div>
    </MainLayout>
  );
}
