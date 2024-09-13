import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { generateApiRequest } from "~/helper/generateApiRequest";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PAGE_LIMIT = process.env.PAGE_LIMIT;

export async function generateStaticParams() {
  let celebrities = [];

  for (let page = 1; page <= 100; page++) {
    const response = await generateApiRequest(`/person/popular?page=${page}`);
    celebrities = celebrities.concat(response.results || []);
  }

  return celebrities.map((celebrity) => ({
    id: celebrity.id.toString(),
  }));
}


export default async function CelebrityDetail({ params }) {
  const { id } = params;
  let data;

  try {
    const res = await ServerApiHandler(`/api/celebrity/details/${id}`);
    data = await res;
  } catch (error) {
    console.error("Error fetching celebrity details:", error);
    return <p>Failed to load celebrity details. Please try again later.</p>;
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
