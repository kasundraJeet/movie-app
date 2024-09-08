import { openGraph , metaTags } from "~/lib/metadata";

export const metadata = {
    ...metaTags,
    title: 'Blog',
  openGraph: {
    ...openGraph,
    title: "Home",
  },
};

export default function CertificationHome() {
  return <section className="container"></section>;
}
