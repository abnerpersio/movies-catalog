import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { GENRES } from '../constants/genres';
import { useFilters } from '../hooks/useFilters';
import MovieService from '../services/MovieService';
import { Genre, Movie } from '../types/movies';

type Data = {
  catalogMovies?: Movie[];
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

  const KEY = 'movieList';

  const { data: catalog } = useQuery(
    [KEY, convertedFilters],
    async () => {
      if (!convertedFilters) return [];

      return (await MovieService.list(convertedFilters))?.data?.results ?? [];
    },
    { enabled: !!convertedFilters },
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
      genres: GENRES,
      catalogMovies: catalog,
      popularMovies,
    }),
    [catalog, popularMovies],
  );

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}
