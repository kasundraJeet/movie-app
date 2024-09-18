import Link from "next/link";
import Image from "next/image"


const footerLinks = [
  {
    celebrity: {
      title: "Celebrity",
      links: [
        { link: "/celebrity", title: "Celebrity" },
        { link: "/celebrity/male-celebrity", title: "Male Celebrity" },
        { link: "/celebrity/female-celebrity", title: "Female Celebrity" },
        {
          link: "/celebrity/indian-male-celebrity",
          title: "Indian Male Celebrity",
        },
        {
          link: "/celebrity/indian-female-celebrity",
          title: "Indian Female Celebrity",
        },
        { link: "/celebrity/month-birthday", title: "Month Birthday" },
        { link: "/celebrity/today-birthday", title: "Today Birthday" },
        { link: "/celebrity/young-celebrity", title: "Young Celebrity" },
        { link: "/celebrity/oldest-celebrity", title: "Oldest Celebrity" },
        {
          link: "/celebrity/bollywood-celebrity",
          title: "Bollywood Celebrity",
        },
        {
          link: "/celebrity/hollywood-celebrity",
          title: "Hollywood Celebrity",
        },
      ],
    },
    movies: {
      title: "Movies",
      links: [
        { link: "/movies", title: "Movies" },
        { link: "/movies/popular", title: "Popular Movies" },
        { link: "/movies/top-rated", title: "Top Rated Movies" },
        { link: "/movies/new-release", title: "New Release Movies" },
      ],
    },
    tv_show: {
      title: "TV Show",
      links: [
        { link: "/tv-show", title: "TV Show" },
        { link: "/tv-show/popular", title: "Popular TV Shows" },
        { link: "/tv-show/top-rated", title: "Top Rated TV Shows" },
      ],
    },
    certification: {
      title: "Certification",
      links: [
        { link: "/certification", title: "Certification" },
        { link: "/certification/movie", title: "Certification Movie" },
        { link: "/certification/tv", title: "Certification TV" },
      ],
    },
    trending: {
      title: "Trending",
      links: [
        { link: "/trending/movies", title: "Trending Movies" },
        { link: "/trending/celebrity", title: "Trending Celebrity" },
        { link: "/trending/tv-show", title: "Trending TV Shows" },
      ],
    },
  },
];

const Footer = () => {
  return (
    <footer className="w-full footer">
      <div className="py-3.5">
        <div className="container">
          <ul className="w-full grid grid-cols-4 gap-12">
            <li className="w-full space-y-3">
              <div className="space-y-1">
                <h3>JEETxTMDB</h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda esse natus quae tempore temporibus. Temporibus
                  exercitationem recusandae natus?
                </p>
              </div>
              <ul>
                <li>
                  <Link href="/" className="footer-social-icon">
                    <Image src="/assets/logos/github_logo.png" alt="github logo" width={90} height={52} />
                  </Link>
                </li>
              </ul>
            </li>
            <li className="col-span-3">
              <ul className="grid grid-cols-4">
                <li>
                  <div className="space-y-1.5">
                    <ListTitle title={footerLinks[0].movies.title} />
                    <ul className="space-y-0.5">
                      {footerLinks[0].movies.links.map((item, index) => (
                        <li key={index}>
                          <AchorLink href={item.link} title={item.title} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="space-y-1.5">
                    <ListTitle title={footerLinks[0].celebrity.title} />
                    <ul className="space-y-0.5">
                      {footerLinks[0].celebrity.links.map((item, index) => (
                        <li key={index}>
                          <AchorLink href={item.link} title={item.title} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="space-y-9">
                  <div className="space-y-1.5">
                    <ListTitle title={footerLinks[0].trending.title} />
                    <ul className="space-y-0.5">
                      {footerLinks[0].trending.links.map((item, index) => (
                        <li key={index}>
                          <AchorLink href={item.link} title={item.title} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-1.5">
                    <ListTitle title={footerLinks[0].certification.title} />
                    <ul className="space-y-0.5">
                      {footerLinks[0].certification.links.map((item, index) => (
                        <li key={index}>
                          <AchorLink href={item.link} title={item.title} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="space-y-1.5">
                    <ListTitle title={footerLinks[0].tv_show.title} />
                    <ul className="space-y-0.5">
                      {footerLinks[0].tv_show.links.map((item, index) => (
                        <li key={index}>
                          <AchorLink href={item.link} title={item.title} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-3">
        <div className="container">
          <div className="flex items-center justify-between w-full">
            <p className="text-base text-paleGray">
              This site uses data from{" "}
              <Link href="http://themoviedb.org" className="underline">
                The Movie Database (TMDb).
              </Link>{" "}
              All rights reserved to TMDb.
            </p>
            <p className="text-base">
              Creted By{" "}
              <Link href="http://jeetkasundra.com" className="underline">
                Jeet Kasundra.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

function AchorLink({ href, title }) {
  return (
    <Link href={href} className="footer-link">
      {title}
    </Link>
  );
}

function ListTitle({ title }) {
  return <h5 className="footer-list-title">{title}</h5>;
}
