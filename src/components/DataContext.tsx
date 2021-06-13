import React, { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes, { InferProps } from 'prop-types';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2E2MDc5ZDM3N2JhMGExODU4MDc3YWZjMDVkZDFmMyIsInN1YiI6IjYwYzQ0NDI2ZDA0ZDFhMDAyOTk1MTI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p3mk4AJk_5nt7Lor-qi1byDdi4LwUaS0hZiLvz98AyA'

interface IDataContext {
  catalogMovies?: any[];
  popularMovies?: any[];
  onNextPage?: Function; 
}

const DataContext = createContext<IDataContext>({});

function DataProvider(props: InferProps<typeof DataProvider.propTypes>) {
  const [catalogMovies, setCatalogMovies] = useState<any[]>([]);
  const [popularMovies, setPopularMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1)

  const getCatalogMovies = useCallback(async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) 

    const json = await response.json()
    const { results } = json;
    setCatalogMovies(results);
  }, []);

  const getNextPageData = async () => {
    setPage((prevState) => prevState + 1);

    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) 

    const json = await response.json()
    const { results } = json;
    setCatalogMovies((prevState) => [...prevState, ...results]);
    return true;
  }

  const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) 

    const json = await response.json()
    const { results } = json;
    setPopularMovies(results)
  }

  useEffect(() => {
    getCatalogMovies()
    getPopularMovies()
  }, [getCatalogMovies])

  return (
    <DataContext.Provider 
      value={{ 
        catalogMovies,
        popularMovies,
        onNextPage: getNextPageData, 
      }}
    >
      {props.children}
    </DataContext.Provider>  
  )
}

DataProvider.propTypes = {
  children: PropTypes.node
}

export { DataProvider, DataContext };
