import { FavoriteMovie } from '@/types/movie';

const STORAGE_KEY = 'movie-explorer-favorites';

export const storage = {
  getFavorites: (): FavoriteMovie[] => {
    if (typeof window === 'undefined') return [];
    
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading favorites from localStorage:', error);
      return [];
    }
  },

  saveFavorites: (favorites: FavoriteMovie[]): void => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  },

  addFavorite: (favorite: FavoriteMovie): void => {
    const favorites = storage.getFavorites();
    const existingIndex = favorites.findIndex(f => f.id === favorite.id);
    
    if (existingIndex >= 0) {
      favorites[existingIndex] = favorite;
    } else {
      favorites.push(favorite);
    }
    
    storage.saveFavorites(favorites);
  },

  removeFavorite: (id: number): void => {
    const favorites = storage.getFavorites();
    const filtered = favorites.filter(f => f.id !== id);
    storage.saveFavorites(filtered);
  },

  isFavorite: (id: number): boolean => {
    const favorites = storage.getFavorites();
    return favorites.some(f => f.id === id);
  },

  getFavorite: (id: number): FavoriteMovie | undefined => {
    const favorites = storage.getFavorites();
    return favorites.find(f => f.id === id);
  },
};