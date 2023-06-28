import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import FavoriteClient from "./FavoriteClient";

interface Props {
  petId: string;
}

export default async function FavoriteButton({ petId }: Props) {
  const session = await getServerSession(authOptions);
  const currentUserId = await prisma.user
    .findFirst({
      where: { email: session?.user?.email! },
    })
    .then((user) => user?.id!);

  const isFavorited = await prisma.favorites.findFirst({
    where: {
      userId: currentUserId,
      petId,
    },
  });
  return <FavoriteClient petId={petId} isFavorited={!!isFavorited} />;
}
