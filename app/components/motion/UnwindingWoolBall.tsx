"use client";

import { motion, useScroll, useTransform } from "motion/react";

export function UnwindingWoolBall() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 0.38], [0, 34]);
  const ballX = useTransform(scrollYProgress, [0, 0.38], [0, -18]);
  const threadX = useTransform(scrollYProgress, [0, 0.38], [0, -34]);
  const threadScale = useTransform(scrollYProgress, [0, 0.38], [1, 1.08]);

  return (
    <div className="unwinding-wool" aria-hidden="true">
      <motion.div
        className="unwinding-thread"
        style={{ x: threadX, scaleX: threadScale }}
      >
        <span className="thread-strand thread-strand-main" />
        <span className="thread-strand thread-strand-soft" />
      </motion.div>
      <motion.div className="wool-ball" style={{ rotate, x: ballX }}>
        <span className="wool-ball-core" />
        <span className="wool-ball-line wool-ball-line-one" />
        <span className="wool-ball-line wool-ball-line-two" />
        <span className="wool-ball-line wool-ball-line-three" />
      </motion.div>
    </div>
  );
}
