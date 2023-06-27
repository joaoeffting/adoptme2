import Pet from "@/components/Pet";
import styles from "@/components/Pet.module.css";

interface Pets {
  id: number;
  name: string;
  image: string;
}

interface Props {
  type: string;
}

export default async function PetList({ type }: Props) {
  const response = await fetch(`http://localhost:3000/api/${type}`);
  const pets: Pets[] = await response.json();

  if (!pets) return <div>No pets found :( </div>;

  return (
    <div>
      <ul className={styles.pets}>
        {pets.map((pet) => (
          <Pet key={pet.id} {...pet} />
        ))}
      </ul>
    </div>
  );
}
