import { Aula } from "@/types/Curso";
import Link from "next/link";

export type PageParams = {
  params: {
    curso: string;
    aula: string;
  };
};

export default async function LessonPage({ params }: PageParams) {
  console.log(params);

  const response = await fetch(
    `https://api.origamid.online/cursos/${params.curso}/${params.aula}`
  );
  const data = (await response.json()) as Aula;
  console.log(data);

  return (
    <div>
      <Link href={`/cursos/${params.curso}`}>Voltar ao curso</Link>
      <h4>{data.nome}</h4>
      <p>{data.descricao}</p>
      <p>Duração: {data.tempo}</p>
      <br />
    </div>
  );
}
