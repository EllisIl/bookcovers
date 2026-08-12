import Image from 'next/image'
import Navbar from '@/components/navbar'
import Carousel from '@/components/carousel';

// Take inspo from https://nerdy.ink/
// 114030614+EllisIl@users.noreply.github.com

export default function Home() {
  const products = [
    { name: "Minimal Linen Cover", price: "$14.99", image: "/images/products/linen.jpg" },
    { name: "Vintage Leather Cover", price: "$19.99", image: "/images/products/leather.jpg" },
    { name: "Floral Hardcover Wrap", price: "$12.99", image: "/images/products/floral.jpg" },
  ];

  return (
    <main className="min-h-screen text-gray-900 flex flex-col">
      <Navbar />

      {/* Hero */}
      <Carousel />

      {/* Products */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-xl font-semibold">Featured Covers</h2>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((item) => (
            <div
              key={item.name}
              className="border rounded-lg p-5 hover:shadow-md transition"
            >
              <Image src={item.image} alt={item.name} width={300} height={300} className="w-full h-auto" />
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>

              <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear() + " "} Ellis&apos; Book Jackets. All rights reserved.
      </footer>
    </main>
  );
}