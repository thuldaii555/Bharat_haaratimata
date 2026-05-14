export const premiumImages = {
  basketYarn: "/premium-photos/a-basket-with-yarn-and-knitting-needles-free-photo.jpeg",
  whiteWoolFlowers: "/premium-photos/ball-of-white-wool-yarn-with-flowers-on-soft-fabric-background-photo.jpeg",
  carpetClose: "/premium-photos/carpet-26952500.webp",
  pastelYarn: "/premium-photos/colorful-yarn-balls-in-soft-pastel-shades-for-crafting-fun-photo.jpg",
  sweaterStackLantern: "/premium-photos/cozy-sweaters-stack-knitted-lantern-table-34927393.webp",
  dolls: "/premium-photos/dolls-26803662.webp",
  owlToys: "/premium-photos/handmade-owl-toys-crafted-soft-35324474.webp",
  blueYarnNeedles: "/premium-photos/light-blue-yarn-ball-with-knitting-needles-and-knitted-fabric-free-photo.jpg",
  carpetStore: "/premium-photos/persian-carpets-display-carpet-store-51372228.webp",
  textileVariety:
    "/premium-photos/silk-scarf-cashmere-scarf-wool-felt-tapestry-carpet-various-colors-wooden-fram-as-new-year-approaches-there-variety-166091905.webp",
  loomWarm: "/premium-photos/weaving-loom-thread-yarn-closeup-image-old-57788065.webp",
  loomNeutral: "/premium-photos/weaving-loom-thread-yarn-closeup-image-old-75414379.webp",
  loomTexture: "/premium-photos/weaving-loom-thread-yarn-closeup-image-old-75414445.webp",
  whiteCarpet: "/premium-photos/white-carpet-texture-534036.webp",
  winterHome: "/premium-photos/winter-home-romantic-icon-valentine-card-mug-knits-book-window-sill-cozy-love-word-comfortable-cold-weather-life-stile-136010589.jpg",
  knittedStack: "/premium-photos/winter-knitted-clothes-stack-wooden-background-woolen-apparel-cozy-sweaters-pile-78936373.jpg",
  mittenCup: "/premium-photos/woman-hands-white-blue-mittens-holding-cozy-knitted-cup-hot-cocoa-tea-coffee-winter-christmas-time-concept-61487099.jpg",
} as const;

export const productImageBySlug: Record<string, string> = {
  "felt-rugs-carpets": premiumImages.carpetStore,
  "felt-ball-rugs": premiumImages.carpetClose,
  "felt-home-decor": premiumImages.basketYarn,
  "felt-toys": premiumImages.owlToys,
  "felt-pet-accessories": premiumImages.whiteCarpet,
  "custom-wholesale-designs": premiumImages.textileVariety,
};

export function getPlacedProductImage(slug: string, fallback?: string) {
  return productImageBySlug[slug] ?? fallback;
}
