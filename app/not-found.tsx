// pages/404.tsx (for Next.js Pages Router)
// or app/not-found.tsx (for Next.js App Router)

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white text-center overflow-hidden relative">
      {/* Floating Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-bounce-slow w-72 h-72 bg-indigo-500 opacity-20 rounded-full absolute top-10 left-10 blur-3xl"></div>
        <div className="animate-bounce-slow-delay w-96 h-96 bg-pink-500 opacity-20 rounded-full absolute bottom-10 right-10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="z-10">
        <h1 className="text-9xl font-extrabold tracking-widest text-white drop-shadow-lg animate-fade-in">
          404
        </h1>
        <p className="text-2xl mt-4 font-light animate-fade-in-delay">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <div className="mt-8 animate-fade-in-delay-2">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
