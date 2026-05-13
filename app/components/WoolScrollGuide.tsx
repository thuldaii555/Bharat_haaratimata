"use client";

import { motion, useScroll, useTransform } from "motion/react";

export function WoolScrollGuide() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 0.35], [0, 140]);
  const x = useTransform(scrollYProgress, [0, 0.35], [0, 18]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute right-[8%] top-28 hidden h-20 w-20 rounded-full border border-ivory/70 bg-[radial-gradient(circle_at_35%_30%,#fffcf5,#d9d5cc_48%,#c8b89d_76%,#a98263)] shadow-[0_24px_50px_rgba(58,42,32,0.18),inset_0_0_18px_rgba(58,42,32,0.12)] md:block"
      style={{ rotate, x, y }}
    >
      <span className="absolute left-1/2 top-full h-36 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      <span className="absolute inset-3 rounded-full border border-walnut/10" />
      <span className="absolute inset-6 rounded-full border border-walnut/10" />
    </motion.div>
  );
}
