import { useContext } from 'react';

import { FilterContxt } from '../context/FilterContext';

export function useFilters() {
  return useContext(FilterContxt);
}
