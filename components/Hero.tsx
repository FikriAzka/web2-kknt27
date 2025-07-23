"use client";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

type HeroProps = {
  title: string;
  subtitle?: string;
  image: string;
};

export default function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <RevealOnScroll variant="fadeIn" delay={0.2}>
      <section className="relative w-full h-[360px] overflow-hidden">
        <Image
          src={image}
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

        <div className="relative z-20 max-w-5xl mx-auto h-full flex flex-col items-center justify-center text-center text-white px-6 md:px-16">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
            style={{ color: "#81daec" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl font-light drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    </RevealOnScroll>
  );
}
