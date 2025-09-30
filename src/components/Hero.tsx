import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mb-4">
      <h1 className="font-bold text-2xl mb-2">Hi, I am Abhay.</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <Image
        src="/hero.png"
        width={700}
        height={192}
        quality={70}
        placeholder="blur"
        blurDataURL="/hero-placeholder.png"
        loading="eager"
        alt="Hero Image"
      />
    </div>
  );
};

export default Hero;
