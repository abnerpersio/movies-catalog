import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Section, Button } from './styles';

import ErrorPage from '../404';
import Header from '../Header';
import Footer from '../Footer';
import MovieHeader from '../MovieHeader';
import MovieBody from '../MovieBody';
import MovieService from '../../services/MovieService';

function MoviePage({ match }: RouteComponentProps<{ movieId?: string }>) {
  const [movie, setMovie] = useState<any>({});
  const [notFound, setNotFound] = useState<boolean>(false);
  const { movieId } = match.params;

  useEffect(() => {
    async function getMovie() {
      const { data, status } = await MovieService.getMovie(movieId!);

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
  }, [movieId]);

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
