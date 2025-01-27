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
import { Loader } from "lucide-react";
import React from "react";
import { PhoneInput } from "@/components/ui/phone-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

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
    <MaxWidthWrapper className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
      <div className="">
        <img src="/pictures/contact-img.jpg" alt="" />
      </div>
      <div className=" flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-bold">
          Let&apos;s Get In Touch.
        </h1>
        <p className="text-sm">
          Or just reach out manually to
          <span className="text-blue-700"> info@goconstruction.com </span>{" "}
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                    <PhoneInput placeholder="Enter a phone number" {...field} />
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
              className="group my-8 inline-flex h-12 w-full cursor-pointer place-content-center justify-center gap-2 rounded-lg border-2   px-5 py-3 text-center text-sm font-medium  transition duration-500">
              Submit Form
              {form.formState.isSubmitting && (
                <Loader className="ml-2 h-6 w-6 animate-spin" />
              )}
            </Button>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  );
}
