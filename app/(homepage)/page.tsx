import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import Search from "@/components/shared/Search";

export default function Home() {
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
              READ AND ADD
            </p>
            <p className=" mb-2 text-6xl font-bold sm:text-5xl md:text-7xl">
              YOUR INSIGHT
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
      <section className="mb-10 bg-slate-50">
        <div className="container">
          <h1 className="pt-10 text-4xl font-medium">All Books</h1>
          <div className="bg-white pb-10 shadow-md">
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-10 lg:grid-cols-4">
              {dummyList.map((item) => (
                <div
                  key={item.id}
                  className="flex h-[375px] flex-col items-center overflow-hidden pb-2 lg:h-52 lg:flex-row lg:items-start"
                >
                  <div className="p-2 lg:p-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={200}
                    />
                  </div>
                  <div className="p-2 lg:w-3/5 lg:py-2 xl:w-[70%]">
                    <h3 className="line-clamp-2 h-12 font-medium">
                      {item.title}
                    </h3>
                    <p className="text-sm text-black/80">By {item.createdBy}</p>
                    <Badge variant="outline" className="my-1">
                      {item.thickness}
                    </Badge>
                    <p className="line-clamp-5 h-40 text-sm text-black/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
