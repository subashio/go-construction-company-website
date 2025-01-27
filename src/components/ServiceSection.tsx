"use client";
import { ServicesCarouselItem } from "@/constants/common";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import React from "react";
import ServiceCard from "./ServiceCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function ServiceSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="relative bg-fixed flex flex-col my-10 items-center  justify-center w-full py-24 bg-gradient-to-b  from-white to-[#1600000c]">
      {/* Background Image with Opacity */}
      <div className="absolute  inset-0 bg-[url('/pictures/servicesBg.png')] bg-fixed bg-cover bg-top "></div>
      <div className="absolute inset-0 pointer-events-none"> </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 z-20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-[#2d1717] to-[#864545] mx-auto mb-4 rounded-full"
        />
        <span className="text-[#2d1717] text-sm font-medium tracking-wider uppercase">
          Our Services
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
          What We Offer
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
          Successfully delivering personalized housing solutions, we have earned
          a reputation for excellence through exceptional craftsmanship, timely
          execution, and client satisfaction.
        </p>
      </motion.div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full mx-auto select-none"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent className="flex snap-x mx-2 gap-4 snap-mandatory items-center sm:gap-4 md:gap-10 lg:gap-8 xl:gap-10">
          {ServicesCarouselItem.map((item, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-[400px] basis-[90%] sm:basis-1/2 md:basis-[40%] lg:basis-[38%] xl:basis-[26%] ">
              <ServiceCard
                title={item.title}
                description={item.description}
                image={item.image}
                index={index}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
