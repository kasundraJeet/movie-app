import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function CelebrityCategory({ searchParams }) {
    let data;
    let current_page;
    let total_pages;

  try {
    const res = await ServerApiHandler(
      `/api/movies?page=${searchParams.page || 1}`
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
    <section className="container">
      <SyntaxHighlighter language="json" style={atomDark}>
        {JSON.stringify(data, null, 2)}
      </SyntaxHighlighter>
    </section>
  );
}
