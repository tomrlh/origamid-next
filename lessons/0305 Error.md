https://www.origamid.com/slide/nextjs/#/0305-error/1

Error

Erros podem ocorrer em diferentes momentos da nossa aplicação, mas principalmente quando 
lidamos com código que depende de uma parte externa, como API's, banco de dados, etc.

Podemos utilizar criar um arquivo error.tsx na mesma pasta da nossa rota para tratar os erros que 
ocorrem durante a execução da página.

    // produtos/error.tsx
    'use client'; // Precisa ser um client component

    export default function Error({ error }: { error: Error }) {
      return (
        <div>
          <h2>Um erro ocorreu.</h2>
          {/* apenas para teste, mostre uma mensagem genérica para o usuário */}
          <p>{error.message}</p>
        </div>
      );
    }