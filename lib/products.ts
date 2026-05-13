export type Product = {
  slug: string;
  name: string;
  category: string;
  material: string;
  summary: string;
  handmadeNote: string;
  suggestedUse: string;
  customizationOptions: string;
  customNote: string;
  imageSrc?: string;
};

export const products: Product[] = [
  {
    slug: "felt-rugs-carpets",
    name: "Felt Rugs & Carpets",
    category: "Felt Rugs & Carpets",
    material: "New Zealand wool felt, natural soap, water, hand finishing",
    summary: "Soft architectural rugs for residences, hospitality suites, and considered retail collections.",
    handmadeNote: "Each rug is formed by hand, with subtle tonal and surface variation.",
    suggestedUse: "Interior designers, hotel suites, living rooms, boutiques, and quiet hospitality spaces.",
    customizationOptions: "Dimensions, pile density, color palette, border direction, and export assortment planning.",
    customNote: "Custom dimensions, color stories, and export assortments are available for wholesale buyers.",
    imageSrc: "/showroom/felt-rugs.jpg",
  },
  {
    slug: "felt-ball-rugs",
    name: "Felt Ball Rugs",
    category: "Felt Ball Rugs",
    material: "Hand-rolled wool felt balls, cotton thread backing",
    summary: "Graphic felt ball surfaces with warmth, weight, and quiet pattern.",
    handmadeNote: "Every ball is rolled individually before being assembled into a finished rug.",
    suggestedUse: "Boutique retail, children-focused interiors, design shops, and tactile accent spaces.",
    customizationOptions: "Ball size, palette, pattern rhythm, rug shape, and wholesale pack planning.",
    customNote: "Available in custom palettes, sizes, and repeatable wholesale programs.",
    imageSrc: "/showroom/felt-ball-rugs.jpg",
  },
  {
    slug: "felt-home-decor",
    name: "Felt Home Decor",
    category: "Felt Home Decor",
    material: "Wool felt with hand-stitched and sculpted details",
    summary: "Baskets, trivets, garlands, and soft decor for considered living spaces.",
    handmadeNote: "Handmade details give each piece a calm, tactile presence.",
    suggestedUse: "Homeware stores, concept shops, seasonal assortments, hospitality gifting, and interior styling.",
    customizationOptions: "Seasonal color stories, size families, motif development, labeling, and assortment structure.",
    customNote: "Seasonal sets and private-label decor ranges can be developed for partners.",
    imageSrc: "/showroom/home-decor.jpg",
  },
  {
    slug: "felt-toys",
    name: "Felt Toys & Accessories",
    category: "Felt Toys & Accessories",
    material: "Wool felt, cotton stitching, soft filling where required",
    summary: "Tactile wool objects and accessories for boutiques, gift shops, and museum retail.",
    handmadeNote: "Artisans shape and finish each object with close attention to proportion.",
    suggestedUse: "Museum shops, gift stores, ethical retail, children-focused boutiques, and curated lifestyle assortments.",
    customizationOptions: "Character families, ornament sets, colors, scale, packaging direction, and repeat programs.",
    customNote: "Custom object families, colors, and packaging-ready assortments are available.",
    imageSrc: "/showroom/toys-accessories.jpg",
  },
  {
    slug: "felt-pet-accessories",
    name: "Felt Pet Accessories",
    category: "Felt Pet Accessories",
    material: "Durable wool felt with hand-finished forms",
    summary: "Warm pet caves, toys, and accessories with a refined handmade character.",
    handmadeNote: "Felt density and finishing are managed by hand for comfort and durability.",
    suggestedUse: "Pet boutiques, lifestyle retailers, gift assortments, and eco-conscious home collections.",
    customizationOptions: "Size grading, felt density, neutral palettes, accent details, and wholesale bundles.",
    customNote: "Wholesale buyers may request exclusive sizes, colors, and product families.",
  },
  {
    slug: "custom-wholesale-designs",
    name: "Custom Wholesale Designs",
    category: "Custom Wholesale Designs",
    material: "Wool felt, mixed handcraft techniques by project",
    summary: "Collaborative development for buyers seeking a distinctive felt collection.",
    handmadeNote: "Sampling and production are guided by artisan capability and material integrity.",
    suggestedUse: "Interior studios, ethical importers, boutiques, hospitality projects, and private-label programs.",
    customizationOptions: "Concept development, sampling, color and size systems, labeling direction, and export planning.",
    customNote: "Ideal for interior studios, boutiques, and ethical import programs.",
    imageSrc: "/showroom/custom-designs.jpg",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
