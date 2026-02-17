// 'use client';

// import Image from 'next/image';
// import { Movie } from '@/types/movie';
// import { getPosterUrl } from '@/lib/api';

// interface MovieCardProps {
//   movie: Movie;
//   onClick: () => void;
// }

// export default function MovieCard({ movie, onClick }: MovieCardProps) {
//   const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
//   const posterUrl = getPosterUrl(movie.poster_path);

//   return (
//     <div
//       onClick={onClick}
//       className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
//     >
//       <div className="relative h-64 bg-gray-200">
//         {movie.poster_path ? (
//           <Image
//             src={posterUrl}
//             alt={movie.title}
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           />
//         ) : (
//           <div className="h-full flex items-center justify-center text-gray-400">
//             No Image
//           </div>
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="font-semibold text-lg text-gray-900 mb-1 line-clamp-2">
//           {movie.title}
//         </h3>
//         <p className="text-sm text-gray-600 mb-2">{year}</p>
//         <p className="text-sm text-gray-700 line-clamp-3">{movie.overview}</p>
//       </div>
//     </div>
//   );
// }

'use client';

import Image from 'next/image';
import { Movie } from '@/types/movie';
import { getPosterUrl } from '@/lib/api';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : 'N/A';
  const posterUrl = getPosterUrl(movie.poster_path);

  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64 bg-gray-700">
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
        <h3 className="font-semibold text-lg text-white mb-1 line-clamp-2">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-400 mb-2">{year}</p>
        <p className="text-sm text-gray-300 line-clamp-3">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
