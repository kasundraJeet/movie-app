import { ServerApiHandler } from "~/helper/ServerApiHandler";
import { metaTags, additionalMeta } from "~/lib/metadata";
let schema;

export async function generateStaticParams() {
  return [
    { category: "movie" },
    { category: "film" },
    { category: "tv" },
    { category: "tv-show" },
    { category: "television-show" },
  ];
}

export async function generateMetadata({ params }) {
  let data;
  try {
    const res = await ServerApiHandler(`/api/certification/${params.category}`);
    data = await res;

    schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: Object.keys(data).flatMap((key) =>
        data[key].map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Thing",
            name: item.certification,
            description: item.meaning,
          },
        }))
      ),
    };
  } catch (error) {
    throw error;
  }

  return {
    ...additionalMeta,
    ...metaTags,
    title: `${
      params.category.charAt(0).toUpperCase() + params.category.slice(1)
    } Certification`,
  };
}

export default async function CertificationCategory({ params }) {
  const { category } = params;

  if (
    category !== "movie" &&
    category !== "tv" &&
    category !== "film" &&
    category !== "tv-show" &&
    category !== "television-show"
  ) {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
                    <div className="certification--icon">
                      {item.certification}
                    </div>
                    <p className="text-sm">{item.meaning || "-"}</p>
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
