import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Pagination } from "@/components/custom";
import CelebrityCard from "../components/CelebrityCard";

export async function generateStaticParams() {
  const categories = [
    { category: "female-celebrity" },
    { category: "male-celebrity" },
    { category: "indian-male-celebrity" },
    { category: "indian-female-celebrity" },
    { category: "month-birthday" },
    { category: "today-birthday" },
    { category: "young-celebrity" },
    { category: "oldest-celebrity" },
    { category: "bollywood-celebrity" },
    { category: "hollywood-celebrity" },
  ];

  return categories;
}


export default async function CelebrityCategory({ params, searchParams }) {
  const { category } = params;
  let data;

  try {
    const res = await ServerApiHandler(
      `/api/celebrity/${category}?page=${searchParams.page || 1}`
    );
    data = await res;
    var total_pages = data.total_pages;
    var current_page = data.page;
  } catch (error) {
    return <p>Failed to load celebrities. Please try again later.</p>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <p>No celebrities found.</p>;
  }

  return (
    <section>
      <h1>{category.replace("-", " ").toUpperCase()}</h1>
      <section className="container py-8 space-y-8">
        <ul className="grid grid-cols-4 gap-4">
          {data.results.map((celebrity) => (
            <CelebrityCard celebrity={celebrity} key={celebrity.id} />
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <Pagination
            currentPage={current_page}
            totalPage={total_pages}
            query="page"
            path={`/celebrity/${category}`}
          />
        </div>
      </section>
    </section>
  );
}
