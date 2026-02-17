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

```
User Action
    ↓
Frontend Component
    ↓
Next.js API Route
    ↓
TMDB API
    ↓
Response Returned to Client
```

Favorites are handled client-side using LocalStorage via a `storage.ts` utility.

---

## ⚙️ Setup & Run Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/kevin-chaudhari/Movie-Explorer.git
cd Movie-Explorer
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
TMDB_API_KEY=your_tmdb_api_key_here
```

You can generate a free API key at:  
https://www.themoviedb.org/

### 4️⃣ Run Development Server

```bash
npm run dev
```

### 5️⃣ Open Application

Visit:

```
http://localhost:3000
```

---

## 🌍 Deployment (Vercel)

1. Push repository to GitHub  
2. Import project in Vercel  
3. Add environment variable in:

```
Project Settings → Environment Variables
```

Add:

```
TMDB_API_KEY = your_real_key
```

4. Deploy  

⚠️ `.env.local` is never committed to GitHub.

---

## 🧠 Technical Decisions & Tradeoffs

### ✅ Next.js App Router
Chosen to:
- Use modern React features  
- Separate server/client logic  
- Securely proxy API requests  

### ✅ API Proxy Pattern
- Keeps API key server-side  
- Prevents client-side exposure  
- Centralizes error handling  

### ✅ State Management
Used local React state instead of Redux/Zustand.

**Justification:**
- Scope is small  
- Minimal shared global state  
- Avoid unnecessary complexity  

### ✅ Custom Hook (`useMovies`)
- Extracted business logic from UI  
- Improves readability  
- Improves testability  
- Encourages separation of concerns  

### ✅ LocalStorage Persistence
- Meets baseline requirement  
- Zero backend complexity  
- Fast implementation  

**Tradeoff:**
Data is:
- Not synced across devices  
- Not user-specific  
- Not scalable for production  

For production, I would implement:
- Server-side persistence (MongoDB / Postgres)  
- User authentication  
- RESTful CRUD API  

---

## ⚠️ Known Limitations

1. **No Server-Side Persistence**
   - Favorites stored locally only  
   - No multi-device sync  

2. **No Authentication**
   - All favorites are anonymous  

3. **No Pagination**
   - Only first page of TMDB results is shown  

4. **No Automated Testing**
   - Could add:
     - Unit tests (Vitest/Jest)  
     - Component tests (React Testing Library)  

5. **No Global Error Boundary**
   - Could improve resilience  

---

## 🔮 Future Improvements

- Add MongoDB or PostgreSQL backend  
- Add user authentication (NextAuth)  
- Add pagination or infinite scroll  
- Add optimistic UI updates  
- Add skeleton loaders  
- Add image blur placeholders  
- Improve accessibility (ARIA roles)  

---

## 📂 Project Structure

```
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
```

---

## 👨‍💻 Author

Kevin Chaudhari  
GitHub: https://github.com/kevin-chaudhari
