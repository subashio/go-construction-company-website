"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

import { adBannerList } from "@/constants/common";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function BannerSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (!api) return;

    // // Set total slide count and listen for slide changes
    setCount(api.scrollSnapList().length);
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
        <div className="absolute bottom-4 z-30 mx-auto flex w-full justify-center gap-2 md:bg-secondary/0">
          {Array.from({ length: count }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "h-3 w-3 cursor-pointer transition-colors",
                current === index
                  ? "scale-x-[1.8] rounded-sm fill-primary/50"
                  : "rounded-full border fill-secondary/70"
              )}
              viewBox="0 0 24 24"
              onClick={() => handleDotClick(index)}>
              <circle cx="12" cy="12" r="10" />
            </svg>
          ))}
        </div>
      </Carousel>
    </MaxWidthWrapper>
  );
}
