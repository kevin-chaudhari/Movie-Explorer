import { Movie, MovieDetails, SearchResponse } from '@/types/movie';

export async function searchMovies(query: string): Promise<SearchResponse> {
  const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
  
  if (!response.ok) {
    throw new Error('Failed to search movies');
  }
  
  return response.json();
}

export async function getMovieDetails(id: number): Promise<MovieDetails> {
  const response = await fetch(`/api/movie/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  
  return response.json();
}

export async function getTrendingMovies() {
  const response = await fetch('/api/trending');

  if (!response.ok) {
    throw new Error('Failed to fetch trending movies');
  }

  return response.json();
}

export function getPosterUrl(path: string | null, size: string = 'w500'): string {
  if (!path) return '/placeholder.png';
  return `https://image.tmdb.org/t/p/${size}${path}`;
}