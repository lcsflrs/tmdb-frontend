/* eslint-disable @next/next/no-img-element */
import ContentContainer from "@/components/ContentContainer";
import MovieCard from "@/components/MovieCard";
import { getMovieById } from "@/services/get-movie-by-id";
import { Metadata } from "next";

interface MovieProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: MovieProps): Promise<Metadata> => {
  const movie = await getMovieById(Number(params.id));
  return {
    title: `TMDB - ${movie.title}`,
    description: movie.overview,
    keywords: [
      "TMDB",
      "The Movie Database",
      "Filmes",
      "Séries",
      ...movie.genres.map((genre: any) => genre.name),
      movie.title,
      movie.crew.slice(0, 5).map((crew) => crew.name),
      movie.cast.slice(0, 5).map((cast) => cast.name),
    ].join(", "),
    openGraph: {
      title: `${movie.title}`,
      siteName: "TMDB",
      description: movie.overview,
      images: [
        {
          url: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
          width: 342,
          height: 513,
          alt: movie.title,
        },
      ],
    },
  };
};

export default async function Movie({ params }: MovieProps) {
  const movie = await getMovieById(Number(params.id));
  const movieYear = movie.release_date.split("-")[0];
  const formattedDate = new Date(movie.release_date)
    .toLocaleString("pt-BR")
    .split(",")[0];
  const formattedRunTime = `${Math.floor(movie.runtime / 60)}h ${
    movie.runtime % 60
  }m`;

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full py-10 pb-16 md:pb-4 md:py-20 bg-brand-pink-2">
        <ContentContainer className="relative flex flex-col items-center w-full px-4 mt-14 md:flex-row md:px-0 md:items-start md:min-h-[480px]">
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            className="w-48 h-64 md:h-[574px] rounded-lg shadow-lg md:w-96 md:absolute"
          />
          <div className="md:ml-96 md:pl-8">
            <div className="flex flex-col w-full mt-10 md:mt-0 ">
              <h1 className="text-2xl font-bold text-white">
                {movie.title} ({movieYear})
              </h1>
              <div className="flex flex-col w-full md:flex-row md:items-center">
                <p className="mt-1 text-lg text-white md:mt-0 ">
                  {formattedDate}
                </p>
                <p className="hidden text-white md:inline md:mx-2">{`•`}</p>
                <p className="text-lg text-white ">
                  {movie.genres.map((genre: any) => genre.name).join(", ")}
                </p>
                <p className="hidden text-white md:inline md:mx-2">{`•`}</p>
                <p className="text-lg text-white ">{formattedRunTime}</p>
              </div>
            </div>
            {/* <div className="flex">
            <div className="w-12 h-12">
              <CircularProgressbar
                value={movie.vote_average * 10}
                text={`${movie.vote_average * 10}%`}
              />
            </div>
          </div> */}
            <div>
              <h3 className="mt-8 text-xl font-bold text-white">Sinopse</h3>
              <p className="mt-2 text-base font-light text-white">
                {movie.overview}
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 mt-8 ">
              {movie.crew.slice(0, 5).map((crew: any) => {
                return (
                  <div key={crew.id}>
                    <p className="text-base font-bold text-white">
                      {crew.name}
                    </p>
                    <p className="text-sm text-white">{crew.job}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ContentContainer>
      </div>

      <div className="flex flex-col items-center w-full p-4 bg-white ">
        <ContentContainer className="w-full md:mt-32">
          {movie.cast.length > 0 && (
            <>
              <h2 className="text-2xl font-bold">Elenco Original</h2>

              <div className="flex gap-4 pb-8 mt-3 overflow-auto default-scrollbar flex-nowrap">
                {movie.cast.slice(0, 10).map((cast: any) => {
                  return (
                    <div
                      key={cast.id}
                      className="flex flex-col items-center flex-shrink-0 p-2 border border-gray-100 rounded shadow-md"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w342${cast.profile_path}`}
                        alt={cast.name}
                        className="w-40 h-56 rounded "
                      />
                      <p className="w-full mt-4 text-base font-bold text-black">
                        {cast.name}
                      </p>
                      <p className="w-full text-sm text-black">
                        {cast.character}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <h2 className="mt-4 text-2xl font-bold md:mt-8">Trailer</h2>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-auto mt-3 md:max-w-4xl"
          />

          {movie.recommendations.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mt-11">Recomendações</h2>
              <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-5">
                {movie.recommendations.map((recommendation: any) => {
                  return (
                    <MovieCard key={recommendation.id} movie={recommendation} />
                  );
                })}
              </div>
            </>
          )}
        </ContentContainer>
      </div>
    </div>
  );
}
