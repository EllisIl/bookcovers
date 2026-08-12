"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const images = [
  "/images/carousel/image1.jpg",
  "/images/carousel/image2.jpg",
  "/images/carousel/image3.jpg",
  "/images/carousel/image4.jpg",
];

const INTERVAL = 10000;

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    startTimer();
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    startTimer();
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    startTimer();
  };

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-175">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === current
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            aria-current={index === current}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={previous}
        className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        aria-label="Previous slide"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 transition-colors group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white/50">
          <svg
            className="h-5 w-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={next}
        className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        aria-label="Next slide"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 transition-colors group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white/50">
          <svg
            className="h-5 w-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
