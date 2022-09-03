import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import MovieService from '../../services/MovieService';
import { Movie } from '../../types/movies';
import { debounce } from '../../utils/debounce';
import { ResultCard } from '../ResultCard';
import { Container, Overlay } from './styles';

export function SearchBar() {
  const [moviesResult, setMoviesResult] = useState<Movie[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const getMovies = useCallback(async (query: string) => {
    if (!query) return;

    const {
      data: { results },
    } = await MovieService.search(query);

    if (!results.length) {
      setNotFound(true);
      return;
    }

    setMoviesResult(results);
  }, []);

  useEffect(() => {
    if (!inputSearchRef.current) return;

    inputSearchRef.current.focus();
  }, []);

  function handleSearchMovie() {
    let searchQuery = '';
    if (inputSearchRef?.current?.value) {
      searchQuery = inputSearchRef.current.value;
    }

    getMovies(searchQuery);
    return searchQuery;
  }

  const isValidList = moviesResult && !notFound;

  return createPortal(
    <Overlay>
      <Container>
        <section className="search">
          <input ref={inputSearchRef} onChange={debounce(handleSearchMovie, 1000)} />
        </section>

        <section className="results">
          {!isValidList && <h3>Nenhum filme encontrado!</h3>}
          {isValidList &&
            moviesResult?.map((movie) => (
              <ResultCard
                key={movie.id}
                id={movie.id}
                image={movie.poster_path}
                title={movie.title}
                categories={movie.genre_ids}
                rating={movie.vote_average}
              />
            ))}
        </section>
      </Container>
    </Overlay>,
    document.getElementById('search-root')!,
  );
}
