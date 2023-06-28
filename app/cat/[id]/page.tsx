import PetDetails from "@/components/PetDetails";
import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    id: string;
  };
}

export default async function CatDetails({ params }: Props) {
  const pet = await prisma.pets.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!pet) {
    return <div>No pet found</div>;
  }
  return (
    <div>
      <PetDetails pet={pet} />
    </div>
  );
}
