import { Aula } from "@/types/Curso";
import { PageParams } from "@/types/PageParams";

export default async function LessonPage({ params }: PageParams) {
  console.log(params);

  const response = await fetch(
    `https://api.origamid.online/cursos/${params.slug[0]}/${params.slug[1]}${params.slug[2]}`
  );
  const data = (await response.json()) as Aula;
  console.log(data);

  return (
    <div>
      <h4>{data.nome}</h4>
      <p>{data.descricao}</p>
    </div>
  );
}
