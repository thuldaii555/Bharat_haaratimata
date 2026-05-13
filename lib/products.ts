export type Product = {
  slug: string;
  name: string;
  category: string;
  material: string;
  summary: string;
  handmadeNote: string;
  customNote: string;
};

export const products: Product[] = [
  {
    slug: "felt-rugs-carpets",
    name: "Felt Rugs & Carpets",
    category: "Felt Rugs & Carpets",
    material: "New Zealand wool felt, natural soap, water, hand finishing",
    summary: "Soft architectural rugs for interiors, hospitality, and retail.",
    handmadeNote: "Each rug is formed by hand, with subtle tonal and surface variation.",
    customNote: "Custom dimensions, color stories, and export assortments are available for wholesale buyers.",
  },
  {
    slug: "felt-ball-rugs",
    name: "Felt Ball Rugs",
    category: "Felt Ball Rugs",
    material: "Hand-rolled wool felt balls, cotton thread backing",
    summary: "Graphic felt ball surfaces with warmth, weight, and quiet pattern.",
    handmadeNote: "Every ball is rolled individually before being assembled into a finished rug.",
    customNote: "Available in custom palettes, sizes, and repeatable wholesale programs.",
  },
  {
    slug: "felt-home-decor",
    name: "Felt Home Decor",
    category: "Felt Home Decor",
    material: "Wool felt with hand-stitched and sculpted details",
    summary: "Baskets, trivets, garlands, and soft decor for considered living spaces.",
    handmadeNote: "Handmade details give each piece a calm, tactile presence.",
    customNote: "Seasonal sets and private-label decor ranges can be developed for partners.",
  },
  {
    slug: "felt-toys",
    name: "Felt Toys",
    category: "Felt Toys",
    material: "Wool felt, cotton stitching, soft filling where required",
    summary: "Playful, tactile objects for boutiques, gift shops, and museum retail.",
    handmadeNote: "Artisans shape and finish each object with close attention to proportion.",
    customNote: "Custom character families, colors, and packaging-ready assortments are available.",
  },
  {
    slug: "felt-pet-accessories",
    name: "Felt Pet Accessories",
    category: "Felt Pet Accessories",
    material: "Durable wool felt with hand-finished forms",
    summary: "Warm pet caves, toys, and accessories with a refined handmade character.",
    handmadeNote: "Felt density and finishing are managed by hand for comfort and durability.",
    customNote: "Wholesale buyers may request exclusive sizes, colors, and product families.",
  },
  {
    slug: "custom-wholesale-designs",
    name: "Custom Wholesale Designs",
    category: "Custom Wholesale Designs",
    material: "Wool felt, mixed handcraft techniques by project",
    summary: "Collaborative development for buyers seeking a distinctive felt collection.",
    handmadeNote: "Sampling and production are guided by artisan capability and material integrity.",
    customNote: "Ideal for interior studios, boutiques, and ethical import programs.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
