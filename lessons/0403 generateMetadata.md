https://www.origamid.com/slide/nextjs/#/0403-generatemetadata/1

generateMetadata

metadata
Podemos exportar um objeto metadata para definir metadados estáticos para a página.

https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields

// direto na página
export const metadata: Metadata = {
title: 'Cursos Origamid',
description: 'Cursos online de Front End e UI Design.',
keywords: ['HTML', 'CSS', 'JavaScript', 'UI Design'],
authors: [{ name: 'André Rafael', url: 'https://andrerafael.com' }],
};

Em páginas dinâmicas, precisamos de metadados dinâmicos. Para isso, podemos utilizar a função generateMetadata.

    type PageParams = {
      params: {
        curso: string;
      };
    };

    export async function generateMetadata({ params }: PageParams) {
      // se você faz o mesmo fetch no corpo da página, o React irá usar o cache do fetch, evitando requisições duplicadas.
      const curso = await getCurso(params.curso);

      return {
        title: curso.nome,
        description: curso.descricao,
      };
    }
