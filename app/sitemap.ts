import type { MetadataRoute } from "next";

import { categories } from "@/lib/categories";
import { getActiveProducts } from "@/lib/products";

const baseUrl = "https://haaratimata.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/showroom",
    "/wholesale",
    "/sustainability",
    "/gallery",
    "/contact",
    "/cart",
    "/login",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/showroom/category/${category.slug}`,
  }));

  const productRoutes = getActiveProducts().map((product) => ({
    url: `${baseUrl}/showroom/${product.slug}`,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
