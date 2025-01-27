"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Building2, Loader, Mail, Phone } from "lucide-react";
import React from "react";
import { PhoneInput } from "@/components/ui/phone-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const ContactCardList = [
  {
    icon: <Mail className="  w-6 h-6 text-yellow-900 " />,
    title: "Email Support",
    description: "Our team can respond in real time",
    info: "info.goconstruction.in",
  },
  {
    icon: <Building2 className="  w-6 h-6 text-yellow-900 " />,
    title: "Visit Our Office",
    description: "Visit our location in real life",
    info: "42,ganapthy nagar 2nd cross arupathapuram puducherry",
  },
  {
    icon: <Phone className="  w-6 h-6 text-yellow-900 " />,
    title: "Call Us Directly",
    description: "Available during working hours",
    info: "+91 9443956135 / 7904656924",
  },
];

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z
    .string()
    .min(10, { message: "Must be a valid Phone Number" })
    .max(14, { message: "Must be a valid Phone Number" }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid Email."),

  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});
export default function Contact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    // try {
    //   await sendContactForm(data);
    //   form.reset();
    //   toast({
    //     variant: "default",
    //     title: "Message Received",
    //     description:
    //       "Thank you for reaching out! We will get back to you shortly",
    //   });
    // } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     title: "Message Not Sent",
    //     description: "We couldn't send your message. Please try again later.",
    //   });
    // }
  }
  return (
    <section>
      <div className=" mx-auto bg-slate-50  w-full    pb-20 pt-8 gap-10">
        <MaxWidthWrapper className=" grid md:grid-cols-2  p-10   relative gap-10  ">
          <div className=" h-full w-full  ">
            <img
              className="h-full w-full rounded-xl  object object-cover"
              src="/pictures/contact-img.jpg"
              alt=""
            />
          </div>
          <div className="z-30  ">
            <h1 className="text-4xl lg:text-5xl mb-4 font-bold">
              Let&apos;s Get In Touch.
            </h1>
            <p className="text-sm mb-10">
              Or just reach out manually to
              <span className="text-blue-700">
                {" "}
                info@goconstruction.com{" "}
              </span>{" "}
            </p>
            <Form {...form}>
              <form
                className="mt-6 flex flex-col  gap-4"
                onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Name</FormLabel>
                      <FormControl>
                        <Input
                          className="mb-4 h-12"
                          placeholder="Enter Name"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-start">
                      <FormLabel className="text-left">Phone Number</FormLabel>
                      <FormControl className="w-full">
                        <PhoneInput
                          placeholder="Enter a phone number"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="mb-4 h-12"
                          placeholder="Enter Email"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="h-44 resize-none"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className="group mt-6 bg-gradient-to-r from-red-900 to-red-700  hover:bg-red-800 rounded-full inline-flex h-14 w-full cursor-pointer place-content-center justify-center gap-2    px-5 py-3 text-center text-md font-medium   transition duration-500">
                  Submit Form
                  {form.formState.isSubmitting && (
                    <Loader className="ml-2 h-6 w-6 animate-spin" />
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </MaxWidthWrapper>
        {/* <div className="">
          <img src="/pictures/contact-img.jpg" alt="" />
          </div> */}
      </div>
      <MaxWidthWrapper className="w-full flex flex-col items-center my-10">
        <h1 className="text-3xl md:text-4xl mb-2 font-bold">
          We&apos;d Love to Hear From You.
        </h1>
        <p className="text-sm">
          Or just reach out manually to
          <span className="text-blue-700"> info@goconstruction.com </span>{" "}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full p-4 mt-4 gap-10">
          {ContactCardList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-start p-4 py-6 shadow-md hover:shadow-xl cursor-pointer rounded-lg">
              <div className="bg-yellow-200/50 rounded-full p-2">
                {item.icon}
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className="font-bold text-lg">{item.title}</h1>
                <p className="">{item.description}</p>
              </div>
              <p className="text-sm text-blue-700">{item.info}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
