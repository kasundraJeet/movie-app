import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Pagination } from "@/components/custom";
import MovieBox from "@/movies/components/MovieBox";
import CelebrityCard from "@/celebrity/components/CelebrityCard";
import TvBox from "@/tv-show/components/TvBox";

export async function generateStaticParams() {
  const categories = [
    "people",
    "celebrity",
    "movies",
    "tv-show",
    "tv-show-this-week",
    "movies-this-week",
    "celebrity-this-week",
    "tv-show-today",
    "movies-today",
    "celebrity-today",
  ];

  return categories.map((category) => ({ category }));
}

export default async function CelebrityCategory({ params, searchParams }) {
  const { category } = params;
  const validCategories = [
    "people",
    "celebrity",
    "movies",
    "tv-show",
    "tv-show-this-week",
    "movies-this-week",
    "celebrity-this-week",
    "tv-show-today",
    "celebrity-today",
    "movies-today",
  ];

  if (!validCategories.includes(category)) {
    return <p>Category not found.</p>;
  }

  let data, current_page, total_pages;

  try {
    const res = await ServerApiHandler(
      `/api/trending/${category}?page=${searchParams.page || 1}`
    );
    data = res;
    total_pages = data.total_pages;
    current_page = data.page;
  } catch (error) {
    return <p>Failed to load data. Please try again later.</p>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <p>No data found.</p>;
  }

  const isMovieCategory = [
    "movies",
    "movies-today",
    "movies-this-week",
  ].includes(category);

  const isCelebrityCategory = [
    "people",
    "celebrity",
    "celebrity-today",
    "celebrity-this-week",
  ].includes(category);

  const isTvCategory = [
    "tv-show",
    "tv-show-this-week",
    "tv-show-today",
  ].includes(category);

  return (
    <section>
      <h1 className="text-[5vw] text-center uppercase">
        {category.replace("-", " ").toUpperCase()}
      </h1>
      <section className="container py-8 space-y-8">
        <ul className="grid grid-cols-4 gap-4">
          {isMovieCategory &&
            data.results.map((movie) => (
              <MovieBox movie={movie} key={movie.id} />
            ))}

          {isCelebrityCategory &&
            data.results.map((celebrity) => (
              <CelebrityCard celebrity={celebrity} key={celebrity.id} />
            ))}

          {isTvCategory &&
            data.results.map((tv) => <TvBox tv={tv} key={tv.id} />)}
        </ul>
        <div className="flex items-center justify-center">
          <Pagination
            currentPage={current_page}
            totalPage={total_pages}
            query="page"
            path={`/trending/${category}`}
          />
        </div>
      </section>
    </section>
  );
}
