"use client";
import { useState } from "react";
import { revalidateTagAction } from "@/actions/revalidate-path";
import { useRouter } from "next/navigation";

type Product = {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default function NewProductPage() {
  const router = useRouter();
  const submit = async () => {
    const response = await fetch(`https://api.origamid.online/produtos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        preco,
        descricao,
        estoque,
        importado,
      }),
    });
    await revalidateTagAction("produtos");
    router.push("/produtos");
  };

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [estoque, setEstoque] = useState(0);
  const [importado, setImportado] = useState(0);

  return (
    <main>
      <h1>Novo produto</h1>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label>Preço:</label>
        <input
          type="number"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
        />
        <label>Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <label>Estoque:</label>
        <input
          type="numnber"
          value={estoque}
          onChange={(e) => setEstoque(Number(e.target.value))}
        />
        <label>Importado:</label>
        <input
          type="radio"
          value={importado}
          onChange={(e) => setImportado(Number(e.target.checked))}
        />

        <button type="button" onClick={submit}>
          Salvar
        </button>
      </div>
    </main>
  );
}
