import Access from "@/components/access";
import Atualizar from "@/components/atualizar";

export default async function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Atualizar />
      <Access />
    </main>
  );
}
