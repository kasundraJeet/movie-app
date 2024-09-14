import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Pagination } from "@/components/custom";
import MovieBox from "@/movies/components/MovieBox";
import CelebrityCard from "@/celebrity/components/CelebrityCard";
import TvBox from "@/tv-show/components/TvBox";

export async function generateStaticParams() {
  const categories = [
    { category: "people" },
    { category: "celebrity" },
    { category: "movies" },
    { category: "tv-show" },
    { category: "tv-show-this-week" },
    { category: "movies-this-week" },
    { category: "celebrity-this-week" },
    { category: "tv-show-today" },
    { category: "movies-today" },
    { category: "celebrity-today" },
  ];

  return categories;
}


export default async function CelebrityCategory({ params, searchParams }) {
  const { category } = params;

  if (
    category !== "people" &&
    category !== "celebrity" &&
    category !== "movies" &&
    category !== "tv-show" &&
    category !== "tv-show-this-week" &&
    category !== "movies-this-week" &&
    category !== "celebrity-this-week" &&
    category !== "tv-show-today" &&
    category !== "celebrity-today" &&
    category !== "movies-today"
  ) {
    return <p>Category not found.</p>;
  }


  let data;
  let current_page;
  let total_pages;

  try {
    const res = await ServerApiHandler(
      `/api/trending/${category}?page=${searchParams.page || 1}`
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
      <h1 className="text-[5vw] text-center uppercase">{category.replace("-", " ").toUpperCase()}</h1>
      <section className="container py-8 space-y-8">
        <ul className="grid grid-cols-4 gap-4">
          {/* {data.results.map((movie) => (
            <MovieBox movie={movie} key={movie.id} />
          ))} */}
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
