https://www.origamid.com/slide/nextjs/#/0306-loading-e-suspense/1

Loading

Envolve o conteúdo de page.tsx em um <Suspense> e utiliza o corpo do loading.tsx como fallback.

    // app/produtos/loading.tsx
    export default function Loading() {
      return <div>Carregando...</div>;
    }


Suspense
Podemos usar o <Suspense> para envolver o componente que está sendo carregado de forma assíncrona. 
Assim temos maior controle sobre a página.

O filho do <Suspense> é carregado via Streaming Server Rendering. Enquanto o carregamento ocorre, o 
fallback será exibido.

    import ProdutosLista from '@/components/produtos-lista';
    import { Suspense } from 'react';

    export default async function ProdutosPage() {
      return (
        <main>
          <h1>Produtos</h1>
          <Suspense fallback={'Carregando...'}>
            <ProdutosLista />
          </Suspense>
        </main>
      );
    }