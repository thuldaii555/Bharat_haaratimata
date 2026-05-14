export const premiumImages = {
  hero: {
    background: "/images/hero/home-hero-yarn.jpg",
    feature: "/images/hero/home-feature-basket.jpg",
  },
  categories: {
    rugs: "/images/categories/rugs.jpg",
    blanketsThrows: "/images/categories/blankets-throws.jpg",
    wallHangings: "/images/categories/wall-hangings.jpg",
    homeDecorations: "/images/categories/home-decorations.jpg",
    toys: "/images/categories/toys.jpg",
    personalAccessories: "/images/categories/personal-accessories.jpg",
    petAccessories: null,
    customDesigns: "/images/categories/custom-designs.jpg",
  },
  showroom: {
    rugDisplay: "/images/showroom/rug-display.jpg",
    whiteCarpetTexture: "/images/showroom/white-carpet-texture.jpg",
    feltDolls: "/images/showroom/felt-dolls.jpg",
    blueYarnKnitting: "/images/showroom/blue-yarn-knitting.jpg",
  },
  trade: {
    weavingLoomDetail: "/images/trade/weaving-loom-detail.jpg",
    threadYarnDetail: "/images/trade/thread-yarn-detail.jpg",
  },
  sustainability: {
    naturalWool: "/images/sustainability/natural-wool.jpg",
    woolTexture: "/images/sustainability/wool-texture.jpg",
  },
  lookbook: {
    colorStoryYarn: "/images/lookbook/color-story-yarn.jpg",
    basketYarnStudy: "/images/lookbook/basket-yarn-study.jpg",
    cozyHomeTextile: "/images/lookbook/cozy-home-textile.jpg",
  },

  // Legacy aliases are kept until the UI is migrated to the curated map.
  basketYarn: "/images/hero/home-feature-basket.jpg",
  whiteWoolFlowers: "/images/sustainability/natural-wool.jpg",
  carpetClose: "/images/categories/rugs.jpg",
  pastelYarn: "/images/hero/home-hero-yarn.jpg",
  sweaterStackLantern: "/images/categories/blankets-throws.jpg",
  dolls: "/images/showroom/felt-dolls.jpg",
  owlToys: "/images/categories/toys.jpg",
  blueYarnNeedles: "/images/showroom/blue-yarn-knitting.jpg",
  carpetStore: "/images/showroom/rug-display.jpg",
  textileVariety: "/images/categories/wall-hangings.jpg",
  loomWarm: "/images/trade/weaving-loom-detail.jpg",
  loomNeutral: "/images/trade/thread-yarn-detail.jpg",
  loomTexture: "/images/categories/custom-designs.jpg",
  whiteCarpet: "/images/showroom/white-carpet-texture.jpg",
  winterHome: "/images/lookbook/cozy-home-textile.jpg",
  knittedStack: "/images/categories/personal-accessories.jpg",
  mittenCup:
    "/premium-photos/woman-hands-white-blue-mittens-holding-cozy-knitted-cup-hot-cocoa-tea-coffee-winter-christmas-time-concept-61487099.jpg",
} as const;

export type PremiumImages = typeof premiumImages;

export const productImageBySlug: Partial<Record<string, string>> = {
  "felt-rugs-carpets": premiumImages.showroom.rugDisplay,
  "felt-ball-rugs": premiumImages.categories.rugs,
  "felt-home-decor": premiumImages.hero.feature,
  "felt-toys": premiumImages.categories.toys,
  "custom-wholesale-designs": premiumImages.categories.wallHangings,
};

export function getPlacedProductImage(slug: string, fallback?: string) {
  return productImageBySlug[slug] ?? fallback;
}
