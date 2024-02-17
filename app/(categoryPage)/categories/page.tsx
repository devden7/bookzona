import Link from "next/link";

import React from "react";

import Hero from "@/components/shared/Hero";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const page = () => {
  const dummyList = [
    {
      id: 0,
      title: "all the light we cannot see",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.",
      createdBy: "test 1",
      thickness: "tebal",
      image: "/assets/dummy-image-1.png",
    },
    {
      id: 1,
      title: "where the crawdads sing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.",
      createdBy: "test 2",
      thickness: "sedang",
      image: "/assets/dummy-image-2.png",
    },
    {
      id: 2,
      title: "rich people problems",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.",
      createdBy: "test 3",
      thickness: "tipis",
      image: "/assets/dummy-image-3.png",
    },
    {
      id: 3,
      title: "crazy rich asians",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.",
      createdBy: "test 4",
      thickness: "tipis",
      image: "/assets/dummy-image-4.png",
    },
    {
      id: 4,
      title: "all the light we cannot see",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.",
      createdBy: "test 1",
      thickness: "tebal",
      image: "/assets/dummy-image-1.png",
    },
    {
      id: 5,
      title: "where the crawdads sing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.",
      createdBy: "test 2",
      thickness: "sedang",
      image: "/assets/dummy-image-2.png",
    },
    {
      id: 6,
      title: "rich people problems",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.",
      createdBy: "test 3",
      thickness: "tipis",
      image: "/assets/dummy-image-3.png",
    },
    {
      id: 7,
      title: "crazy rich asians",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus voluptatum iste cumque! Nam aperiam minima, reiciendis soluta deleniti facere.",
      createdBy: "test 4",
      thickness: "tipis",
      image: "/assets/dummy-image-4.png",
    },
  ];

  return (
    <>
      <Hero taglineOne="DISCOVER YOUR" taglineTwo="PERFECT BOOK CATEGORY!" />
      <section className="bg-slate-50">
        <div className="container">
          <div className="pb-10 lg:pt-24 xl:pt-10">
            <div className="mt-5 flex flex-wrap gap-3 lg:justify-between">
              <div className="flex flex-col gap-2">
                <h5 className="font-semibold ">Category</h5>
                <Link href="/categories">All</Link>
                <Link href="/improvment">Improvment</Link>
                <Link href="/comedy">Comedy</Link>
                <Link href="/fantasy">Fantasy</Link>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:w-3/4 lg:gap-y-16">
                {dummyList.map((item) => (
                  <div
                    className="flex h-[530px] flex-col items-center overflow-hidden bg-white pb-2 shadow-sm sm:h-[470px] lg:relative lg:h-60 lg:w-4/5 lg:flex-row lg:items-start lg:overflow-visible"
                    key={item.id}
                  >
                    <div className="lg:absolute lg:left-[-15%] lg:w-2/5 xl:w-[30%] ">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={147}
                        height={225}
                      />
                    </div>
                    <div className="p-2 lg:ml-20 lg:py-2  xl:ml-16 xl:w-4/5">
                      <h3 className="line-clamp-2 h-12 font-medium">
                        {item.title}
                      </h3>
                      <p className="text-sm text-black/80">
                        By {item.createdBy}
                      </p>
                      <Badge variant="outline" className="my-1">
                        {item.thickness}
                      </Badge>
                      <p className="line-clamp-[7] h-36 text-sm text-black/70 sm:line-clamp-4 sm:h-20">
                        {item.description}
                      </p>
                      <Button
                        variant="outline"
                        className="mt-2 border-primary-500 bg-primary-500/15 text-primary-500"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
