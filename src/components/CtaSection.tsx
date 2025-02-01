import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function CtaSection() {
  return (
    <section
      aria-labelledby="contact-us"
      className=" relative h-[50vh] bg-[url('/pictures/ctaBg.jpg')] bg-no-repeat bg-fixed bg-cover mt-10 "
      role="img"
      aria-label="CTA section background showcasing modern homes and construction projects">
      <div className=" bg-gradient-to-r from-yellow-600/50  to-yellow-400/500 h-full w-full flex flex-col gap-6 items-center  justify-center  ">
        <h2
          id="contact-us"
          className="text-4xl font-bold max-w-xl z-10 text-center ">
          Get in Touch to Build Your Dream Home
        </h2>
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
        <p className="text-xs z-10 ">
          For enquiries call:
          <Link href="tel:+919443956135"> +91 9443956135</Link> /
          <Link href="tel:+917904656924"> +91 7904656924</Link>
        </p>
      </div>
    </section>
  );
}
