import { ServerApiHandler } from "~/helper/ServerApiHandler";

export default async function CelebrityDetail({ params }) {
  const { id } = params;
  let data;

  try {
    const res = await ServerApiHandler(
      `/api/celebrity/details/${id}`
    );
    data = await res;
  } catch (error) {
    return <p>Failed to load celebrities. Please try again later.</p>;
  }

  if (!data) {
    return <p>No data found.</p>;
  }

  return <h1>this is id page</h1>;
}
