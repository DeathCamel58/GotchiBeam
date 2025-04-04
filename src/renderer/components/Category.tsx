import React from 'react';
import { Link } from 'react-router-dom';

type CategoryItem = {
  id: number;
  image: Uint8Array; // or Buffer
};

function uint8ArrayToDataUrl(bytes: Uint8Array): string {
  const blob = new Blob([bytes], { type: 'image/png' }); // adjust if image is jpeg etc
  return URL.createObjectURL(blob);
}

export default function Category({ category }: { category: CategoryItem }) {
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
          {/*<p className="text-gray-500 text-xs wrap-anywhere">Data: {JSON.stringify(category)}</p>*/}
        </div>
      </div>
    </Link>
  );
}
