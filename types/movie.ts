export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
}

export interface MovieDetails extends Movie {
  runtime: number | null;
  genres: Genre[];
  tagline: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface FavoriteMovie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
  rating: number;
  note: string;
  addedAt: number;
}

export interface SearchResponse {
  results: Movie[];
  total_results: number;
}