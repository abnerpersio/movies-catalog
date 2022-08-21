import { useTranslation } from 'react-i18next';

import { ReactComponent as StarSVG } from '../../images/star.svg';
import { Genre, MovieDetails } from '../../types/movies';
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

  function renderCategories(categories: Genre[]) {
    const getCategoriesName = categories.map((category) => category.name);
    return <span>{`${getCategoriesName[0]}`}</span>;
  }

  let categories;

  if (movie.genres) {
    categories = renderCategories(movie.genres);
  }

  return (
    <Container>
      <MovieSection>
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

        <About>
          <Title>{movie.title}</Title>

          <HalfSection>
            <Category>{categories}</Category>

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
