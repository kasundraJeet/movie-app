import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Pagination } from "@/components/custom";
import MovieBox from "../components/MovieBox";

export async function generateStaticParams() {
  const categories = [
    { category: "top-rated" },
    { category: "top" },
    { category: "best-movies" },
    { category: "highly-rated" },
    { category: "all-time-favorites" },
    { category: "fan-favorites" },
    { category: "up-coming" },
    { category: "up-coming-releases" },
    { category: "soon-in-theaters" },
    { category: "future-releases" },
    { category: "anticipated-releases" },
    { category: "coming-soon" },
    { category: "new-releases-upcoming" },
    { category: "popular" },
    { category: "famous" },
    { category: "trending-now" },
    { category: "most-popular" },
    { category: "blockbusters" },
    { category: "audience-favorites" },
    { category: "hit-movies" },
    { category: "now-playing" },
    { category: "latest" },
    { category: "new-release" },
    { category: "currently-showing" },
    { category: "in-theaters-now" },
    { category: "latest-releases" },
    { category: "watch-now" },
    { category: "new-in-theaters" }
  ];

  return categories;
}


export default async function CelebrityCategory({ params, searchParams }) {
  const { category } = params;
  let data;
  let current_page;
  let total_pages;

  try {
    const res = await ServerApiHandler(
      `/api/movies/${category}?page=${searchParams.page || 1}`
    );
    data = await res;
    total_pages = data.total_pages;
    current_page = data.page;
  } catch (error) {
    return <p>Failed to load celebrities. Please try again later.</p>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <p>No Data found.</p>;
  }

  return (
    <section>
      <h1>{category.replace("-", " ").toUpperCase()}</h1>
      <section className="container py-8 space-y-8">
        <ul className="grid grid-cols-4 gap-4">
          {data.results.map((movie) => (
            <MovieBox movie={movie} key={movie.id} />
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <Pagination
            currentPage={current_page}
            totalPage={total_pages}
            query="page"
            path={`/movies/${category}`}
          />
        </div>
      </section>
    </section>
  );
}
