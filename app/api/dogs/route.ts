import { NextResponse } from "next/server";

const DOGS = [
  {
    id: 1,
    name: "Bóris",
    image: "",
  },
  {
    id: 2,
    name: "Arisca",
    image: "",
  },
  {
    id: 3,
    name: "Maria",
    image: null,
  },
];

export async function GET() {
  return NextResponse.json(DOGS);
}
