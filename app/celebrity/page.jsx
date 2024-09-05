import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Pagination } from "@/components/custom";
import CelebrityCard from "./components/CelebrityCard";

export default async function Celebrity({ searchParams }) {
  let data;
  let current_page;
  let total_pages;

  try {
    const res = await ServerApiHandler(
      `/api/celebrity?page=${searchParams.page || 1}`
    );
    data = await res;
    total_pages = data.total_pages;
    current_page = data.page;
  } catch (error) {
    return <p>Failed to load celebrities. Please try again later.</p>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <p>No celebrities found.</p>;
  }

  return (
    <section>
      <h1>Popular Celebrities</h1>
      <section className="container py-8 space-y-8">
        <ul className="grid grid-cols-4 gap-4">
          {data.results.map((celebrity) => (
            <CelebrityCard celebrity={celebrity} key={celebrity.id} />
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <Pagination currentPage={current_page} totalPage={total_pages} query="page" path="/celebrity" />
        </div>
      </section>
    </section>
  );
}
