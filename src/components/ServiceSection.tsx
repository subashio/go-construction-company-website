"use client";
<<<<<<< HEAD
=======
import { ServicesCarouselItem } from "@/constants/common";
>>>>>>> 49b8e3e (updated/pages)
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import React from "react";
import ServiceCard from "./ServiceCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

<<<<<<< HEAD
const carouselItem = [
  {
    title: "Independent Home",
    description:
      "Building standalone homes designed for privacy, comfort, and personalized living experiences.",
    image: "/pictures/inhome.png",
  },
  {
    title: "Civil Work ",
    description:
      " We Specializes in excavation, foundation work, concrete, masonry, drainage, waterproofing, and structural repairs ",
    image: "/pictures/civil.png",
  },
  {
    title: "Custom Construction ",
    description:
      " Providing tailored services for unique projects, ensuring your specific requirements are met with precision. ",
    image: "/pictures/stuct.png",
  },
  {
    title: "Interior Design",
    description:
      " Designing and delivering customized interiors that blend aesthetics with functionality",
    image: "/pictures/int.png",
  },

  {
    title: "Renovations & Remodeling ",
    description:
      " Transforming outdated or underutilized spaces into modern, functional, and visually appealing environments.",
    image: "/pictures/ren.png",
  },
  {
    title: "Maintenance & Repairs",
    description:
      " Ensuring your property stays in excellent condition with reliable and efficient maintenance services",
    image: "/pictures/mandr.png",
  },

  {
    title: "Project Management",
    description:
      " Overseeing every phase of your project to ensure seamless execution, on-time delivery, and adherence to budgets",
    image: "/pictures/pm.png",
  },
  {
    title: "Elevation & Plan",
    description:
      "Custom elevations and floor plans, ensuring both aesthetic appeal and functional efficiency in every project.",
    image: "/pictures/ele.png",
  },
  {
    title: "Landscaping",
    description:
      " Crafting beautiful and sustainable outdoor spaces, including gardens, patios, and outdoor structures",
    image: "/pictures/land.png",
  },

  {
    title: "Green Building & Sustainability",
    description:
      " Incorporating eco-friendly practices and sustainable materials to create energy-efficient, future-ready spaces.",
    image: "/pictures/gbuilding.png",
  },
  {
    title: "luxurious Villa",
    description:
      "builds luxury villas with custom designs, premium materials, and expert craftsmanship for elegant, spacious homes.",
    image: "/pictures/villa.png",
  },
  {
    title: "Apartment Construction",
    description:
      "Builds modern, high-quality apartments with efficient designs, ensuring durable and comfortable living spaces.",
    image: "/pictures/apart.png",
  },
];
=======
>>>>>>> 49b8e3e (updated/pages)
export default function ServiceSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="relative bg-fixed flex flex-col my-10 items-center  justify-center w-full py-24 bg-gradient-to-b  from-white to-[#1600000c]">
      {/* Background Image with Opacity */}
<<<<<<< HEAD
      <div className="absolute  inset-0 bg-[url('/pictures/serBg-1.png')] bg-cover bg-top opacity-20"></div>
=======
      <div className="absolute  inset-0 bg-[url('/pictures/servicesBg.png')] bg-fixed bg-cover bg-top "></div>
>>>>>>> 49b8e3e (updated/pages)
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
<<<<<<< HEAD
        className="w-full mx-auto select-none mt-10"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent className="flex snap-x mx-2 gap-4 snap-mandatory items-center sm:gap-4 md:gap-10 lg:gap-8 xl:gap-10">
          {carouselItem.map((item, index) => (
=======
        className="w-full mx-auto select-none"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent className="flex snap-x mx-2 gap-4 snap-mandatory items-center sm:gap-4 md:gap-10 lg:gap-8 xl:gap-10">
          {ServicesCarouselItem.map((item, index) => (
>>>>>>> 49b8e3e (updated/pages)
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
<<<<<<< HEAD

// const [isDragging, setIsDragging] = useState(false);
// const [startX, setStartX] = useState(0);
// const [scrollLeft, setScrollLeft] = useState(0);
// const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
// const sliderRef = useRef<HTMLDivElement>(null);

// const scrollToNext = useCallback(() => {
//   if (!sliderRef.current) return;
//   const maxScroll =
//     sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
//   const newScrollLeft = sliderRef.current.scrollLeft + 300;

//   if (newScrollLeft >= maxScroll) {
//     // Reset to start if we've reached the end
//     sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
//   } else {
//     sliderRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
//   }
// }, []);

// // Initialize autoplay
// useAutoplay(scrollToNext, 2000, isAutoplayEnabled);

// const handleNext = () => {
//   if (!sliderRef.current) return;
//   const maxScroll =
//     sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
//   const newScrollLeft = Math.min(
//     sliderRef.current.scrollLeft + 300,
//     maxScroll
//   );
//   sliderRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
// };

// const handlePrev = () => {
//   if (!sliderRef.current) return;
//   const newScrollLeft = Math.max(sliderRef.current.scrollLeft - 300, 0);
//   sliderRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
// };

// const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//   if (!sliderRef.current) return;
//   setIsDragging(true);
//   setStartX(e.pageX - sliderRef.current.offsetLeft);
//   setScrollLeft(sliderRef.current.scrollLeft);
//   setIsAutoplayEnabled(false); // Pause autoplay on interaction
// };

// const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//   if (!isDragging || !sliderRef.current) return;
//   e.preventDefault();
//   const x = e.pageX - sliderRef.current.offsetLeft;
//   const walk = (x - startX) * 2;
//   sliderRef.current.scrollLeft = scrollLeft - walk;
// };

// const handleMouseUp = () => {
//   setIsDragging(false);
//   // Resume autoplay after a short delay
//   setTimeout(() => setIsAutoplayEnabled(true), 1000);
// };

// const handleMouseEnter = () => {
//   setIsAutoplayEnabled(false); // Pause on hover
// };

// const handleMouseLeave = () => {
//   setIsAutoplayEnabled(true); // Resume on mouse leave
//   setIsDragging(false);
// };

// return (
//   <section className="relative min-h-screen flex flex-col items-center justify-center py-24 bg-gradient-to-b from-white to-gray-50">
//     <div className="absolute inset-0 bg-[url('/pictures/serBg-1.png')] bg-cover bg-top opacity-10" />

//     <div className="relative z-10 container mx-auto px-4">
//       <div className="text-center mb-16">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{ width: "80px" }}
//           className="h-1 bg-gradient-to-r from-blue-900 to-blue-600 mx-auto mb-4 rounded-full"
//         />
//         <span className="text-blue-900 text-sm font-medium tracking-wider uppercase">
//           Our Services
//         </span>
//         <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
//           What We Offer
//         </h2>
//         <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
//           Successfully delivering personalized housing solutions, we have
//           earned a reputation for excellence through exceptional
//           craftsmanship, timely execution, and client satisfaction.
//         </p>
//       </div>

//       <div className="relative">
//         <button
//           onClick={handlePrev}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all duration-300">
//           <ArrowLeft className="w-6 h-6 text-blue-900" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all duration-300">
//           <ArrowRight className="w-6 h-6 text-blue-900" />
//         </button>

//         <div
//           ref={sliderRef}
//           className="overflow-x-hidden cursor-grab active:cursor-grabbing"
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}>
//           <div className="flex gap-6 py-8">
//             {carouselItem.map((service, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-[300px] lg:w-[400px]">
//                 <ServiceCard {...service} index={index} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );
=======
>>>>>>> 49b8e3e (updated/pages)
