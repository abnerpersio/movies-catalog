import { useContext } from 'react';

import { MovieContext } from '../context/MovieContext';

export function useMovies() {
  return useContext(MovieContext);
}
