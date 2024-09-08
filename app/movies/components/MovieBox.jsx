import { Image } from "@/components/custom";
import Link from "next/link";

export default function MovieBox({ movie }) {
  return (
    <li className="movie--box">
      <div className="image-wrapper">
        <Image
          src={movie.poster_path ? `/t/p/w500${movie.poster_path}` : null}
          alt={`${movie.original_title} Image`}
        />
      </div>
      <div className="content">
        <Link href={`/movies/details/${movie.id}`}>
          {movie.title}
          {movie.title.toLowerCase() !== movie.original_title.toLowerCase() &&
            ` (${movie.original_title})`}
        </Link>
        <p className="">{movie.release_date}</p>
      </div>
    </li>
  );
}
