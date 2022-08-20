import { useRef, useEffect, useState, useCallback } from 'react';
import { Overlay, Container, Section, ResultsSection, Input } from './styles';

import ResultCard from '../ResultCard';
import MovieService from '../../services/MovieService';
import { debounce } from '../../utils/debounce';

function SearchBar() {
  const [moviesResult, setMoviesResult] = useState<any[]>([]);
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

  function renderResults() {
    if (!moviesResult || notFound) {
      return <h3 style={{ textAlign: 'center' }}>Nenhum filme encontrado!</h3>;
    }

    return moviesResult?.map((movie) => (
      <ResultCard
        key={movie.id}
        id={movie.id}
        image={movie.poster_path}
        title={movie.title}
        categories={movie.genre_ids}
        rating={movie.vote_average}
      />
    ));
  }

  function handleSearchMovie() {
    let searchQuery: string = '';
    if (inputSearchRef?.current?.value) {
      searchQuery = inputSearchRef.current.value;
    }

    getMovies(searchQuery);
    return searchQuery;
  }

  return (
    <Overlay>
      <Container>
        <Section>
          <Input ref={inputSearchRef} onChange={debounce(handleSearchMovie, 1000)} />
        </Section>

        <ResultsSection>{renderResults()}</ResultsSection>
      </Container>
    </Overlay>
  );
}

export default SearchBar;
