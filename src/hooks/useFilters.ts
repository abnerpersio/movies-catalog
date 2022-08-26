import { useState } from 'react';

export function useFilters() {
  const [sortByPopular, setSortByPopular] = useState(null);
  const [filters, setFilters] = useState({});
}
