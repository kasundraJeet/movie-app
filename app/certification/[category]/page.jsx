import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function CertificationCategory({ params }) {
  const { category } = params;

  if (category !== "movie" && category !== "tv") {
    return <p>Category not found.</p>;
  }

  let data;
  try {
    const res = await ServerApiHandler(`/api/certification/${category}`);
    data = await res;
  } catch (error) {
    return <p>Failed to load certifications. Please try again later.</p>;
  }

  if (!data) {
    return <p>No data found.</p>;
  }

  return (
    <section className="space-y-12 py-4">
      <h1 className="text-[5vw] text-center uppercase">
        {category} Certification
      </h1>
      <section className="container">
        <ul className="space-y-10">
          {Object.keys(data).map((key) => (
            <li key={key} className="border border-solid border-vibrantCoral">
              <div className="border-b border-solid border-vibrantCoral p-4">
                <h4 className="text-xl uppercase font-bold">**{key}</h4>
              </div>
              <ul className="space-y-2 divide-y divide-vibrantCoral">
                {data[key].map((item, i) => (
                  <li key={`${key}-${i}`} className="certification--box">
                    <Box item={item} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export async function generateStaticParams() {
  return [{ category: "movie" }, { category: "tv" }];
}

function Box({ item }) {
  return (
    <>
      <div className="certification--icon">{item.certification}</div>
      <p className="text-sm">{item.meaning || "-"}</p>
    </>
  );
}
