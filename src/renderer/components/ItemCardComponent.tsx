import { Link } from 'react-router-dom';
import uint8ArrayToDataUrl from '@/utils/image';

type Item = {
  id: number;
  name: string;
  description: string;
  image: Uint8Array; // or Buffer
};

export default function ItemCardComponent({ item }: { item: Item }) {
  const imageUrl = item.image ? uint8ArrayToDataUrl(item.image) : '';

  return (
    <Link to={`/items/${item.id}`}>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 flex flex-col gap-4 w-full mb-3">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full h-48 object-contain rounded-lg pixelated"
          />
        )}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
          <p className="text-gray-500 text-sm">ID: {item.id}</p>
          <p className="text-gray-700 mt-2">{item.description}</p>
        </div>
      </div>
    </Link>
  );
}
