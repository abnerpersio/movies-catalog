import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { ErrorPage } from '../../components/404';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MovieBody } from '../../components/MovieBody';
import { MovieHeader } from '../../components/MovieHeader';
import { routes } from '../../constants/routes';
import MovieService from '../../services/MovieService';
import { Button, Container, Section } from './styles';

function MoviePage({ match }: RouteComponentProps<{ id?: string }>) {
  const { t } = useTranslation();
  const [movie, setMovie] = useState<any>({});
  const [notFound, setNotFound] = useState<boolean>(false);
  const { id } = match.params;

  useEffect(() => {
    async function getMovie() {
      try {
        const { data } = await MovieService.getMovie(id!);

        if (!data) {
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
      } catch (error: any) {
        setNotFound(true);
      }
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
        <Button to={routes.HOME}>{t('titles.go_back')}</Button>
      </Section>

      <Footer />
    </Container>
  );
}

export default MoviePage;
