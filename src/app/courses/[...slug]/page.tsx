type PageParams = {
  params: {
    slug: string[];
  };
};

export default async function CoursesPage({ params }: PageParams) {
  console.log(params);

  return (
    <main>
      <h1>Courses</h1>
    </main>
  );
}
