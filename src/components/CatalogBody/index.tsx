import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ContextData } from '../../context/DataContext';
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

interface IFilterByGenre {
  filter: boolean;
  genre: number | null;
}

export function CatalogBody() {
  const { t } = useTranslation();
  const { catalogMovies, onNextPage, genres } = useContext(DataContext);

  const [filterByGenre, setFilterByGenre] = useState<IFilterByGenre>({
    filter: false,
    genre: null,
  });
  const [orderByPopular, setOrderByPopular] = useState<boolean>(false);
  const [viewType, setViewType] = useState<string>('grid');

  function renderCatalog() {
    let filteredMovies = catalogMovies;

    if (filterByGenre.filter) {
      filteredMovies = catalogMovies?.filter(
        (movie) => movie.genre_ids.indexOf(filterByGenre.genre) > -1,
      );
    }

    if (orderByPopular) {
      filteredMovies = catalogMovies?.sort((a, b) => {
        if (a.vote_average < b.vote_average) return 1;
        if (a.vote_average > b.vote_average) return -1;
        return 0;
      });
    }

    return filteredMovies?.map((movie) => (
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

  function handleOrderByPopular() {
    return setOrderByPopular(true);
  }

  function renderCategories() {
    return genres?.map((genre) => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ));
  }

  function handleChangeView() {
    return viewType === 'list' ? setViewType('grid') : setViewType('list');
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
          {renderCategories()}
        </Select>

        <Button className={orderByPopular ? 'active' : ''} onClick={handleOrderByPopular}>
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
