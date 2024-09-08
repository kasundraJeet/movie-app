import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full footer">
      <div className="py-3.5">
        <div className="container flex gap-12">
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
              <li>
                <Link href="/celebrity/indian-male-celebrity" className="underline">indian-male-celebrity</Link>
              </li>
              <li>
                <Link href="/celebrity/indian-female-celebrity" className="underline">indian-female-celebrity</Link>
              </li>
              <li>
                <Link href="/celebrity/month-birthday" className="underline">month-birthday</Link>
              </li>
              <li>
                <Link href="/celebrity/today-birthday" className="underline">today-birthday</Link>
              </li>
              <li>
                <Link href="/celebrity/young-celebrity" className="underline">young-celebrity</Link>
              </li>
              <li>
                <Link href="/celebrity/oldest-celebrity" className="underline">oldest-celebrity</Link>
              </li>
              <li>
                <Link href="/celebrity/bollywood-celebrity" className="underline">bollywood-celebrity</Link>
              </li>
              <li>
                <Link href="/celebrity/hollywood-celebrity" className="underline">hollywood-celebrity</Link>
              </li>
            </ul>
            <ul className="space-y-1">
              <li>
                <Link href="/movies" className="underline">Movies</Link>
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
