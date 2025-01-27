"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { whyGo } from "@/constants/common";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[20vh] sm:h-[25vh] bg-cover bg-center"
        style={{ backgroundImage: `url(/pictures/about-bg.jpg)` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70" />

        {/* Content */}
        <MaxWidthWrapper className="relative z-20 flex flex-col h-full items-start gap-4 justify-center px-6 lg:px-12">
          <h1 className="text-white text-3xl sm:text-5xl font-semibold">
            About Us
          </h1>
          <Breadcrumb className="z-20  ">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-white hover:text-orange-400 transition-colors duration-300">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-orange-400">
                  About
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </MaxWidthWrapper>
      </section>

      {/* Why Choose Us Section */}
      <MaxWidthWrapper className="px-6 lg:px-12 mt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 place-content-center items-center">
            <div className="flex flex-col max-w-2xl ">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 0.8 }}
                  className="h-0.5 bg-gradient-to-r from-yellow-600 to-yellow-400"
                />
                <span className="text-yellow-700 text-sm font-medium tracking-wider uppercase">
                  About us
                </span>
              </div>
              <h2 className="text-4xl xl:text-5xl font-bold mt-4 mb-6">
                GoConstruction: Building Dreams with Expertise and Passion
              </h2>
              <p className=" mr-auto text-gray-600 leading-relaxed">
                At GoConstruction, we are more than just builders—we are
                creators of spaces that inspire, innovate, and endure. As a
                full-service construction company, we take pride in offering a
                wide range of construction solutions that cater to every need,
                big or small. From residential homes to commercial projects and
                everything in between, we bring expertise, reliability, and
                passion to every project we undertake.
              </p>
            </div>
            <Image
              width={500}
              height={500}
              src="/pictures/about.jpg"
              className="w-full rounded-lg"
              alt="go construction about image"
            />
          </div>
        </motion.div>
      </MaxWidthWrapper>

      {/* Why GoConstruction Section */}
      <section className="px-6 lg:px-12 mt-12 bg-gray-50 py-20">
        <MaxWidthWrapper className=" mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why GoConstruction?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {whyGo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Vision and Mission Section */}
      <MaxWidthWrapper className="px-6 lg:px-12 py-20 grid xl:grid-cols-2 gap-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-orange-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-orange-700">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be a leader in the construction industry, setting the benchmark
              for innovation, quality, and sustainability, while creating spaces
              that inspire and contribute to a better future.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-orange-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-orange-700">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to deliver exceptional construction services by
              combining expertise, innovation, and integrity. We strive to
              exceed client expectations through meticulous planning, superior
              craftsmanship, and sustainable practices, fostering long-lasting
              relationships and building structures that stand the test of time.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="  rounded-lg">
          <Image
            width={500}
            height={500}
            src="/pictures/vandm.jpg"
            className="w-full rounded-lg"
            alt="go construction about image"
          />
        </motion.div>
      </MaxWidthWrapper>

      {/* Call to Action */}
      <section
        className=" bg-cover bg-no-repeat  bg-fixed "
        style={{ backgroundImage: `url(/pictures/ctaBg.jpg)` }}>
        <div className="bg-gradient-to-r from-yellow-600/50  to-yellow-400/50 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Your Future Together
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Whether you're planning a new project, renovating an existing
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
