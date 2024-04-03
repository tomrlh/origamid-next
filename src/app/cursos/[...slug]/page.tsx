import { Curso } from "@/types/Curso";
import { PageParams } from "@/types/PageParams";
import Link from "next/link";

export default async function CoursePage({ params }: PageParams) {
  console.log(params);

  const response = await fetch(
    `https://api.origamid.online/cursos/${params.slug}`
  );
  const curso = (await response.json()) as Curso;
  console.log(curso);

  return (
    <div key={curso.id}>
      <h4>{curso.nome}</h4>
      <h5>
        {curso.total_aulas} aulas, {curso.total_horas} horas
      </h5>
      <p>{curso.descricao}</p>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <Link
              href={`https://api.origamid.online/cursos/${params.slug}/${aula.slug}`}
            >
              {aula.nome}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
