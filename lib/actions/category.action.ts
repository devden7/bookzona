"use server";

import prisma from "../prisma";

interface paramsCreateBook {
  title: string;
  description: string;
  imageUrl: string;
  releaseYear: number;
  price: string;
  totalPage: number;
  category: string;
}

export const createBook = async ({
  title,
  description,
  imageUrl,
  releaseYear,
  price,
  totalPage,
  category,
}: paramsCreateBook) => {
  try {
    let thickness;
    if (totalPage <= 100) {
      thickness = "Thin";
    } else if (totalPage > 100 && totalPage <= 200) {
      thickness = "Medium";
    } else {
      thickness = "Thic";
    }

    // check category in db
    const checkCategory = await prisma.category.findUnique({
      where: { name: category },
    });

    if (!checkCategory) {
      // create category to db
      const createCategory = await prisma.category.create({
        data: {
          name: category,
        },
      });

      // create books to db
      await prisma.books.create({
        data: {
          title,
          description,
          image_url: imageUrl,
          release_year: releaseYear,
          price,
          total_page: totalPage,
          thickness,
          category_id: createCategory.id,
        },
      });
    } else {
      // create books to db
      await prisma.books.create({
        data: {
          title,
          description,
          image_url: imageUrl,
          release_year: releaseYear,
          price,
          total_page: totalPage,
          thickness,
          category_id: checkCategory.id,
        },
      });
    }

    return { message: "Book added successfully" };
  } catch (error) {
    console.log(error);
  }
};
