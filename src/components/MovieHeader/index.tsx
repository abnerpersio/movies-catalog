import { useTranslation } from 'react-i18next';

import { ReactComponent as StarSVG } from '../../images/star.svg';
import { MovieDetails } from '../../types/movies';
import {
  About,
  Category,
  Container,
  Description,
  HalfSection,
  Image,
  MovieSection,
  Rating,
  Title,
} from './styles';

type Props = {
  movie: MovieDetails;
};

export function MovieHeader({ movie }: Props) {
  const { t } = useTranslation();

  const { genres } = movie;

  return (
    <Container>
      <MovieSection>
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

        <About>
          <Title>{movie.title}</Title>

          <HalfSection>
            <Category>{genres?.[0] && <span>{genres[0].name}</span>}</Category>

            <Rating>
              <StarSVG />
              {movie.vote_average}
            </Rating>
          </HalfSection>

          <Description>
            <span>{t('titles.synopsis')}</span>
            {movie.overview}
          </Description>
        </About>
      </MovieSection>
    </Container>
  );
}
