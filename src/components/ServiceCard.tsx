import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}
export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <Card className="!p-0  rounded-md bg-[#d4d4d48a]">
      <CardHeader className="p-0 ">
        <Image
          src={image}
          width={400}
          height={100}
          className="w-full object-contain  object-center rounded-t-lg"
          alt="Services card image for go construction"
        />
      </CardHeader>
      <CardContent className="flex flex-col mt-4 text-center  gap-y-4 items-center">
        <CardTitle className="font-bold capitalize">{title}</CardTitle>
        <CardDescription className="max-w-sm  ">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
<<<<<<< HEAD

// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// interface ServiceCardProps {
//   title: string;
//   description: string;
//   image: string;
//   index: number;
// }

// export const ServiceCard: React.FC<ServiceCardProps> = ({
//   title,
//   description,
//   image,
//   index,
// }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: index * 0.1 }}
//     className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500">
//     <div className="aspect-[4/3] overflow-hidden">
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//     </div>
//     <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
//         {description}
//       </p>
//     </div>
//   </motion.div>
// );
=======
>>>>>>> 49b8e3e (updated/pages)
