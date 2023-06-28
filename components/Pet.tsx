import Image from "next/image";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import AuthCheck from "./AuthCheck";
import Link from "next/link";
import type { Pet } from "@/types";
import getPetImage from "@/utils/getPetImage";

interface Props {
  pets: Pet[];
}

export default async function Pet({ pets }: Props) {
  return (
    <>
      {pets.map((pet) => {
        return (
          <li key={pet.id}>
            <Link href={`/${pet.type}/${pet.id}`}>
              <Image
                src={getPetImage(pet)}
                width={300}
                height={200}
                alt={pet.name}
              />
            </Link>
            {pet.name}
            <AuthCheck>
              <FavoriteButton petId={pet.id} />
            </AuthCheck>
          </li>
        );
      })}
    </>
  );
}
