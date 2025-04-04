import MainLayout from '@/layouts/MainLayout';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
  const [countItems, setCountItems] = useState([]);
  const [countCategories, setCountCategories] = useState([]);

  useEffect(() => {
    window.api.countAllItems().then(setCountItems);
    window.api.countAllCategories().then(setCountCategories);
  }, []);

  return (
    <MainLayout>
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome to GotchiBeam</h1>
        <p className="text-lg text-gray-400">
          Send items, wallpapers, and more to your Tamagotchi 4U!
        </p>
        <Link to="/items"><p>Items: {countItems}</p></Link>
        <Link to="/categories"><p>Categories: {countCategories}</p></Link>
      </div>
    </MainLayout>
  );
}
