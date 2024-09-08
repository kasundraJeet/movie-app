import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";


export default async function CelebrityCategory({ params }) {
  const { category } = params;


  if (category !== "movie" && category !== "tv") {
    return <p>Category not found.</p>;
  }

  let data;
  try {
    const res = await ServerApiHandler(`/api/certification/${category}`);
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


export async function generateStaticParams() {
  return [
    { category: "movie" },
    { category: "tv" },
  ];
}

