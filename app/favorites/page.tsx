import FavoritesList from '@/components/FavoritesList';

export default function FavoritesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">My Favorites</h1>
      <FavoritesList />
    </div>
  );
}