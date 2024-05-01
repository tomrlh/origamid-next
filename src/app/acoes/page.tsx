"use client";

import Atualizar from "@/components/atualizar";
import { useEffect, useState } from "react";

type Acao = {
  nome: string;
  preco: number;
  atualizada: string;
};

type PageParams = {
  params: {
    acao: string;
  };
};

export default function AcaoPage({ params }: PageParams) {
  const [acao, setAcao] = useState<Acao>({} as Acao);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.origamid.online/acoes/lua`, {
        next: {
          revalidate: 5,
        },
      });

      const newAcao = (await response.json()) as Acao;
      setAcao(newAcao);
    };
    fetchData();
  }, []);

  return (
    <main>
      <Atualizar />
      <h1>Ações</h1>
      <h2>{acao.nome}</h2>
      <p>Preço: {acao.preco}</p>
      <p>Atualizada: {acao.atualizada}</p>
    </main>
  );
}
