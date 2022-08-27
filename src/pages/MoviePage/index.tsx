import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { ErrorPage } from '../../components/404';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { MovieBody } from '../../components/MovieBody';
import { MovieHeader } from '../../components/MovieHeader';
import { routes } from '../../constants/routes';
import MovieService from '../../services/MovieService';
import { MovieDetails } from '../../types/movies';
import { Button, Container, Section } from './styles';

export function MoviePage({ match }: RouteComponentProps<{ id?: string }>) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  const { id } = match.params;

  useEffect(() => {
    async function getMovie() {
      try {
        if (!id) return;

        const { data } = await MovieService.getMovie(id);

        if (!data) {
          setNotFound(true);
          return;
        }

        setMovie(data);
      } catch (error: any) {
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [id]);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Header />

      {notFound && <ErrorPage />}
      {movie && (
        <>
          <MovieHeader movie={movie} />
          <MovieBody movie={movie} />
        </>
      )}

      <Section>
        <Button to={routes.HOME}>{t('titles.go_back')}</Button>
      </Section>

      <Footer />
    </Container>
  );
}
