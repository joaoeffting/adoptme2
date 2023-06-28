import Pet from "@/components/Pet";
import styles from "@/components/Pet.module.css";
import { prisma } from "@/lib/prisma";

interface Pets {
  id: string;
  name: string;
  image: string;
  type: string;
}

interface Props {
  type: string;
}

export default async function PetList({ type }: Props) {
  const pets = await prisma.pets.findMany({ where: { type } });

  if (!pets) return <div>No pets found :( </div>;

  const newPetsArray = pets.map((pet) => {
    if (!pet.image) {
      if (pet.type === "dog") return { ...pet, image: "/dogplaceholder.png" };

      return { ...pet, image: "/catplaceholder.webp" };
    }
    return pet;
  });

  return (
    <div>
      <ul className={styles.pets}>
        <Pet pets={newPetsArray} />
      </ul>
    </div>
  );
}
