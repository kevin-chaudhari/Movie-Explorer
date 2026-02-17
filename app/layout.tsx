import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Explorer",
  description: "Search and explore movies, manage your favorites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navigation from "@/components/Navigation";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Movie Explorer",
//   description: "Search and explore movies, manage your favorites",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${inter.className} bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100`}
//       >
//         <Navigation />

//         <main className="min-h-screen">
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }
