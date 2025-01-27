"use client";
import { ProjectCardItems } from "@/constants/common";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";

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

            <Link
              href="/Project"
              className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white px-6 py-3 rounded-full
                transform transition-all duration-300 hover:scale-105"
              onClick={() => (window.location.href = "#projects")}>
              Explore All Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Project Cards */}
        <motion.div
          className="absolute top-1/4 lg:left-[55%] md:left-1/2 sm:left-10 -left-1 -translate-y-1/2 flex gap-8 px-6 lg:px-16"
          style={{ x }}>
          {ProjectCardItems.map((project, index) => (
            <ProjectCard
              index={index + 1}
              category={project.category}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
