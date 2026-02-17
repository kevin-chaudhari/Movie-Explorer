'use client';

import { useState, useEffect } from 'react';
import {
  searchMovies,
  getMovieDetails,
  getTrendingMovies,
} from '@/lib/api';
import { Movie, MovieDetails } from '@/types/movie';

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] =
    useState<MovieDetails | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isTrendingLoading, setIsTrendingLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const loadTrending = async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data.results);
      } catch {
        console.error('Failed to load trending movies');
      } finally {
        setIsTrendingLoading(false);
      }
    };

    loadTrending();
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setSelectedMovie(null);

    try {
      const data = await searchMovies(query);
      setMovies(data.results);

      if (data.results.length === 0) {
        setError('No movies found.');
      }
    } catch {
      setError('Search failed.');
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMovieClick = async (movie: Movie) => {
    setIsLoading(true);
    setError(null);

    try {
      const details = await getMovieDetails(movie.id);
      setSelectedMovie(details);
    } catch {
      setError('Failed to load details.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    movies,
    trendingMovies,
    selectedMovie,
    isLoading,
    isTrendingLoading,
    error,
    hasSearched,
    setSelectedMovie,
    handleSearch,
    handleMovieClick,
  };
}
