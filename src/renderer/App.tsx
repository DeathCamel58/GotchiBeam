import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '@/pages/Home';
import ItemsList from '@/pages/items';
import ItemDetail from '@/pages/items/[id]';
import CategoriesList from '@/pages/categories';
import CategoryDetail from '@/pages/categories/[id]';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<ItemsList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/categories/:id" element={<CategoryDetail />} />
      </Routes>
    </Router>
  );
}
