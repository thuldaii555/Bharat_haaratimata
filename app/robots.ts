import type { MetadataRoute } from "next";

const baseUrl = "https://haaratimata.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/showroom", "/wholesale", "/sustainability", "/gallery", "/contact"],
      disallow: ["/admin/", "/login", "/cart"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
