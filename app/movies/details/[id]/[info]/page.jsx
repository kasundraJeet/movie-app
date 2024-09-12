import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Pagination } from "@/components/custom";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function MovieDetail({ params, searchParams }) {
  const { id, info } = params;
  let data;
  let current_page;
  let total_pages;

  try {
    const res = await ServerApiHandler(
      `/api/movies/details/${id}/${info}?page=${searchParams.page || 1}`
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
      {total_pages > 1 ? (
        <div className="flex items-center justify-center">
          <Pagination
            currentPage={current_page}
            totalPage={total_pages}
            query="page"
            path={`/movies/${id}/${info}`}
          />
        </div>
      ) : null}
    </section>
  );
}
