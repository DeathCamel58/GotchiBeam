import { ReactNode } from 'react';
import { version } from '../../../release/app/package.json';
import { NfcReaderProvider } from '@/contexts/NfcReaderContext';
import ReaderStatus from '@/components/ReaderStatus';
import { Link } from 'react-router-dom';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <NfcReaderProvider>
      <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white">
        <header className="w-full py-4 bg-gray-800 text-center text-xl font-bold flex justify-between items-center px-4">
          <span><Link to="/">GotchiBeam</Link></span>
          <div className="flex items-center space-x-4">
            <ReaderStatus />
          </div>
        </header>
        <main className="flex-1 w-full max-w-3xl p-4">{children}</main>
        <footer className="w-full py-2 bg-gray-800 text-center text-sm">
          © {new Date().getFullYear()} GotchiBeam | v{version}
        </footer>
      </div>
    </NfcReaderProvider>
  );
}
