import { NextResponse } from "next/server";

const CATS = [
  {
    id: 1,
    name: "Cat 1",
    image: "",
    type: "cat",
  },
  {
    id: 2,
    name: "Cat 2",
    image: "",
    type: "cat",
  },
  {
    id: 3,
    name: "Cat 3",
    image: null,
    type: "cat",
  },
];

export async function GET() {
  const newCatsArray = CATS.map((cat) => {
    if (!cat.image) {
      return { ...cat, image: "/catplaceholder.webp" };
    }
    return cat;
  });
  return NextResponse.json(newCatsArray);
}
