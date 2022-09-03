import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useFilters } from '../../hooks/useFilters';
import { useMovies } from '../../hooks/useMovies';
import { Button } from '../Button';
import { EllipsePulsing } from '../EllipsePulsing';
import { Heading } from '../Heading';
import { MovieCard } from '../MovieCard';
import { Select } from '../Select';
import { GridIcon } from '../icons/grid';
import { ListIcon } from '../icons/list';
import { Container } from './styles';

export function Catalog() {
  const { t } = useTranslation();
  const { filters, updateFilters, handleNextPage, handlePrevPage } = useFilters();
  const { catalog, genres } = useMovies();

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
    <Container id="catalog">
      <section className="catalog-header">
        <Heading>
          <EllipsePulsing />

          <h4>
            <span className="bold">{t('titles.catalog').toUpperCase()}</span>{' '}
            {t('titles.complete').toUpperCase()}
          </h4>
        </Heading>
      </section>

      <section className="catalog-body">
        <div className="filter-bar">
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

          <Button active={orderByPopular} onClick={handleOrderByPopular}>
            {t('titles.populars')}
          </Button>

          <Button variant="dark" className="hide-mobile" onClick={handleChangeView}>
            {viewType === 'list' ? (
              <>
                <ListIcon /> <span>{t('titles.list_view')}</span>
              </>
            ) : (
              <>
                <GridIcon /> <span>{t('titles.grid_view')}</span>
              </>
            )}
          </Button>
        </div>

        <div className="movies-list">
          {(catalog ?? []).map((movie) => (
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
        </div>

        <div className="controls">
          <Button hoverTransition onClick={() => handlePrevPage && handlePrevPage()}>
            {t('titles.previous_page')}
          </Button>
          <Button hoverTransition onClick={() => handleNextPage && handleNextPage()}>
            {t('titles.next_page')}
          </Button>
        </div>
      </section>
    </Container>
  );
}
