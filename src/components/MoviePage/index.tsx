import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Section, Button } from './styles';

import ErrorPage from '../404';
import Header from '../Header';
import Footer from '../Footer';
import MovieHeader from '../MovieHeader';
import MovieBody from '../MovieBody';
import MovieService from '../../services/MovieService';

function MoviePage({ match }: RouteComponentProps<{ id?: string }>) {
  const [movie, setMovie] = useState<any>({});
  const [notFound, setNotFound] = useState<boolean>(false);
  const { id } = match.params;

  useEffect(() => {
    async function getMovie() {
      const { data, status } = await MovieService.getMovie(id!);

      if (!data || status === 404) {
        setNotFound(true);
        return;
      }

      setMovie({
        image: data.poster_path,
        title: data.title,
        description: data.overview,
        categories: data.genres,
        rating: data.vote_average,
      });
    }

    getMovie();
  }, [id]);

  return (
    <Container>
      <Header />

      {notFound ? (
        <ErrorPage />
      ) : (
        <>
          <MovieHeader movie={movie} />
          <MovieBody />
        </>
      )}

      <Section>
        <Button to="/home">voltar</Button>
      </Section>

      <Footer />
    </Container>
  );
}

export default MoviePage;
