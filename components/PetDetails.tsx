import React from "react";
import type { Pet } from "@/types";
import getPetImage from "@/utils/getPetImage";
import Image from "next/image";
import styles from "./PetDetails.module.css";

interface Props {
  pet: Pet;
}

export default async function PetDetails({ pet }: Props) {
  return (
    <div className={styles.container}>
      <h1>Pet details:</h1>
      <Image src={getPetImage(pet)} width={300} height={200} alt={pet.name} />
      <h3>{pet.name}</h3>
      <div>{pet.description}</div>
    </div>
  );
}
