import { NextResponse } from "next/server";

const DOGS = [
  {
    id: 1,
    name: "Bóris",
    image: "",
    type: "dog",
  },
  {
    id: 2,
    name: "Arisca",
    image: "",
    type: "dog",
  },
  {
    id: 3,
    name: "Maria",
    image: null,
    type: "dog",
  },
];

export async function GET() {
  const newDogsArray = DOGS.map((dog) => {
    if (!dog.image) {
      return { ...dog, image: "/dogplaceholder.png" };
    }
    return dog;
  });
  return NextResponse.json(newDogsArray);
}
