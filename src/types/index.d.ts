export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  id: number;
  name: string;
}

interface IMovieDetails {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  runtime: number;
  overview: string;
  crew: { id: number; name: string; job: string }[];
  cast: { id: number; name: string; profile_path: string; character: string }[];
  vote_average: number;
  recommendations: Movie[];
  backdrop_path: string;
}
