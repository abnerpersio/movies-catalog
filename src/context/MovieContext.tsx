import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { useFilters } from '../hooks/useFilters';
import MovieService from '../services/MovieService';
import { Genre, Movie } from '../types/movies';

type Data = {
  catalog?: Movie[];
  popularMovies?: Movie[];
  genres?: Genre[];
};

export const MovieContext = createContext<Data>({});

type Props = {
  children: ReactNode;
};

export function MovieProvider({ children }: Props) {
  const { convertedFilters } = useFilters();

  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const MOVIE_KEY = 'movieList';
  const GENRE_KEY = 'genreList';

  const { data: catalog } = useQuery(
    [MOVIE_KEY, convertedFilters],
    async () => {
      if (!convertedFilters) return [];
      return (await MovieService.list(convertedFilters))?.data?.results ?? [];
    },
    { enabled: !!convertedFilters },
  );

  const { data: genres } = useQuery(
    [GENRE_KEY],
    async () => (await MovieService.listGenres())?.data?.genres ?? [],
  );

  useEffect(() => {
    async function listPopular() {
      const { results } = (await MovieService.listPopular()).data;
      setPopularMovies(results);
    }

    listPopular();
  }, []);

  const value = useMemo(
    () => ({
      genres,
      catalog,
      popularMovies,
    }),
    [catalog, popularMovies, genres],
  );

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}
