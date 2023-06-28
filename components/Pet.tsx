import Image from "next/image";
import FavoriteButton from "./FavoriteButton/FavoriteButton";
import AuthCheck from "./AuthCheck";

interface Props {
  pets: { id: string; name: string; image: string }[];
}

export default async function Pet({ pets }: Props) {
  return (
    <>
      {pets.map((pet) => {
        return (
          <li key={pet.id}>
            <Image src={pet.image} width={300} height={200} alt={pet.name} />
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
