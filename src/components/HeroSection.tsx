"use client";
import { Button } from "@/components/ui/button"; // shadcn button
import { heroSliders } from "@/constants/common";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import BoxReveal from "./ui/box-reveal";
import Image from "next/image";

const MotionMaxWidthWrapper = motion.create(MaxWidthWrapper);

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // For progress bar
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const duration = 5000; // 5 seconds

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSliders.length);
    setProgress(0); // Reset progress
  };

  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(nextSlide, duration); // Switch slide after 5s
      progressRef.current = setInterval(() => {
        setProgress((prev) => Math.min(prev + 100 / (duration / 100), 100)); // Increment progress
      }, 100);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentSlide, isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0); // Reset progress
    if (isPlaying) {
      setIsPlaying(true); // Ensure autoplay resumes
    }
  };

  return (
    <section
      className="relative w-full h-screen"
      aria-labelledby="hero-section">
      {/* HeroSliders */}
      <div className="absolute inset-0  bg-black/50 opacity-70 z-20" />
      <div className="overflow-hidden  relative h-full">
        <AnimatePresence>
          <motion.div
            key={heroSliders[currentSlide].id}
            initial={{ scale: 1 }}
            animate={isPlaying ? { scale: 1.1 } : { scale: 1 }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: isPlaying ? Infinity : 0,
              repeatType: "reverse",
            }}
            className="absolute top-0 left-0 w-full h-full">
            <Image
              src={heroSliders[currentSlide].image}
              alt={`Hero image for ${heroSliders[currentSlide].title} project`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
          <MotionMaxWidthWrapper
            initial={{
              x: 900,
            }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            key={`content-${heroSliders[currentSlide].id}`}
            className="flex flex-col gap-6 justify-center items-start min-h-screen w-full">
            <BoxReveal boxColor="#ffffff" duration={0.4}>
              <h1
                id="hero-section"
                className="font-bold text-5xl sm:text-7xl  max-w-screen-sm leading-snug text-white w-full">
                {heroSliders[currentSlide].title}
              </h1>
            </BoxReveal>
            <BoxReveal boxColor="#ffffff" duration={0.4}>
              <p className="font-normal text-sm max-w-screen-sm text-orange-50 w-full">
                {heroSliders[currentSlide].description}
              </p>
            </BoxReveal>
            <BoxReveal boxColor="#ffffff" duration={0.4}>
              <Link
                href="/Project"
                className=" group inline-flex  items-center bg-gradient-to-r from-orange-900 to-orange-700 text-white px-6 py-3 rounded-full
                transform transition-all duration-300 "
                onClick={() => (window.location.href = "#projects")}>
                Explore Projects
                <ArrowUpRight className=" h-0 w-0 opacity-0 group-hover:opacity-100  group-hover:w-4 group-hover:h-4  group-hover:rotate-45 transition-all duration-500 group-hover:translate-x-4" />
              </Link>
            </BoxReveal>
          </MotionMaxWidthWrapper>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute z-30 bottom-4 left-0 right-0 flex lg:flex-row flex-col lg:items-center justify-between items-start px-4">
        {/* Arrows for smaller screens */}
        <div className="flex justify-between mb-4 w-full lg:hidden">
          <button
            aria-label="Previous slide"
            className="block lg:hidden p-4 rounded-full text-white"
            onClick={() =>
              goToSlide(
                (currentSlide - 1 + heroSliders.length) % heroSliders.length
              )
            }>
            <ChevronLeft className="w-8 h-8" /> {/* Left Arrow */}
          </button>
          <button
            aria-label="Next slide"
            className="block lg:hidden p-4 rounded-full text-white"
            onClick={() => goToSlide((currentSlide + 1) % heroSliders.length)}>
            <ChevronRight className="w-8 h-8" /> {/* Right Arrow */}
          </button>
        </div>
        {/* Navigation Buttons for large screens */}
        <MaxWidthWrapper className="hidden lg:flex gap-4 items-center">
          {heroSliders.map((slide, index) => (
            <div key={slide.id} className="relative">
              {/* Progress Line */}
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gray-300 ${
                  index === currentSlide ? "bg-orange-400" : ""
                }`}
                style={{
                  transform: `scaleX(${
                    index === currentSlide ? progress / 100 : 0
                  })`,
                  transformOrigin: "left",
                  transition: "transform 0.1s linear",
                }}></div>
              {/* Button */}
              <button
                className="px-5 h-12 flex items-center text-white justify-center"
                onClick={() => goToSlide(index)}>
                {slide.name}
              </button>
            </div>
          ))}
        </MaxWidthWrapper>

        {/* Play/Pause Button */}
        <div className="relative w-12 h-12 ml-4 lg:ml-0">
          {/* Circular Progress */}
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 36 36"
            role="progressbar"
            aria-label="Slide progress"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={progress}>
            {/* Background Circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-300"
            />
            {/* Foreground Circle for Progress */}
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
              className="text-orange-400"
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>
          <Button
            variant="ghost"
            className="absolute inset-0 mt-1 flex items-center text-white justify-center rounded-full"
            onClick={() => setIsPlaying((prev) => !prev)}>
            {isPlaying ? <Pause /> : <Play />}
          </Button>
        </div>
      </div>
    </section>
  );
}
