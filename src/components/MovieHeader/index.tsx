import { useTranslation } from 'react-i18next';

import { MovieDetails } from '../../types/movies';
import { formatImageUrl } from '../../utils/image';
import { StarIcon } from '../icons/star';
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
        <Image src={formatImageUrl(movie.poster_path)} />

        <About>
          <Title>{movie.title}</Title>

          <HalfSection>
            <Category>{genres?.[0] && <span>{genres[0].name}</span>}</Category>

            <Rating>
              <StarIcon />
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
