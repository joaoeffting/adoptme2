import type { Pet } from "@/types";

export default function getPetImage(pet: Pet) {
  if (!pet.image) {
    if (pet.type === "dog") {
      return "/dogplaceholder.png";
    }

    return "/catplaceholder.webp";
  }

  return pet.image;
}
