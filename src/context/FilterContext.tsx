import { ReactNode, createContext, useCallback, useMemo, useState } from 'react';

import { FormatedMovieFilter, MovieFilter } from '../types/filter';
import { FilterConverter } from '../utils/FIlterConverter';

type Data = {
  filters?: MovieFilter;
  convertedFilters?: FormatedMovieFilter;
  // eslint-disable-next-line no-unused-vars
  updateFilters?: (newFilters: Partial<MovieFilter>) => void;
  handlePrevPage?: () => void;
  handleNextPage?: () => void;
};

export const FilterContxt = createContext<Data>({});

type Props = {
  children: ReactNode;
};

export function FilterProvider({ children }: Props) {
  const [filters, setFilters] = useState<MovieFilter>({ page: 1 });

  const updateFilters = useCallback(
    (newFilters: Partial<MovieFilter>) =>
      setFilters((prevState) => ({ ...prevState, ...newFilters })),
    [],
  );

  const handleNextPage = useCallback(
    () =>
      setFilters((prevState) => ({
        ...prevState,
        page: prevState.page + 1,
      })),
    [],
  );

  const handlePrevPage = useCallback(
    () =>
      setFilters((prevState) => ({
        ...prevState,
        page: prevState.page <= 1 ? 1 : prevState.page - 1,
      })),
    [],
  );

  const value = useMemo(
    () => ({
      filters,
      convertedFilters: FilterConverter.convert(filters),
      updateFilters,
      handlePrevPage,
      handleNextPage,
    }),
    [filters, updateFilters, handlePrevPage, handleNextPage],
  );

  return <FilterContxt.Provider value={value}>{children}</FilterContxt.Provider>;
}
