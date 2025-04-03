import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <img className="w-48 rounded-full border-4 border-gray-300 shadow-md" alt="icon" src={icon} />
      </div>
      <h1 className="text-3xl font-extrabold text-gray-800">Electron React Boilerplate</h1>
      <div className="flex space-x-4">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="flex items-center space-x-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700"
          >
            <span role="img" aria-label="books">📚</span>
            <span>Read our Docs</span>
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="flex items-center space-x-2 px-5 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-700"
          >
            <span role="img" aria-label="folded hands">🙏</span>
            <span>Donate</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
