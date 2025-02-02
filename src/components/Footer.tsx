"use client";
import { footerLinks } from "@/constants/common";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const socialIcons = [
  {
    href: "https://x.com/i/flow/login?redirect_after_login=%2FGoconstruct_42",
    label: "Follow us on Twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/go_construction_?igsh=MTB1Zmg5NTY4amt1eA==",
    label: "Follow us on Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61572643353707&rdid=5b7k6gOC43Lu5wE5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BMLa8wF4Z%2F#",
    label: "Like us on Facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-700 z-30  text-white pt-12">
      <MaxWidthWrapper className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Company Logo and Description */}
        <section className="md:col-span-1 mx-6">
          <Image
            width={726}
            height={268}
            src="/logos/logo.png"
            alt="Go-Construction Logo"
            className="h-20 w-56 mb-4 -ml-3"
          />
          <p className="text-white text-sm border-b pb-6 max-w-sm">
            Go Construction specializes in delivering top-quality housing
            solutions, blending innovation, craftsmanship, and customer
            satisfaction to redefine modern living.
          </p>
        </section>
        {/* Footer Links */}

        {footerLinks.map((section, index) => (
          <section
            key={index}
            aria-labelledby={`footer-section-${index}`}
            className="mx-6">
            <h4
              id={`footer-section-${index}`}
              className="text-lg font-semibold mb-4  pb-2">
              {section.title}
            </h4>
            <nav className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <div key={linkIndex}>
                  {link.isMultiple ? (
                    <span className="flex gap-1 flex-wrap">
                      {link.labels.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.href}
                          className="text-gray-50 px-0.5 hover:text-red-500 transition-colors">
                          {subLink.text}
                        </Link>
                      ))}
                    </span>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      className="text-gray-50 hover:text-red-500 transition-colors">
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </section>
        ))}

        {/* Social Media and Newsletter */}
        <section className="md:col-span-1 mx-6" aria-labelledby="social-media">
          <h4 id="social-media" className="text-lg font-semibold mb-4   pb-2">
            Connect With Us
          </h4>
          <nav className="flex space-x-4 mb-4">
            {socialIcons.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-gray-50 hover:text-red-500 transition-colors"
                aria-label={social.label}>
                {social.icon}
              </Link>
            ))}
          </nav>
        </section>
      </MaxWidthWrapper>

      {/* Copyright */}
      <div className="bg-red-100/10 text-center py-4 mt-8">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Go Construction. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
