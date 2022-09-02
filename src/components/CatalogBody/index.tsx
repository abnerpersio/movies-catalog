import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useFilters } from '../../hooks/useFilters';
import { useMovies } from '../../hooks/useMovies';
import { MovieCard } from '../MovieCard';
import { GridIcon } from '../icons/grid';
import { ListIcon } from '../icons/list';
import {
  Button,
  CenterButton,
  Container,
  DarkButton,
  FilterBar,
  MoviesList,
  Select,
} from './styles';

export function CatalogBody() {
  const { t } = useTranslation();
  const { filters, updateFilters, handleNextPage } = useFilters();
  const { catalogMovies, genres } = useMovies();

  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const handleFilterByCategory = useCallback(
    (category: string) => {
      if (!updateFilters) return;
      updateFilters({ genres: category ? [category] : undefined });
    },
    [updateFilters],
  );

  const handleOrderByPopular = useCallback(() => {
    if (!updateFilters) return;

    updateFilters({
      orderBy: filters?.orderBy === 'popularity' ? undefined : 'popularity',
    });
  }, [updateFilters, filters?.orderBy]);

  function handleChangeView() {
    setViewType((prevState) => (prevState === 'list' ? 'grid' : 'list'));
  }

  const orderByPopular = useMemo(() => filters?.orderBy === 'popularity', [filters]);

  return (
    <Container>
      <FilterBar>
        <Select
          onChange={(e) => handleFilterByCategory(e.target.value)}
          placeholder={t('titles.placeholder.by_gender')}
          defaultValue=""
        >
          <option value="">{t('titles.placeholder.by_gender')}</option>
          {genres?.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Select>

        <Button className={orderByPopular ? 'active' : ''} onClick={handleOrderByPopular}>
          {t('titles.populars')}
        </Button>

        <DarkButton onClick={handleChangeView}>
          {viewType === 'list' ? (
            <>
              <ListIcon /> <span>{t('titles.list_view')}</span>
            </>
          ) : (
            <>
              <GridIcon /> <span>{t('titles.grid_view')}</span>
            </>
          )}
        </DarkButton>
      </FilterBar>

      <MoviesList>
        {(catalogMovies ?? []).map((movie) => (
          <MovieCard
            viewType={viewType}
            key={movie.id}
            id={movie.id}
            image={movie.poster_path}
            title={movie.title}
            categories={movie.genre_ids}
            description={movie.overview}
            rating={movie.vote_average}
          />
        ))}
      </MoviesList>

      <CenterButton onClick={() => handleNextPage && handleNextPage()}>
        {t('titles.load_more')}
      </CenterButton>
    </Container>
  );
}
