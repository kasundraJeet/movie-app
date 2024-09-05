import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Pagination } from "@/components/custom";
import CelebrityCard from "./components/CelebrityCard";

export default async function Celebrity() {
  let data;

  try {
    const res = await ServerApiHandler(`/api/celebrity`);
    data = await res;
    var total_pages = data.total_pages;
    var current_page = data.page;
    var total_results = data.total_results;
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
          <Pagination currentPage={current_page} totalPage={total_pages} />
        </div>
      </section>
    </section>
  );
}
