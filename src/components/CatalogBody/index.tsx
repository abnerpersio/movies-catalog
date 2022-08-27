import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useData } from '../../hooks/useData';
import { ReactComponent as GridSVG } from '../../images/grid.svg';
import { ReactComponent as ListSVG } from '../../images/list.svg';
import { MovieCard } from '../MovieCard';
import {
  Button,
  CenterButton,
  Container,
  DarkButton,
  FilterBar,
  MoviesList,
  Select,
} from './styles';

type FilterByGenre = {
  filter: boolean;
  genre: number | null;
};

export function CatalogBody() {
  const { t } = useTranslation();
  const { catalogMovies, onNextPage, genres } = useData();

  const [filterByGenre, setFilterByGenre] = useState<FilterByGenre>({
    filter: false,
    genre: null,
  });
  const [orderByPopular, setOrderByPopular] = useState<boolean>(false);
  const [viewType, setViewType] = useState<string>('grid');

  function renderCatalog() {
    let filteredMovies = catalogMovies ?? [];

    const { filter, genre } = filterByGenre;

    if (filter && genre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre_ids.indexOf(genre) > -1);
    }

    if (orderByPopular) {
      filteredMovies = filteredMovies.sort((a, b) => {
        if (a.vote_average < b.vote_average) return 1;
        if (a.vote_average > b.vote_average) return -1;
        return 0;
      });
    } else {
      filteredMovies = filteredMovies.sort((a, b) => {
        if (a.vote_average < b.vote_average) return -1;
        if (a.vote_average > b.vote_average) return 1;
        return 0;
      });
    }

    return filteredMovies.map((movie) => (
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
    ));
  }

  function handleFilterByCategory(category: string) {
    return setFilterByGenre({
      filter: true,
      genre: Number(category),
    });
  }

  function toggleOrderByPopular() {
    return setOrderByPopular((prevState) => !prevState);
  }

  function handleChangeView() {
    setViewType((prevState) => (prevState === 'list' ? 'grid' : 'list'));
  }

  return (
    <Container>
      <FilterBar>
        <Select
          onChange={(e) => handleFilterByCategory(e.target.value)}
          placeholder={t('titles.placeholder.by_gender')}
          defaultValue=""
        >
          <option disabled value="">
            {t('titles.placeholder.by_gender')}
          </option>
          {genres?.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </Select>

        <Button className={orderByPopular ? 'active' : ''} onClick={toggleOrderByPopular}>
          {t('titles.populars')}
        </Button>

        <DarkButton onClick={handleChangeView}>
          {viewType === 'list' ? (
            <>
              <ListSVG /> <span>{t('titles.list_view')}</span>
            </>
          ) : (
            <>
              <GridSVG /> <span>{t('titles.grid_view')}</span>
            </>
          )}
        </DarkButton>
      </FilterBar>

      <MoviesList>{renderCatalog()}</MoviesList>

      <CenterButton onClick={() => (onNextPage ? onNextPage() : false)}>
        {t('titles.load_more')}
      </CenterButton>
    </Container>
  );
}
