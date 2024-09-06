import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full footer">
      <div className="py-3.5">
        <div className="container">
            <ul className="space-y-1">
              <li>
                <Link href="/celebritys" className="underline">Celebritys</Link>
              </li>
              <li>
                <Link href="/celebritys/male-celebritys" className="underline">Male Celebritys</Link>
              </li>
              <li>
                <Link href="/celebritys/female-celebritys" className="underline">Female Celebritys</Link>
              </li>
              <li>
                <Link href="/celebritys/indian-male-celebritys" className="underline">indian-male-celebritys</Link>
              </li>
              <li>
                <Link href="/celebritys/indian-female-celebritys" className="underline">indian-female-celebritys</Link>
              </li>
              <li>
                <Link href="/celebritys/month-birthday" className="underline">month-birthday</Link>
              </li>
              <li>
                <Link href="/celebritys/today-birthday" className="underline">today-birthday</Link>
              </li>
              <li>
                <Link href="/celebritys/young-celebritys" className="underline">young-celebritys</Link>
              </li>
              <li>
                <Link href="/celebritys/oldest-celebritys" className="underline">oldest-celebritys</Link>
              </li>
              <li>
                <Link href="/celebritys/bollywood-celebritys" className="underline">bollywood-celebritys</Link>
              </li>
              <li>
                <Link href="/celebritys/hollywood-celebritys" className="underline">hollywood-celebritys</Link>
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
