<<<<<<< HEAD
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
=======
"use client";
import { motion } from "framer-motion";
>>>>>>> 49b8e3e (updated/pages)

interface ProjectCardProps {
  title: string;
  description: string;
<<<<<<< HEAD
  image: string;
}
export default function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <Card className="!p-0  rounded-md border-none">
      <CardHeader className="p-0 ">
        <Image
          src={image}
          width={400}
          height={100}
          className="w-full object-contain  object-center rounded-t-lg"
          alt="Services card image for go construction"
        />
      </CardHeader>
      <CardContent className="flex flex-col mt-4  p-0 gap-y-2 ">
        <CardTitle className="font-bold text-xl">
          {title} <span className="text-xs font-normal"> (1,200 sq ft)</span>
        </CardTitle>
        <CardDescription className="max-w-sm text-xs mb-4">
          {description}
        </CardDescription>
        <Button> View Project</Button>
      </CardContent>
    </Card>
=======
  category: string;
  image: string;
  index: number;
}
export default function ProjectCard({
  title,
  category,
  description,
  image,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      key={index}
      className="group relative flex-shrink-0 w-[28rem] h-[30rem] lg:w-[32rem] lg:h-[36rem] overflow-hidden rounded-xl
      bg-white shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -10 }}>
      <div className="h-full overflow-hidden">
        <img
          src={image}
          alt={`go contruction ${category} image`}
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
    </motion.div>
>>>>>>> 49b8e3e (updated/pages)
  );
}
