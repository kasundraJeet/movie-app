import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const API = process.env.API_DOMAIN;

export async function generateStaticParams() {
  const API_KEY = process.env.API_TOKEN;

  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  };

  try {
    const response = await fetch(`${API}/person/popular?page=1`, { headers });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const celebrities = data.results || [];

    return celebrities.map((celebrity) => ({
      id: celebrity.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching celebrities:", error);
    return [];
  }
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
