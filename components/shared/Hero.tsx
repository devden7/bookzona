import Image from "next/image";
import React from "react";
import Search from "./Search";

interface Props {
  taglineOne: string;
  taglineTwo: string;
}
const Hero = ({ taglineOne, taglineTwo }: Props) => {
  return (
    <section className="relative mt-10">
      <div className="absolute right-0 top-[-117px] -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="663"
          height="613"
          viewBox="0 0 663 613"
          fill="none"
        >
          <path
            d="M94.1837 414.532C31.9823 508.827 37.7751 588.038 159.457 613H664.931V0H47.1093C-128.228 169.823 258.575 165.322 94.1837 414.532Z"
            fill="#FF971D"
          />
        </svg>
      </div>
      <div className="container flex flex-col items-center sm:flex-row sm:justify-between sm:gap-2">
        <div>
          <p className="mb-2 text-6xl font-bold sm:text-5xl md:text-7xl">
            {taglineOne}
          </p>
          <p className=" mb-2 text-6xl font-bold sm:text-5xl md:text-7xl">
            {taglineTwo}
          </p>
          <p className="mb-2 text-lg">
            Find your favorite book and read it here for free
          </p>
          <Search />
        </div>
        <div className="bg-primary-500 sm:bg-transparent">
          <Image
            src="/assets/image-hero.png"
            alt="image hero"
            width={297}
            height={497}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
