import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Image } from "@/components/custom";

export default async function Celebrity() {
  const res = await ServerApiHandler(`/api/celebrity`);
  const data = await res;
  const total_pages = data.total_pages;
  const current_page = data.page;
  const total_results = data.total_results;

  return (
    <section>
      <h1>Popular Celebrities</h1>
      <section className="container py-8">
        <ul className="grid grid-cols-4 gap-4">
          {data.results.map((celebrity) => (
            <li className="celebrity--card" key={celebrity.id}>
              <div className="image-wrapper">
                <Image
                  src={`/t/p/w500${celebrity.profile_path}`}
                  alt={`${celebrity.name} Image`}
                />
              </div>
              <div>
                <h2>
                  {celebrity.name}{" "}
                  {celebrity.name.toLowerCase() !==
                  celebrity.original_name.toLowerCase()
                    ? `(${celebrity.original_name})`
                    : null}{" "}
                </h2>
                <p>{celebrity.known_for_department}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
