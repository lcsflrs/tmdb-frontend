import { apiOptionsServerSide } from "@/types/apiOptions";

export async function getMovieRecommendation(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations`,
    apiOptionsServerSide
  );

  const data = await response.json();

  return data;
}
