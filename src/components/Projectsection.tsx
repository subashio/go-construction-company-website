"use client";
<<<<<<< HEAD
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const ProjectCarouselItems = [
  {
    title: "Individual House",
    category: "Residential",
    description:
      "Modern living spaces crafted with precision and sustainability in mind",
    image: "/pictures/p-3.jpeg",
  },
  {
    title: "Civil Work",
    category: "Infrastructure",
    description: "Large-scale infrastructure projects that shape communities",
    image: "/pictures/p-2.jpg",
  },
  {
    title: "Structural Work",
    category: "Commercial",
    description:
      "Innovative structural solutions for complex architectural challenges",
    image: "/pictures/p-1.png",
  },
  {
    title: "Luxurious Villas",
    category: "Premium Residential",
    description: "Exclusive properties that redefine luxury living standards",
    image: "/pictures/p-1.png",
  },
];
=======
import { ProjectCardItems } from "@/constants/common";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";
>>>>>>> 49b8e3e (updated/pages)

export default function ProjectSection() {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section
      className="h-[500vh] relative bg-gradient-to-b from-white to-gray-50"
      ref={targetRef}>
      <div className="h-screen sticky top-0 flex items-center overflow-hidden">
        {/* Header Content */}
        <div
          className="absolute left-0 w-full px-6 lg:px-16 
          top-1/4 md:top-[70%] lg:top-[80%] -translate-y-[120%] 
          text-center md:text-left">
          <motion.div
            className="max-w-2xl mx-auto md:mx-0 space-y-4"
            style={{ opacity }}>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                transition={{ duration: 0.8 }}
                className="h-0.5 w-12 bg-gradient-to-r from-red-900 to-red-700"
              />

              <span className="text-red-900 text-sm font-medium tracking-wider uppercase">
                Our Projects
              </span>
            </div>

            <h2
              className="text-2xl md:max-w-xs lg:max-w-lg xl:max-w-2xl  md:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 
              leading-tight">
              Crafting Exceptional Spaces Through Innovative Construction
            </h2>

<<<<<<< HEAD
            <button
=======
            <Link
              href="/Project"
>>>>>>> 49b8e3e (updated/pages)
              className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-full
                transform transition-all duration-300 hover:scale-105"
              onClick={() => (window.location.href = "#projects")}>
              Explore All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
<<<<<<< HEAD
            </button>
=======
            </Link>
>>>>>>> 49b8e3e (updated/pages)
          </motion.div>
        </div>

        {/* Project Cards */}
        <motion.div
          className="absolute top-1/4 lg:left-[55%] md:left-1/2 sm:left-10 -left-1 -translate-y-1/2 flex gap-8 px-6 lg:px-16"
          style={{ x }}>
<<<<<<< HEAD
          {ProjectCarouselItems.map((project, index) => (
            <motion.div
              key={index}
              className="group relative flex-shrink-0 w-[28rem] h-[30rem] lg:w-[32rem] lg:h-[36rem] overflow-hidden rounded-xl
                bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -10 }}>
              <div className="h-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-center  transition-transform duration-700
                    group-hover:scale-110"
                />
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t 
                from-black/80 to-transparent text-white">
                <span className="text-sm font-medium text-red-400 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p
                  className="text-sm text-gray-300 sm:opacity-0 group-hover:opacity-100 
                  transform sm:translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
=======
          {ProjectCardItems.map((project, index) => (
            <ProjectCard
              index={index + 1}
              category={project.category}
              title={project.title}
              description={project.description}
              image={project.image}
            />
>>>>>>> 49b8e3e (updated/pages)
          ))}
        </motion.div>
      </div>
    </section>
  );
}
<<<<<<< HEAD

{
  /* <MaxWidthWrapper>
<div className="mb-4 ">
  <hr className=" w-14 border-[1.5px]  shadow-[1px_20px_20px_1px_#FF0000] rounded-full border-[#6C1B07] " />
  <p className="w-14 mt-2 font-medium  text-[#6C1B07] text-center text-xs">
    Projects
  </p>
</div>
<h1 className="text-4xl  max-w-lg  z-10   font-bold">
  Featured Projects
</h1>

<Carousel
  plugins={[plugin.current]}
  className="w-full mx-auto select-none mt-10"
  onMouseEnter={plugin.current.stop}
  onMouseLeave={plugin.current.reset}>
  <CarouselContent className="flex snap-x  gap-4 mr-2 snap-mandatory items-center sm:gap-4 md:gap-10 lg:gap-8 xl:gap-12">
    {ProjectcarouselItems.map((item, index) => (
      <CarouselItem
        key={index}
        className="flex-shrink-0 w-[400px] basis-[90%] sm:basis-1/2 md:basis-[40%] lg:basis-[38%] xl:basis-[30%] ">
        <ProjectCard
          title={item.title}
          description={item.description}
          image={item.image}
        />
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
</MaxWidthWrapper>
<Button className="mt-6 ml-auto mr-10 ">View All</Button> */
}
=======
>>>>>>> 49b8e3e (updated/pages)
