// import { NextRequest, NextResponse } from 'next/server';

// const TMDB_API_KEY = process.env.TMDB_API_KEY;
// const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;

//   if (!id || isNaN(Number(id))) {
//     return NextResponse.json(
//       { error: 'Valid movie ID is required' },
//       { status: 400 }
//     );
//   }

//   if (!TMDB_API_KEY) {
//     return NextResponse.json(
//       { error: 'TMDB API key not configured' },
//       { status: 500 }
//     );
//   }

//   try {
//     const response = await fetch(
//       `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`,
//       { next: { revalidate: 3600 } }
//     );

//     if (!response.ok) {
//       if (response.status === 404) {
//         return NextResponse.json(
//           { error: 'Movie not found' },
//           { status: 404 }
//         );
//       }
//       throw new Error('TMDB API request failed');
//     }

//     const data = await response.json();
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error('Movie details API error:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch movie details' },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from 'next/server';

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;  // ✅ FIX

  if (!id || isNaN(Number(id))) {
    return NextResponse.json(
      { error: 'Valid movie ID is required' },
      { status: 400 }
    );
  }

  if (!TMDB_API_KEY) {
    return NextResponse.json(
      { error: 'TMDB API key not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'Movie not found' },
          { status: 404 }
        );
      }
      throw new Error('TMDB API request failed');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Movie details API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch movie details' },
      { status: 500 }
    );
  }
}
