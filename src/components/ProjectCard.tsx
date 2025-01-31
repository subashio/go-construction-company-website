"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
}
export default function ProjectCard({
  title,
  category,
  description,
  image,
}: ProjectCardProps) {
  return (
    <motion.a
      href="/Project"
      className="group relative flex-shrink-0 w-[24rem] h-[30rem] lg:w-[32rem] lg:h-[36rem] overflow-hidden rounded-xl
      bg-white shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -10 }}>
      <div className="h-full overflow-hidden">
        <Image
          src={image}
          fill
          priority
          alt={`Go-construction ${category} image`}
          className="w-full h-full object-center  transition-transform duration-700
          group-hover:scale-110"
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t 
      from-black/80 to-transparent text-white">
        <span className="text-sm font-medium text-red-400 mb-2 block">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p
          className="text-sm text-gray-300 sm:opacity-0 group-hover:opacity-100 
        transform sm:translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
