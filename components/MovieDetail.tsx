'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MovieDetails, FavoriteMovie } from '@/types/movie';
import { getPosterUrl } from '@/lib/api';
import { storage } from '@/lib/storage';

interface MovieDetailProps {
  movie: MovieDetails;
  onClose: () => void;
}

export default function MovieDetail({ movie, onClose }: MovieDetailProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(5);
  const [note, setNote] = useState('');

  useEffect(() => {
    const favorite = storage.getFavorite(movie.id);
    if (favorite) {
      setIsFavorite(true);
      setRating(favorite.rating);
      setNote(favorite.note);
    } else {
      setIsFavorite(false);
      setRating(5);
      setNote('');
    }
  }, [movie.id]);

  const handleAddToFavorites = () => {
    const favorite: FavoriteMovie = {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      overview: movie.overview,
      rating,
      note,
      addedAt: Date.now(),
    };

    storage.addFavorite(favorite);
    setIsFavorite(true);
  };

  const handleRemoveFromFavorites = () => {
    storage.removeFavorite(movie.id);
    setIsFavorite(false);
    setRating(5);
    setNote('');
  };

  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const posterUrl = getPosterUrl(movie.poster_path);
  const runtime = movie.runtime ? `${movie.runtime} min` : 'N/A';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-gray-900">{movie.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                {movie.poster_path ? (
                  <Image
                    src={posterUrl}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              {movie.tagline && (
                <p className="text-gray-600 italic mb-4">{movie.tagline}</p>
              )}

              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Year:</span> {year}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Runtime:</span> {runtime}
                </p>
                {movie.genres && movie.genres.length > 0 && (
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Genres:</span>{' '}
                    {movie.genres.map(g => g.name).join(', ')}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">Overview</h3>
                <p className="text-gray-700">{movie.overview}</p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                  {isFavorite ? 'Update Favorite' : 'Add to Favorites'}
                </h3>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => setRating(value)}
                        className={`w-10 h-10 rounded-full border-2 ${
                          rating >= value
                            ? 'bg-yellow-400 border-yellow-500'
                            : 'bg-white border-gray-300'
                        } hover:border-yellow-500 transition-colors`}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Note (optional)
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    rows={3}
                    placeholder="Add your thoughts about this movie..."
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleAddToFavorites}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    {isFavorite ? 'Update Favorite' : 'Add to Favorites'}
                  </button>
                  {isFavorite && (
                    <button
                      onClick={handleRemoveFromFavorites}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
                    >
                      Remove from Favorites
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}