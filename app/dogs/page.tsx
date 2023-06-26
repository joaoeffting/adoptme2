import styles from "./Dog.module.css";
import Dog from "./Dog";

interface Dogs {
  id: number;
  name: string;
  image: string;
}

export default async function Dogs() {
  const response = await fetch("http://localhost:3000/api/dogs");
  const dogs: Dogs[] = await response.json();

  if (!dogs) return <div>No dogs :(</div>;

  return (
    <div>
      <h1>Dogs for adoption:</h1>
      <ul className={styles.dogs}>
        {dogs.map((dog) => (
          <Dog key={dog.id} {...dog} />
        ))}
      </ul>
    </div>
  );
}
