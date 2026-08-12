import Navbar from '@/components/navbar'
import Carousel from '@/components/carousel';
import { Highlights } from '@/components/highlights';

// Take inspo from https://nerdy.ink/
export default function Home() {

  return (
    <main className="min-h-screen text-gray-900 flex flex-col">
      <Navbar />

      {/* Hero */}
      <Carousel />

      {/* Products */}
      <Highlights />

      {/* Footer */}
      <footer className="mt-auto border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear() + " "} Ellis&apos; Book Jackets. All rights reserved.
      </footer>
    </main>
  );
}