import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full footer">
      <div className="py-3.5">
        <div className="container">
            <ul className="space-y-1">
              <li>
                <Link href="/celebrity" className="underline">Celebrity</Link>
              </li>
              <li>
                <Link href="/celebrity/male-celebrity" className="underline">Male Celebrity</Link>
              </li>
              <li>
                <Link href="/celebrity/female-celebrity" className="underline">Female Celebrity</Link>
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
