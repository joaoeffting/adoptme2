import Image from "next/image";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import AuthCheck from "./AuthCheck";

type Pet = { id: string; name: string; image: string; type: string };
interface Props {
  pets: Pet[];
}

export default async function Pet({ pets }: Props) {
  const getPetImage = (pet: Pet) => {
    if (!pet.image) {
      if (pet.type === "dog") {
        return "/dogplaceholder.png";
      }

      return "/catplaceholder.webp";
    }

    return pet.image;
  };

  return (
    <>
      {pets.map((pet) => {
        return (
          <li key={pet.id}>
            <Image
              src={getPetImage(pet)}
              width={300}
              height={200}
              alt={pet.name}
            />
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
