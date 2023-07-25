import apiOptions from "@/types/apiOptions";

export async function getMovieCredit(id: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    apiOptions
  );

  const data = await response.json();

  return data;
}
