import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Pagination } from "@/components/custom";
import TvBox from "./components/TvBox";

export default async function CelebrityCategory({ searchParams }) {
    let data;
    let current_page;
    let total_pages;

  try {
    const res = await ServerApiHandler(
      `/api/tv-show?page=${searchParams.page || 1}`
    );
    data = await res;
    total_pages = data.total_pages;
    current_page = data.page;
  } catch (error) {
    return <p>Failed to load celebrities. Please try again later.</p>;
  }

  if (!data) {
    return <p>No data found.</p>;
  }

  return (
    <section>
    <h1 className="text-[5vw] text-center uppercase">Tv show</h1>
    <section className="container py-8 space-y-8">
      <ul className="grid grid-cols-4 gap-4">
        {data.results.map((tv) => (
          <TvBox tv={tv} key={tv.id} />
        ))}
      </ul>
      <div className="flex items-center justify-center">
        <Pagination currentPage={current_page} totalPage={total_pages} query="page" path="/tv-show" />
      </div>
    </section>
  </section>
  );
}
