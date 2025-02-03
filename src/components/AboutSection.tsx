"use client";
import { counts } from "@/constants/common";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-labelledby="about-us">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <MaxWidthWrapper className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-400"
                />
                <span className="text-yellow-700 text-sm font-medium tracking-wider uppercase">
                  Why Choose Us
                </span>
              </div>

              <h2
                id="about-us"
                className="text-4xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Crafting Excellence in Every Home
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-xl">
                Successfully delivering personalized housing solutions, we have
                earned a reputation for excellence through exceptional
                craftsmanship, timely execution, and client satisfaction.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="sm:grid sm:grid-cols-3 flex flex-col gap-4  sm:gap-8">
              {counts.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group">
                  <div className="absolute inset-0 bg-yellow-100/40 rounded-lg transform  group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative p-2 gap-1.5  flex flex-col items-center">
                    <div className="  font-bold text-lg flex items-center  xl:text-xl text-gray-900">
                      {stat.count}
                      <span className="text-yellow-600 mb-1">
                        {stat.prefix}
                      </span>
                    </div>
                    <p className="text-xs xl:text-sm  text-gray-600 ">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative">
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/50 to-yellow-100 rounded-2xl transform rotate-3" /> */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl xl:m-10">
              <Image
                width={612}
                height={479}
                src="/pictures/about-img.png"
                alt="Go Construction - Building custom homes, villas, and high-quality construction projects"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
