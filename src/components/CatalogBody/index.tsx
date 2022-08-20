import { useContext, useState } from 'react';
import {
  Container,
  FilterBar,
  Select,
  Button,
  CenterButton,
  DarkButton,
  MoviesList,
} from './styles';

import MovieCard from '../MovieCard';
import { ReactComponent as ListSVG } from '../../images/list.svg';
import { ReactComponent as GridSVG } from '../../images/grid.svg';

import { DataContext } from '../../context/DataContext';

interface IFilterByGenre {
  filter: boolean;
  genre: number | null;
}

function CatalogBody() {
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
        (movie) => movie.genre_ids.indexOf(filterByGenre.genre) > -1
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
          placeholder="por gênero"
          defaultValue="first"
        >
          <option disabled value="first">
            por gênero
          </option>
          {renderCategories()}
        </Select>

        <Button className={orderByPopular ? 'active' : ''} onClick={handleOrderByPopular}>
          mais populares
        </Button>

        <DarkButton onClick={handleChangeView}>
          {viewType === 'list' ? (
            <>
              <ListSVG /> <span>em lista</span>
            </>
          ) : (
            <>
              <GridSVG /> <span>em grid</span>
            </>
          )}
        </DarkButton>
      </FilterBar>

      <MoviesList>{renderCatalog()}</MoviesList>

      <CenterButton
        onClick={() => {
          return onNextPage ? onNextPage() : false;
        }}
      >
        carregar mais
      </CenterButton>
    </Container>
  );
}

export default CatalogBody;
