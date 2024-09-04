import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full footer">
      <div className="py-3.5">
        <div className="container">

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
