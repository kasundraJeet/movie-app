import { ServerApiHandler } from "~/helper/ServerApiHandler";

export default async function Celebrity() {
  const res = await ServerApiHandler(`/api/celebrity`);
  const data = await res;

  return (
    <section>
      <h1>Popular Celebrities</h1>
      <ul>
        {data.results.map((celebrity) => (
          <li key={celebrity.id}>
            <h2>{celebrity.name}</h2>
            <p>{celebrity.known_for_department}</p>
            {/* <img
                src={`https://image.tmdb.org/t/p/w200${celebrity.profile_path}`}
                alt={celebrity.name}
              /> */}
          </li>
        ))}
      </ul>
    </section>
  );
}
