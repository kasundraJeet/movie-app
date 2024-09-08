import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function CelebrityCategory({ params, searchParams }) {
  const { category } = params;
  let data;

  try {
    const res = await ServerApiHandler(
      `/api/movies/${category}?page=${searchParams.page || 1}`
    );
    data = await res;

  } catch (error) {
    return <p>Failed to load celebrities. Please try again later.</p>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <p>No Data found.</p>;
  }

  return (
    <section className="container">
    <SyntaxHighlighter language="json" style={atomDark}>
      {JSON.stringify(data, null, 2)}
    </SyntaxHighlighter>
  </section>
  );
}
