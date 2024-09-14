import { Image } from "@/components/custom";
import Link from "next/link";

export default function MovieBox({ tv }) {
  return (
    <li className="movie--box">
      <div className="image-wrapper">
        <Image
          src={tv.poster_path ? `/t/p/w500${tv.poster_path}` : null}
          alt={`${tv.original_name} Image`}
        />
      </div>
      <div className="content">
        <Link href={`/tv-show/details/${tv.id}`}>
          {tv.original_name}
        </Link>
      </div>
    </li>
  );
}
