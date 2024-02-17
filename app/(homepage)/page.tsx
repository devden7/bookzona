"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import Hero from "@/components/shared/Hero";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      releaseYear: 0,
      price: "",
      totalPage: 0,
      category: "",
    },
  });

  const submitHandler = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <>
      <Hero taglineOne="READ AND ADD" taglineTwo="YOUR INSIGHT" />
      <section className="mb-10 bg-slate-50">
        <div className="container">
          <h1 className="pt-10 text-4xl font-medium">All Books</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Book</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Book</DialogTitle>
                <DialogDescription>Add Your Book</DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(submitHandler)}
                  className="space-y-3"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="add title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="add description" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Image Url</FormLabel>
                        <FormControl>
                          <Input placeholder="add image url" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="releaseYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Release Year</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input placeholder="Add Price" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="totalPage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Page</FormLabel>
                        <FormControl>
                          <Input placeholder="Add Total Page" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input placeholder="Add Category" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
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
