import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Image, Pagination } from "@/components/custom";

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
            <li className="celebrity--card" key={celebrity.id}>
              <div className="image-wrapper">
                <Image
                  src={
                    celebrity.profile_path
                      ? `/t/p/w500${celebrity.profile_path}`
                      : null
                  }
                  alt={`${celebrity.name} Image`}
                />
              </div>
              <div className="content">
                <h2>
                  {celebrity.name}
                  {celebrity.name.toLowerCase() !==
                    celebrity.original_name.toLowerCase() &&
                    ` (${celebrity.original_name})`}
                </h2>
                <p className="">
                  {celebrity.known_for.map((known, index) => (
                    <span key={known.id}>
                      {known.media_type === "tv" ? known.name : known.title}
                      {index < celebrity.known_for.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <Pagination currentPage={current_page} totalPage={total_pages} />
        </div>
      </section>
    </section>
  );
}
