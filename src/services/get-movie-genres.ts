import { apiOptions } from "@/types/apiOptions";

export async function getGenres() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=pt`,
    apiOptions
  );

  const data = await response.json();

  return data.genres;
}
