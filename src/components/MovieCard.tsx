/* eslint-disable @next/next/no-img-element */
import { IMovie } from "@/types";
import Link from "next/link";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const movieDate = new Date(movie.release_date);

  const day = movieDate.getDate().toString().padStart(2, "0");
  const month = movieDate
    .toLocaleString("pt-BR", { month: "short" })
    .toUpperCase()
    .replaceAll(".", "");
  const year = movieDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return (
    <Link
      href={`/${movie.id}`}
      className="flex flex-col items-center md:flex-shrink-0"
      style={{
        maxWidth: 176,
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        // width={176}
        // height={264}
        alt={movie.title}
        className="h-64 rounded w-44"
      />
      <div className="flex flex-col w-full">
        <p className="mt-2 text-sm font-bold text-left text-black">
          {movie.title}
        </p>
        <p className="mt-1 text-xs font-bold text-left text-gray-600">
          {formattedDate}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
