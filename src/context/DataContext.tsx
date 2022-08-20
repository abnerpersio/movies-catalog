import { createContext, useState, useEffect, useCallback, ReactNode } from 'react';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2E2MDc5ZDM3N2JhMGExODU4MDc3YWZjMDVkZDFmMyIsInN1YiI6IjYwYzQ0NDI2ZDA0ZDFhMDAyOTk1MTI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p3mk4AJk_5nt7Lor-qi1byDdi4LwUaS0hZiLvz98AyA';

type Genre = {
  id: number;
  name: string;
};

interface IDataContext {
  catalogMovies?: any[];
  popularMovies?: any[];
  genres?: Genre[];
  onNextPage?: Function;
}

export const DataContext = createContext<IDataContext>({});

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

export function DataProvider(props: Props) {
  const [catalogMovies, setCatalogMovies] = useState<any[]>([]);
  const [popularMovies, setPopularMovies] = useState<[]>([]);
  const [page, setPage] = useState(1);

  const getCatalogMovies = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${page}&language=pt-BR`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await response.json();
    const { results } = json;
    setCatalogMovies(results);
  }, []);

  function handleNextPage() {
    setPage((prevState) => prevState + 1);
  }

  const getNextPageData = useCallback(async (page) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${page}&language=pt-BR`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await response.json();
    const { results } = json;
    setCatalogMovies((prevState) => [...prevState, ...results]);
    return true;
  }, []);

  const getPopularMovies = useCallback(async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=pt-BR`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json();
    const { results } = json;
    setPopularMovies(results);
  }, []);

  useEffect(() => {
    getNextPageData(page);
  }, [page, getNextPageData]);

  useEffect(() => {
    getCatalogMovies();
    getPopularMovies();
  }, [getPopularMovies, getCatalogMovies]);

  return (
    <DataContext.Provider
      value={{
        genres,
        catalogMovies,
        popularMovies,
        onNextPage: handleNextPage,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
