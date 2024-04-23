type Product = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};

export default async function ProductPage() {
  const response = await fetch(`https://api.origamid.online/produtos`, {
    next: {
      tags: ["produtos"],
    },
  });
  const data = (await response.json()) as Product[];

  return (
    <main>
      <h1>Produtos</h1>
      {data.map((product) => (
        <li key={product.id}>
          {product.nome} - qtd: {product.estoque}
        </li>
      ))}
    </main>
  );
}
