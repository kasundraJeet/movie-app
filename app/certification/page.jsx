import { openGraphImage , metaTags } from "~/lib/metadata";

export const metadata = {
    ...metaTags,
    title: 'Blog',
  openGraph: {
    ...openGraphImage,
    title: "Home",
  },
};

export default function CertificationHome() {
  return <section className="container"></section>;
}
