import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import Pet from "@/components/Pet";
import styles from "@/components/Pet.module.css";

export default async function Favorites() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  const currentUserId = await prisma.user
    .findFirst({
      where: { email: session?.user?.email! },
    })
    .then((user) => user?.id!);

  const favoritedPetsIds = await prisma.favorites
    .findMany({
      where: { userId: currentUserId },
    })
    .then((petsIds) => {
      return petsIds.map((p) => p.petId);
    });

  if (favoritedPetsIds.length === 0) {
    return <>No favorited pets</>;
  }

  const pets = await prisma.pets.findMany({
    where: { id: { in: favoritedPetsIds } },
  });

  return (
    <div>
      <h1>Favorited Pets:</h1>
      <ul className={styles.pets}>
        <Pet pets={pets} />
      </ul>
    </div>
  );
}
