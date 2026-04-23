"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-700">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <span className="inline-block sm:-ml-2 lg:-ml-4">
              <TypeAnimation
                sequence={["Abner", 1000, "Web Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl" />

          <div className="flex flex-col sm:flex-row gap-3">
            {/* ✅ Corrigido: Button como asChild para o Link ser o elemento raiz */}
            <Button
              asChild
              className="rounded-full bg-linear-to-br from-primary-500 to-secondary-500 hover:text-blue-500 text-white px-6 py-3 w-full sm:w-fit"
            >
              <Link href="#contact">Contact me</Link>
            </Button>

            {/* Download CV — descomente quando quiser reativar
            <Button
              asChild
              variant="outline"
              className="rounded-full border-transparent bg-gradient-to-br from-primary-500 to-secondary-500 p-[2px] w-full sm:w-fit"
            >
              <Link href="https://drive.google.com/file/d/1dHDkVNZSsre_Li3FyD4qFBDuinGG86LS/view?usp=sharing">
                Download CV
              </Link>
            </Button>
            */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-62.5 h-62.5 lg:w-112.5 lg:h-112.5 relative">
            <Image
              src="/images/dev-no-bg.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
