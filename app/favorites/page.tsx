import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Favorites() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }
  return <div>Favorited Pets</div>;
}
