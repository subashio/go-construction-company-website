"use client";
import { footerLinks } from "@/constants/common";
import MaxWidthWrapper from "./MaxWidthWrapper";

const socialIcons = [
  {
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "#",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
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
        <div className="md:col-span-1">
          <img
            src="/logos/logo.png"
            alt="Go Construction Logo"
            className="h-16 mb-4 -ml-3"
          />
          <p className="text-white text-sm border-b pb-6 max-w-sm">
            Successfully delivering personalized housing solutions, we have
            earned a reputation for excellence through exceptional
            craftsmanship, timely execution, and client satisfaction.
          </p>
        </div>
        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4  pb-2">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="text-gray-50 hover:text-red-500 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media and Newsletter */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold mb-4   pb-2">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-50 hover:text-red-500 transition-colors">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
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
