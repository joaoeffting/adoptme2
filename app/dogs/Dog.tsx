import Image from "next/image";
import styles from "./Dog.module.css";

interface Props {
  id: number;
  name: string;
  image: string;
}

export default async function Dog({ id, name, image }: Props) {
  const dogImage = image ? image : "/dogplaceholder.png";
  return (
    <li>
      <Image src={dogImage} width={300} height={200} alt={name} />
      {name}
    </li>
  );
}
