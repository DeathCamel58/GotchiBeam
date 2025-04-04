import { Link } from 'react-router-dom';
import uint8ArrayToDataUrl from '@/utils/image';
import { CategoryItem } from '@/types/CategoryItem';

export default function CategoryComponent({ category }: { category: CategoryItem }) {
  const imageUrl = category.image ? uint8ArrayToDataUrl(category.image) : '';

  return (
    <Link to={`/categories/${category.id}`}>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col w-full max-w-sm mb-3">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={category.id}
            className="w-full h-16 object-contain rounded-lg pixelated"
          />
        )}
        <div className="p-4">
          <p className="text-gray-500 text-sm">ID: {category.id}</p>
          {/* TODO: Look up the number of items in a category */}
          {/* TODO: Maybe display a carousel of items in the category? */}
        </div>
      </div>
    </Link>
  );
}
