'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FavoriteMovie } from '@/types/movie';
import { getPosterUrl } from '@/lib/api';
import { storage } from '@/lib/storage';

export default function FavoritesList() {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);

  useEffect(() => {
    setFavorites(storage.getFavorites());
  }, []);

  const handleRemove = (id: number) => {
    storage.removeFavorite(id);
    setFavorites(storage.getFavorites());
  };

  if (favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No favorites yet. Start searching for movies!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map((movie) => {
        const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
        const posterUrl = getPosterUrl(movie.poster_path);

        return (
          <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 bg-gray-200">
              {movie.poster_path ? (
                <Image
                  src={posterUrl}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">{movie.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{year}</p>
              
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-gray-700">Rating:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        className={`text-lg ${
                          value <= movie.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                {movie.note && (
                  <p className="text-sm text-gray-700 italic">"{movie.note}"</p>
                )}
              </div>

              <button
                onClick={() => handleRemove(movie.id)}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium text-sm"
              >
                Remove from Favorites
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}