"use client";
// TODO remover depois e passar diretamente para o componente de filtro

import ContentContainer from "@/components/ContentContainer";
import FilterButton from "@/components/FilterButton";
import MovieCard from "@/components/MovieCard";
import FilterButtonSkeleton from "@/components/skeletons/FilterButtonSkeleton";
import MovieCardSkeleton from "@/components/skeletons/MovieCardSkeleton";
import { useFilterStore } from "@/context/filterContext";
import { IGenre, IMovie } from "@/types";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getGenres } from "../services/get-movie-genres";
import { getMovies } from "../services/get-movies";

export default function Home() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);

  const { selectedGenresId, setSelectedGenresId } = useFilterStore();

  const [loadingGenres, setLoadingGenres] = useState(true);
  const [loadingMovies, setLoadingMovies] = useState(true);

  const handleGenreClick = (genre: IGenre) => {
    if (selectedGenresId.includes(genre.id)) {
      setSelectedGenresId(selectedGenresId.filter((id) => id !== genre.id));
    } else {
      setSelectedGenresId([...selectedGenresId, genre.id]);
    }
    setPage(1);
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };
  useEffect(() => {
    const fetchMovies = async () => {
      const genresString = selectedGenresId.join("|");
      const data = await getMovies(page, genresString);
      setMovies(data.results);
      setLoadingMovies(false);
    };
    try {
      setLoadingMovies(true);
      fetchMovies();
    } catch (err) {
      console.log(err);
    }
  }, [page, selectedGenresId]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getGenres();

      setGenres(genres);
      setLoadingGenres(false);
    };
    try {
      setLoadingGenres(true);
      fetchGenres();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Banner  */}
      <div className="flex flex-col items-center w-full py-10 md:py-20 bg-brand-pink-2">
        <ContentContainer className="mt-14">
          <div>
            <h1 className="max-w-xs ml-4 text-2xl font-bold text-left text-white md:max-w-4xl md:mx-auto md:text-5xl md:text-center">
              Milhões de filmes, séries e pessoas para descobrir. Explore já.
            </h1>

            {/* Filtros */}
            <p className="mt-10 ml-4 text-sm font-bold text-white uppercase md:text-center md:mx-auto">
              Filtre Por:
            </p>
            <div className="flex flex-wrap w-full gap-3 px-4 mt-2 md:mt-4 md:px-12 md:justify-center">
              {loadingGenres &&
                Array.from({ length: 10 }).map((_, index) => {
                  return <FilterButtonSkeleton key={index} />;
                })}
              {genres.map((genre, index) => {
                return (
                  <FilterButton
                    text={genre.name}
                    onClick={() => handleGenreClick(genre)}
                    active={selectedGenresId.includes(genre.id)}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </ContentContainer>
      </div>
      <ContentContainer className="grid grid-cols-2 gap-4 px-4 md:grid-cols-5 md:gap-10 md:px-20 mt-7">
        {loadingMovies &&
          Array.from({ length: 20 }).map((_, index) => {
            return <MovieCardSkeleton key={index} />;
          })}
        {!loadingMovies &&
          (movies ?? []).map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </ContentContainer>
      <ContentContainer>
        {!loadingMovies && (
          <ReactPaginate
            breakLabel="..."
            nextLabel={page < 500 ? ">" : null}
            previousLabel={page > 1 ? "<" : null}
            onPageChange={handlePageChange}
            pageRangeDisplayed={5}
            pageCount={500}
            className="flex items-center justify-center w-full gap-8 mt-16 mb-20 "
            pageClassName="text-base font-bold text-brand-purple-1"
            activeClassName="text-base font-bold  rounded-full underline "
            nextClassName="text-base font-bold text-brand-purple-1"
            previousClassName="text-base font-bold text-brand-purple-1"
            initialPage={page - 1}
            marginPagesDisplayed={0}
          />
        )}
      </ContentContainer>
    </div>
  );
}
