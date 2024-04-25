https://www.origamid.com/slide/nextjs/#/0304-form-action/1

Form Action

O form possui um atributo chamado action, que pode ser usado para enviar os dados do formulário
através de uma server action. A server action passa a receber um FormData como argumento.


useFormStatus

escuta o status do form

Contém o status do envio do formulário como pending, data, method e action. O pending é um 
booleano que indica se o formulário está sendo enviado.
Importante, o useFormStatus só funciona se fizer parte de uma componente que estiver dentro de um form.


useFormState

Com o useFormState é possível controlar o estado do formulário. O useFormState retorna uma 
array com dois valores, o primeiro é o estado do formulário e o segundo é a server action. 
Ele deve receber a server action original como argumento.

    const [state, formAction] = useFormState(adicionarProdutoAction, {
      errors: []
    })

