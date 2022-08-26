import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';

import MovieService from '../services/MovieService';
import { Genre, Movie } from '../types/movies';

type Data = {
  catalogMovies?: Movie[];
  popularMovies?: Movie[];
  genres?: Genre[];
  onNextPage?: () => void;
};

export const DataContext = createContext<Data>({});

const genres: Genre[] = [
  {
    id: 28,
    name: 'Ação',
  },
  {
    id: 12,
    name: 'Aventura',
  },
  {
    id: 16,
    name: 'Animação',
  },
  {
    id: 35,
    name: 'Comédia',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentário',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Família',
  },
  {
    id: 14,
    name: 'Fantasia',
  },
  {
    id: 36,
    name: 'História',
  },
  {
    id: 27,
    name: 'Terror',
  },
  {
    id: 10402,
    name: 'Música',
  },
  {
    id: 9648,
    name: 'Mistério',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Ficção científica',
  },
  {
    id: 10770,
    name: 'Cinema TV',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'Guerra',
  },
  {
    id: 37,
    name: 'Faroeste',
  },
];

type Props = {
  children: ReactNode;
};

export function DataProvider({ children }: Props) {
  const [catalog, setCatalog] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  const listCatalog = useCallback(async (searchPage = 1) => {
    const { results } = (await MovieService.list({ page: searchPage })).data;
    setCatalog((prevState) => [...prevState, ...results]);
  }, []);

  useEffect(() => {
    listCatalog(page);
  }, [listCatalog, page]);

  useEffect(() => {
    async function listPopular() {
      const { results } = (await MovieService.listPopular()).data;
      setPopularMovies(results);
    }

    listPopular();
  }, []);

  const handleNextPage = useCallback(() => setPage((prevState) => prevState + 1), []);

  const value = useMemo(
    () => ({
      genres,
      catalogMovies: catalog,
      popularMovies,
      onNextPage: handleNextPage,
    }),
    [catalog, popularMovies, handleNextPage],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
