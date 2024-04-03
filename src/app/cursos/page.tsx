import { Curso } from "@/types/Curso";
import { PageParams } from "@/types/PageParams";
import Link from "next/link";

export default async function CoursePage({ params }: PageParams) {
  console.log(params);

  const response = await fetch(`https://api.origamid.online/cursos`);
  const data = (await response.json()) as Curso[];
  console.log(data);

  return (
    <ul>
      {data.map((curso) => (
        <li key={curso.id}>
          <Link href={`/cursos/${curso.slug}`}>
            {curso.nome} - {curso.total_horas} horas
          </Link>
        </li>
      ))}
    </ul>
  );
}
