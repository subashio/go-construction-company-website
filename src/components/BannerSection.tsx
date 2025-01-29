"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

import { adBannerList } from "@/constants/common";
import { motion } from "framer-motion";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function BannerSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <MaxWidthWrapper className="mt-10">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent className="flex h-auto w-full gap-2 !rounded-lg">
          {adBannerList.map((_item, index) => (
            <CarouselItem
              className="relative lg:h-[40vh] h-[30vh] w-full"
              key={index}>
              <Link href={_item.to} className="block h-full w-full">
                <motion.div
                  className="relative h-full w-full rounded-lg bg-contain bg-center bg-no-repeat overflow-hidden"
                  style={{ backgroundImage: `url(${_item.image})` }}>
                  {/* Shine Animation Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0"
                    animate={{
                      opacity: [0, 1, 0],
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                  <span className="sr-only">Slide {index + 1}</span>
                </motion.div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {adBannerList.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                current === idx ? "bg-black w-5" : "bg-black/50 w-2.5"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </MaxWidthWrapper>
  );
}
