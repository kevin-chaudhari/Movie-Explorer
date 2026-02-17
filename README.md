<!-- # Movie Explorer

A Movie Explorer web application built with [Next.js](https://nextjs.org) where users can search for movies, view details, and save their favorites with personal ratings and notes. This project uses the [TMDB API](https://www.themoviedb.org/documentation/api) for movie data.

## Features

-   **Search**: Search for movies by title.
-   **Details**: View detailed information including poster, overview, release year, runtime, and genres.
-   **Favorites**: Save movies to a personal favorites list.
-   **Personalize**: Add a rating (1-5 stars) and custom notes to your favorite movies.
-   **Persistence**: Favorites are saved to your browser's LocalStorage, so they persist between refreshes.
-   **Responsive Design**: distinct mobile and desktop layouts.

## Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: Standard Unicode characters for simplicity (★, ×)
-   **State Management**: React Hooks (`useState`, `useEffect`)

## Setup & Run Instructions

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd movie-explorer
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env.local` file in the root directory and add your TMDB API Key:
    ```env
    TMDB_API_KEY=your_tmdb_api_key_here
    ```
    > **Note**: You can get an API key by creating an account at [The Movie Database (TMDB)](https://www.themoviedb.org/).

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  **Open the application**:
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Technical Decisions & Tradeoffs

### Architecture: Next.js App Router
I chose the Next.js App Router to leverage the latest React features and provide a solid foundation for future scalability. 
-   **API Routes**: Used Next.js API Routes (`app/api/`) to proxy requests to the external TMDB API. This keeps the API key secure on the server side and prevents it from being exposed to the client.

### State Management: React Hooks
For this prototype, I opted for simple React local state (`useState`) and prop drilling where necessary. 
-   **Decision**: A complex state management library like Redux or Zustand was deemed unnecessary for the current scope.
-   **Custom Hook**: extracted logic into `useMovies` hook to keep the main page component clean and separate concerns.

### Persistence: LocalStorage
-   **Decision**: I implemented client-side persistence using the browser's `localStorage`.
-   **Tradeoff**: This meets the baseline requirement and allows the app to work without a backend database. However, it means data is not synced across devices or browsers.
-   **Implementation**: A `storage` utility (`lib/storage.ts`) handles reading/writing to localStorage, abstracting the implementation details from the components.

### Styling: Tailwind CSS
-   **Decision**: Tailwind CSS was used for rapid UI development and ensuring a responsive design without writing custom CSS files.

## Known Limitations & Future Improvements

1.  **Persistence**: Currently, data is only saved locally.
    -   *Improvement*: Integrate a database (e.g., PostgreSQL with Prisma) to allow user accounts and cross-device syncing.
2.  **Pagination**: Search results are currently limited to the first page (20 results).
    -   *Improvement*: Add pagination or infinite scroll to load more results.
3.  **Testing**: No automated tests are currently implemented.
    -   *Improvement*: Add Unit tests (Jest/Vitest) for utilities and Component tests (React Testing Library) for critical user flows.
4.  **Error Boundaries**: While basic error handling is in place, global error boundaries could be added to gracefully handle unexpected crashes.
5.  **Image Optimization**: Movie posters are loaded directly.
    -   *Improvement*: Implement placeholders (blur-up effect) for better UX during loading.

## Project Structure

```
movie-explorer/
├── app/
│   ├── api/            # Server-side API routes (proxy)
│   ├── favorites/      # Favorites page
│   ├── page.tsx        # Main search/dashboard page
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
│   ├── MovieCard.tsx
│   ├── MovieDetail.tsx
│   ├── SearchBar.tsx
│   └── FavoritesList.tsx
├── lib/                # Utilities
│   ├── api.ts          # API fetch functions
│   └── storage.ts      # LocalStorage helper
└── public/             # Static assets
``` -->


# 🎬 Movie Explorer

A full-stack Movie Explorer web application built with **Next.js 15 (App Router)** where users can search for movies, view detailed information, and save favorites with personal ratings and notes.

The application integrates with the **TMDB API** via secure server-side proxy routes and demonstrates clean architecture, state management, and persistence decisions suitable for a technical interview discussion.

---

## 🔗 Live Demo

**Hosted App:** _[Add your Vercel URL here]_  
**GitHub Repository:** https://github.com/kevin-chaudhari/Movie-Explorer  

---

## 🚀 Features

### 1️⃣ Search
- Search movies by title
- Displays:
  - Poster
  - Title
  - Release Year
  - Short Overview
- Gracefully handles empty results

### 2️⃣ Movie Details
- Detailed view (modal)
- Displays:
  - Poster
  - Overview
  - Runtime
  - Release Year
  - Genres (if available)

### 3️⃣ Favorites
- Add / Remove movies from favorites
- Add:
  - ⭐ Personal rating (1–5)
  - 📝 Optional notes

### 4️⃣ Persistence
- Favorites are stored in **LocalStorage**
- Survive page refresh
- No backend database required for baseline functionality

### 5️⃣ Secure API Integration
- Uses TMDB API
- API key is stored server-side
- All external requests are proxied via Next.js API routes

### 6️⃣ Error Handling
- Handles:
  - Invalid inputs
  - No search results
  - API/network failures
  - Missing API key
- Displays user-friendly messages

### 7️⃣ Responsive UI
- Optimized for:
  - Desktop
  - Tablet
  - Mobile
- Dark theme with cinematic styling

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State Management | React Hooks (`useState`, `useEffect`) |
| Persistence | LocalStorage |
| API | TMDB API |
| Hosting | Vercel |

---

## 🏗 Architecture Overview

### Frontend
- Client components handle UI and interactivity
- State managed via React Hooks
- Custom hook (`useMovies`) separates logic from UI

### Backend (API Proxy Layer)
- Implemented using `app/api/*`
- TMDB requests are routed through server-side endpoints
- Prevents exposing API key in browser

### Data Flow

User Action
↓
Frontend Component
↓
Next.js API Route
↓
TMDB API
↓
Response Returned to Client


- Favorites are handled client-side using LocalStorage via a `storage.ts` utility.

---

## ⚙️ Setup & Run Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/kevin-chaudhari/Movie-Explorer.git
cd Movie-Explorer
```

###  2️⃣ Install Dependencies

- npm install

### 3️⃣ Configure Environment Variables

- Create a .env.local file in the root directory:

- TMDB_API_KEY=your_tmdb_api_key_here


- You can generate a free API key at https://www.themoviedb.org/

### 4️⃣ Run Development Server
\
- npm run dev

🌍 Deployment (Vercel)

Push repository to GitHub

Import project in Vercel

Add environment variable in:

Project Settings → Environment Variables

TMDB_API_KEY = your_real_key


Deploy

⚠️ .env.local is never committed to GitHub.

🧠 Technical Decisions & Tradeoffs
✅ Next.js App Router

Chosen to:

Use modern React features

Separate server/client logic

Securely proxy API requests

✅ API Proxy Pattern

Keeps API key server-side

Prevents client-side exposure

Centralizes error handling

✅ State Management

Used local React state instead of Redux/Zustand

Justification:

Scope is small

Minimal shared global state

Avoid unnecessary complexity

✅ Custom Hook (useMovies)

Extracted business logic from UI

Improves readability

Improves testability

Encourages separation of concerns

✅ LocalStorage Persistence

Meets baseline requirement

Zero backend complexity

Fast implementation

Tradeoff:
Data is:

Not synced across devices

Not user-specific

Not scalable for production

For production, I would implement:

Server-side persistence (MongoDB / Postgres)

User authentication

RESTful CRUD API

⚠️ Known Limitations

No Server-Side Persistence

Favorites stored locally only

No multi-device sync

No Authentication

All favorites are anonymous

No Pagination

Only first page of TMDB results is shown

No Automated Testing

Could add:

Unit tests (Vitest/Jest)

Component tests (React Testing Library)

No Global Error Boundary

Could improve resilience

🔮 Future Improvements

Add MongoDB or PostgreSQL backend

Add user authentication (NextAuth)

Add pagination or infinite scroll

Add optimistic UI updates

Add skeleton loaders

Add image blur placeholders

Improve accessibility (ARIA roles)

📂 Project Structure
movie-explorer/
├── app/
│   ├── api/              # API proxy routes
│   ├── favorites/        # Favorites page
│   ├── page.tsx          # Main dashboard
│   └── layout.tsx        # Root layout
│
├── components/
│   ├── MovieCard.tsx
│   ├── MovieDetail.tsx
│   ├── SearchBar.tsx
│   └── FavoritesList.tsx
│
├── lib/
│   ├── api.ts            # API utilities
│   ├── storage.ts        # LocalStorage abstraction
│   └── hooks/            # Custom hooks
│
└── public/
