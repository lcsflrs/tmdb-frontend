import { apiOptions } from "@/types/apiOptions";

export async function getMovies(page: number, genresString: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?page=${page}&with_genres=${genresString}`,
    apiOptions
  );

  const data = await response.json();

  return data;
}
