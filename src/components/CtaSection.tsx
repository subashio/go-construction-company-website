import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function CtaSection() {
  return (
    <section className=" relative h-[50vh] bg-[url('/pictures/ctaBg.jpg')] bg-no-repeat bg-fixed bg-cover mt-20 ">
      <div className=" bg-gradient-to-r from-yellow-600/50  to-yellow-400/500 h-full w-full flex flex-col gap-6 items-center  justify-center  ">
        <h1 className="text-4xl font-bold max-w-xl z-10 text-center ">
          Get in Touch to Build Your Dream Home
        </h1>
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
          For Enquiries call: 91+ 9443956135 / 7904656924
        </p>
      </div>
    </section>
  );
}
