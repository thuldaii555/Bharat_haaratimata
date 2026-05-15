import { premiumImages } from "./premiumImages";

export type Category = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string | null;
  productCountLabel: string;
  featured: boolean;
};

export const categories: Category[] = [
  {
    id: "cat-rugs",
    slug: "rugs",
    name: "Rugs",
    shortDescription: "Architectural felt surfaces for homes, hospitality, and design-led interiors.",
    description: "Handmade felt rugs and floor textiles developed for residences, hospitality spaces, retail programs, and custom buyer briefs.",
    image: premiumImages.categories.rugs,
    productCountLabel: "3+ products",
    featured: true,
  },
  {
    id: "cat-blankets-throws",
    slug: "blankets-throws",
    name: "Blankets & Throws",
    shortDescription: "Layered wool textures for warm interiors and seasonal assortments.",
    description: "Soft wool throws and blanket concepts for boutiques, gifting, hospitality styling, and interior layering programs.",
    image: premiumImages.categories.blanketsThrows,
    productCountLabel: "3+ products",
    featured: true,
  },
  {
    id: "cat-wall-hangings",
    slug: "wall-hangings",
    name: "Wall Hangings",
    shortDescription: "Textile-led wall pieces with handmade warmth and visual texture.",
    description: "Felt panels, textile wall pieces, and custom art directions for interiors, boutiques, and hospitality environments.",
    image: premiumImages.categories.wallHangings,
    productCountLabel: "3+ products",
    featured: true,
  },
  {
    id: "cat-home-decorations",
    slug: "home-decorations",
    name: "Home Decorations",
    shortDescription: "Baskets, garlands, table accents, and sculptural felt objects.",
    description: "Refined wool felt decor pieces for everyday home styling, seasonal stories, retail displays, and hospitality gifting.",
    image: premiumImages.categories.homeDecorations,
    productCountLabel: "3+ products",
    featured: true,
  },
  {
    id: "cat-toys",
    slug: "toys",
    name: "Toys",
    shortDescription: "Soft handmade felt toys and playful wool objects.",
    description: "Tactile felt toys, nursery objects, ornaments, and playful wool pieces for boutique gifting and family spaces.",
    image: premiumImages.categories.toys,
    productCountLabel: "3+ products",
    featured: true,
  },
  {
    id: "cat-personal-accessories",
    slug: "personal-accessories",
    name: "Personal Accessories",
    shortDescription: "Wearable wool goods and small handmade lifestyle pieces.",
    description: "Felt slippers, scarves, purses, mittens, charms, and personal accessories for curated lifestyle collections.",
    image: premiumImages.categories.personalAccessories,
    productCountLabel: "3+ products",
    featured: true,
  },
  {
    id: "cat-pet-accessories",
    slug: "pet-accessories",
    name: "Pet Accessories",
    shortDescription: "Comfort-led felt concepts for pet-focused retail.",
    description: "Felt pet caves, mats, beds, baskets, and toy concepts designed for pet boutiques and lifestyle retail programs.",
    image: premiumImages.categories.petAccessories,
    productCountLabel: "3+ products",
    featured: true,
  },
  {
    id: "cat-custom-designs",
    slug: "custom-designs",
    name: "Custom Designs",
    shortDescription: "Buyer-led color, form, sizing, and private-label development.",
    description: "Custom sample development, palette planning, sizing systems, and private-label felt product programs for trade partners.",
    image: premiumImages.categories.customDesigns,
    productCountLabel: "3+ programs",
    featured: true,
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
