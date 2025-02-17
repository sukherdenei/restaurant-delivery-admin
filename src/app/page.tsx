import { NomNom } from "./_components/Nomnom";
import { Orders } from "./_components/Orders";

export default function Home() {
  return (
    <div className="flex">
      <NomNom />
      <Orders />
    </div>
  );
}
