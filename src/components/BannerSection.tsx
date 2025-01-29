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

    // Set total slide count and listen for slide changes
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index); // Navigate to the respective slide
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
        <CarouselContent className="my-2  flex h-[35vh] md:h-[40vh] w-full gap-2  !rounded-lg ">
          {adBannerList.map((_item, index) => (
            <CarouselItem className="relative h-full w-full" key={index}>
              <Link href={_item.to} className="block h-full w-full">
                <div
                  className="h-full w-full rounded-lg bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${_item.image})` }}>
                  {/* Fallback for loading or missing images */}
                  <span className="sr-only">Slide {index + 1}</span>
                </div>
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
              className={`h-2.5  w-2.5 rounded-full transition-all duration-300 ${
                current === idx ? "bg-white w-5" : "bg-white/50 w-2.5"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </MaxWidthWrapper>
  );
}
