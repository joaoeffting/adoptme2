import Pet from "@/components/Pet";
import styles from "@/components/Pet.module.css";
import { prisma } from "@/lib/prisma";

interface Props {
  type: string;
}

export default async function PetList({ type }: Props) {
  const pets = await prisma.pets.findMany({ where: { type } });

  if (!pets) return <div>No pets found :( </div>;

  return (
    <ul className={styles.pets}>
      <Pet pets={pets} />
    </ul>
  );
}
