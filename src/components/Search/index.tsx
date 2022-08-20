import { useRef, useEffect, useState } from 'react';
import { Overlay, Container, Section, ResultsSection, Input } from './styles';

import ResultCard from '../ResultCard';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2E2MDc5ZDM3N2JhMGExODU4MDc3YWZjMDVkZDFmMyIsInN1YiI6IjYwYzQ0NDI2ZDA0ZDFhMDAyOTk1MTI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p3mk4AJk_5nt7Lor-qi1byDdi4LwUaS0hZiLvz98AyA';

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

function SearchBar() {
  const [moviesResult, setMoviesResult] = useState<any[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const getMovies = async (query: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?language=pt-BR&query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await response.json();
    const { results } = json;
    setMoviesResult(results);
  };

  useEffect(() => {
    getMovies('');
  }, []);

  useEffect(() => {
    if (inputSearchRef.current) {
      console.log(inputSearchRef.current.focus());
    }
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
