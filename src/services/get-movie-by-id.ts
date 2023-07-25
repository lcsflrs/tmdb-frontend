import { IMovieDetails } from "@/types";
import { apiOptionsServerSide } from "@/types/apiOptions";
import { getMovieCredit } from "./get-movie-credits";
import { getMovieRecommendation } from "./get-movie-recommendations";

export async function getMovieById(id: number): Promise<IMovieDetails> {
  const [credits, recommendations, response] = await Promise.all([
    getMovieCredit(id),
    getMovieRecommendation(id),
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=pt`,
      apiOptionsServerSide
    ),
  ]);

  let data = await response.json();

  data = {
    ...data,
    ...credits,
    recommendations: recommendations.results,
  } as IMovieDetails;

  return data;
}
