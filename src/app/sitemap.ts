import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://goconstruction.in";

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/About`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/Project`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/Contact`, lastModified: new Date().toISOString() },
  ];
}
