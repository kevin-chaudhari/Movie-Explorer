// 'use client';

// import { useState, useEffect } from 'react';
// import SearchBar from '@/components/SearchBar';
// import MovieCard from '@/components/MovieCard';
// import MovieDetail from '@/components/MovieDetail';
// import { Movie, MovieDetails } from '@/types/movie';
// import {
//   searchMovies,
//   getMovieDetails,
//   getTrendingMovies,
// } from '@/lib/api';

// export default function Home() {
//   const [movies, setMovies] = useState<Movie[]>([]);
//   const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
//   const [selectedMovie, setSelectedMovie] =
//     useState<MovieDetails | null>(null);

//   const [isLoading, setIsLoading] = useState(false);
//   const [isTrendingLoading, setIsTrendingLoading] = useState(true);

//   const [error, setError] = useState<string | null>(null);
//   const [hasSearched, setHasSearched] = useState(false);

//   // Load trending movies on initial render
//   useEffect(() => {
//     const loadTrending = async () => {
//       try {
//         const data = await getTrendingMovies();
//         setTrendingMovies(data.results);
//       } catch (err) {
//         console.error('Failed to load trending movies');
//       } finally {
//         setIsTrendingLoading(false);
//       }
//     };

//     loadTrending();
//   }, []);

//   // 🔍 Search handler
//   const handleSearch = async (query: string) => {
//     if (!query.trim()) return;

//     setIsLoading(true);
//     setError(null);
//     setHasSearched(true);
//     setSelectedMovie(null);

//     try {
//       const data = await searchMovies(query);
//       setMovies(data.results);

//       if (data.results.length === 0) {
//         setError('No movies found. Try a different search term.');
//       }
//     } catch (err) {
//       setError('Failed to search movies. Please try again.');
//       setMovies([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // 🎬 Movie click handler
//   const handleMovieClick = async (movie: Movie) => {
//     setError(null);
//     setIsLoading(true);

//     try {
//       const details = await getMovieDetails(movie.id);
//       setSelectedMovie(details);
//     } catch (err) {
//       setError('Failed to load movie details. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     //<div className="min-h-screen bg-gray-50">
//     <div className="min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 py-10">

//         {/* Header */}
//         <header className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
//             Movie Explorer
//           </h1>
//           <p className="mt-3 text-gray-500 text-lg">
//             Discover trending and search your favorite movies
//           </p>
//         </header>

//         {/* Search */}
//         <div className="mb-10">
//           <SearchBar onSearch={handleSearch} isLoading={isLoading} />
//         </div>

//         {/* Error */}
//         {error && (
//           <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 shadow-sm">
//             {error}
//           </div>
//         )}

//         {/* Trending Section (Before Search) */}
//         {!hasSearched && (
//           <>
//             {isTrendingLoading ? (
//               <div className="text-center py-16">
//                 <p className="text-gray-600 text-lg">
//                   Loading trending movies...
//                 </p>
//               </div>
//             ) : (
//               trendingMovies.length > 0 && (
//                 <section>
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//                     Trending This Week
//                   </h2>

//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                     {trendingMovies.map((movie) => (
//                       <MovieCard
//                         key={movie.id}
//                         movie={movie}
//                         onClick={() => handleMovieClick(movie)}
//                       />
//                     ))}
//                   </div>
//                 </section>
//               )
//             )}
//           </>
//         )}

//         {/* 🔍 Search Results Section */}
//         {hasSearched && (
//           <>
//             {isLoading ? (
//               <div className="text-center py-16">
//                 <p className="text-gray-600 text-lg">Searching...</p>
//               </div>
//             ) : movies.length > 0 ? (
//               <section>
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-6">
//                   Search Results
//                 </h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//                   {movies.map((movie) => (
//                     <MovieCard
//                       key={movie.id}
//                       movie={movie}
//                       onClick={() => handleMovieClick(movie)}
//                     />
//                   ))}
//                 </div>
//               </section>
//             ) : (
//               !error && (
//                 <div className="text-center py-16 text-gray-500">
//                   <p className="text-lg">No results found.</p>
//                 </div>
//               )
//             )}
//           </>
//         )}

//         {/* Movie Detail Modal */}
//         {selectedMovie && (
//           <MovieDetail
//             movie={selectedMovie}
//             onClose={() => setSelectedMovie(null)}
//           />
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';
import MovieDetail from '@/components/MovieDetail';
import { useMovies } from '@/lib/hooks/useMovies';

export default function Home() {
  const {
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
  } = useMovies();

  return (
    //<div className="min-h-screen">
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            Movie Explorer
          </h1>
          <p className="mt-3 text-gray-500 text-lg">
            Discover trending and search your favorite movies
          </p>
        </header>

        {/* Search */}
        <div className="mb-10">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700 shadow-sm">
            {error}
          </div>
        )}

        {/* Trending Section (Before Search) */}
        {!hasSearched && (
          <>
            {isTrendingLoading ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">
                  Loading trending movies...
                </p>
              </div>
            ) : (
              trendingMovies.length > 0 && (
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Trending This Week
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {trendingMovies.map((movie) => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        onClick={() => handleMovieClick(movie)}
                      />
                    ))}
                  </div>
                </section>
              )
            )}
          </>
        )}

        {/* 🔍 Search Results Section */}
        {hasSearched && (
          <>
            {isLoading ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">Searching...</p>
              </div>
            ) : movies.length > 0 ? (
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Search Results
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {movies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                    />
                  ))}
                </div>
              </section>
            ) : (
              !error && (
                <div className="text-center py-16 text-gray-500">
                  <p className="text-lg">No results found.</p>
                </div>
              )
            )}
          </>
        )}

        {/*Movie Detail Modal */}
        {selectedMovie && (
          <MovieDetail
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    </div>
  );
}
