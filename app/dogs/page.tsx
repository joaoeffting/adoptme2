import PetList from "@/components/PetList";

export default async function Dogs() {
  return (
    <div>
      <h1>Dogs for adoption:</h1>
      <PetList type="dogs" />
    </div>
  );
}
