https://www.origamid.com/slide/nextjs/#/0303-cache/1

Cache

Por padrão o next usa o force-cache, que irá criar um cache persistente do fetch.

export const revalidate = 10;

seta o revalidate no componente inteiro



revalidatePath:

usado em: Route Handlers, Server Actions ou servidor

atualiza o cache e os dados na interface

Dentro de useEffect posso usar uma server action



revalidateTags:

Podemos definir tags durante o fetch e revalidar o cache de todas as rotas que possuem a mesma tag.

Pode ser usada para revalidar uma lista de produtos, quando um novo produto for postado.

    // declarando tag
    const response = await fetch('https://api.origamid.online/acoes/lua', {
      next: {
        tags: ['acoes'],
      },
    });

====

    // revalidando tag
    import { revalidateTag } from 'next/cache';

    revalidateTag('acoes');