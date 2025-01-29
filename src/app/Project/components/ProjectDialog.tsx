"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
}

interface ProjectDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const ProjectDialog: React.FC<ProjectDialogProps> = ({
  project,
  open,
  onOpenChange,
}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const images = project.images || [project.image];
  const [isPaused, setIsPaused] = useState(false); // State to track if autoplay is paused
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null); // Ref to hold the interval ID

  useEffect(() => {
    if (!open) return;

    // Function to start the autoplay
    const startAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear any existing interval
      }
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          paginate(1); // Only paginate if not paused
        }
      }, 1000);
    };

    // Start autoplay when dialog opens
    startAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clear the interval when the component unmounts
      }
    };
  }, [open, isPaused]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < images.length) {
      setPage([newPage, newDirection]);
    } else if (newPage < 0) {
      setPage([images.length - 1, newDirection]);
    } else {
      setPage([0, newDirection]);
    }
  };

  const imageIndex = ((page % images.length) + images.length) % images.length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0">
        <DialogHeader>
          <DialogTitle className="p-6">{project.title}</DialogTitle>
        </DialogHeader>
        <div
          className="relative h-[70vh] bg-black/20 w-full overflow-hidden rounded-lg"
          onMouseEnter={() => setIsPaused(true)} // Pause autoplay on hover
          onMouseLeave={() => setIsPaused(false)} // Resume autoplay when mouse leaves
          onTouchStart={() => setIsPaused(true)} // Pause autoplay on touch start
          onTouchEnd={() => setIsPaused(false)} // Resume autoplay on touch end
        >
          <div className="relative h-full w-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                className="absolute w-full h-full"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}>
                <img
                  src={images[imageIndex]}
                  alt={`${project.title} - Image ${imageIndex + 1}`}
                  className="h-full w-full object-contain pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(-1)}
                  className="absolute left-2 top-1/2  rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors z-10">
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => paginate(1)}
                  className="absolute right-2 top-1/2  rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors z-10">
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        const newDirection = idx > imageIndex ? 1 : -1;
                        setPage([idx, newDirection]);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === imageIndex ? "bg-white w-4" : "bg-white/50 w-2"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mt-4 p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {project.category}
          </h3>
          <p className="mt-2 text-gray-600">{project.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
