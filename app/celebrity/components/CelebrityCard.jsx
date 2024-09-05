import { Image } from "@/components/custom";

export default function CelebrityCard({ celebrity }) {
  return (
    <li className="celebrity--card">
      <div className="image-wrapper">
        <Image
          src={
            celebrity.profile_path ? `/t/p/w500${celebrity.profile_path}` : null
          }
          alt={`${celebrity.name} Image`}
        />
      </div>
      <div className="content">
        <h2>
          {celebrity.name}
          {celebrity.name.toLowerCase() !==
            celebrity.original_name.toLowerCase() &&
            ` (${celebrity.original_name})`}
        </h2>
        <p className="">
          {celebrity.known_for.map((known, index) => (
            <span key={known.id}>
              {known.media_type === "tv" ? known.name : known.title}
              {index < celebrity.known_for.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
    </li>
  );
}
