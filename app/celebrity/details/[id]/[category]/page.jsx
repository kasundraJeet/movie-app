import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export default async function CelebrityDetail({ params }) {
  const { id , category } = params;
  let data;

  try {
    const res = await ServerApiHandler(`/api/celebrity/details/${id}/${category}`);
    data = await res;
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
