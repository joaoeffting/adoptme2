import Image from "next/image";

interface Props {
  id: number;
  name: string;
  image: string;
}

export default async function Pet({ id, name, image }: Props) {
  return (
    <li>
      <Image src={image} width={300} height={200} alt={name} />
      {name}
    </li>
  );
}
