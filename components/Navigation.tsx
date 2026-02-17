'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/'
                  ? 'border-white'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Search Movies
            </Link>
            <Link
              href="/favorites"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/favorites'
                  ? 'border-white'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              My Favorites
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}