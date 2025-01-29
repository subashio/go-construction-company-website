"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectPageCardItems } from "@/constants/common";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

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
const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0   ">
        <DialogHeader>
          <DialogTitle className="p-6">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="relative  w-full  rounded-lg  bg-black/20 ">
          <div className="relative h-[50vh] max-w-4xl ">
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="h-full w-full object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70">
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 w-2 rounded-full ${
                        idx === currentImageIndex ? "bg-white" : "bg-white/50"
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

export default function Project() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = React.useState(false);
  return (
    <div className="relative flex flex-col ">
      {/* Hero Section */}
      <section className="relative  overflow-hidden">
        <MaxWidthWrapper className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Featured
            <span className="text-red-600"> Projects</span>
          </h1>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto px-4">
            Discover our portfolio of innovative construction projects that
            showcase our expertise and commitment to excellence
          </p>
        </MaxWidthWrapper>
      </section>
      {/* project cards */}
      <div className=" bg-gradient-to-br from-yellow-900/40 to-yellow-800/30 p-4 py-10 mt-14 backdrop-blur-xl">
        <MaxWidthWrapper className="grid  grid-cols-1 rounded-t-xl bg-cover bg-fixed sm:grid-cols-2 xl:grid-cols-3 gap-10 ">
          {ProjectPageCardItems.map((project, index) => (
            <motion.div
              key={index}
              className="group relative flex-shrink-0 h-auto overflow-hidden   rounded-xl
                bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -10 }}
              onClick={() => {
                setSelectedProject(project);
                setDialogOpen(true);
              }}>
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
          ))}
        </MaxWidthWrapper>
      </div>
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      )}
      <section
        className=" bg-cover  bg-fixed bg-no-repeat z-30 bg-bottom"
        style={{ backgroundImage: `url(/pictures/pro.jpg)` }}>
        <div className="bg-gradient-to-r from-yellow-600/50  to-yellow-400/50 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let&apos;s Build Your Future Together
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Whether you&apos;re planning a new project, renovating an existing
              space, or maintaining your property, GoConstruction is your
              trusted partner.
            </p>
            <Link
              href="/Contact"
              className={cn(
                buttonVariants({
                  variant: "default",
                  className:
                    "bg-white text-red-600 px-8 h-14 rounded-full text-lg font-semibold hover:bg-red-100 transition duration-300",
                })
              )}>
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
