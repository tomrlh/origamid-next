import { Curso } from "@/types/Curso";
import Link from "next/link";

export type PageParams = {
  params: {
    curso: string;
  };
};

export default async function CoursePage({ params }: PageParams) {
  console.log(params);

  const response = await fetch(
    `https://api.origamid.online/cursos/${params.curso}`
  );
  const curso = (await response.json()) as Curso;
  console.log(curso);

  return (
    <div key={curso.id}>
      <Link href={`/cursos`}>Todos os cursos</Link>
      <h4>{curso.nome}</h4>
      <h5>
        {curso.total_aulas} aulas, {curso.total_horas} horas
      </h5>
      <p>{curso.descricao}</p>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link href={`/cursos/${params.curso}/${aula.slug}`}>
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
