import PetList from "@/components/PetList";

export default async function Cats() {
  return (
    <div>
      <h1>Cats for adoption:</h1>
      <PetList type="cat" />
    </div>
  );
}
