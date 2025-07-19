"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Daftar preset animasi
const animationVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function RevealOnScroll({
  children,
  delay = 0.1,
  duration = 0.6,
  variant = "fadeUp", // default
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  variant?: keyof typeof animationVariants;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const motionVariant = animationVariants[variant] || animationVariants.fadeUp;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={motionVariant}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
