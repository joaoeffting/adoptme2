"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface Props {
  petId: string;
  isFavorited: boolean;
}

export default async function FavoriteClient({ petId, isFavorited }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;
  console.log("EITAAAAAAAAA");

  const favorite = async () => {
    setIsFetching(true);
    await fetch("/api/favorite", {
      method: "POST",
      body: JSON.stringify({ petId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    });
  };

  const unfavorite = async () => {
    setIsFetching(true);
    await fetch(`/api/favorite?petId=${petId}`, {
      method: "DELETE",
    });

    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    });
  };

  if (isFavorited) {
    return (
      <button onClick={unfavorite}>{!isMutating ? "Unfavorite" : "..."}</button>
    );
  }

  return <button onClick={favorite}>{!isMutating ? "Favorite" : "..."}</button>;
}
