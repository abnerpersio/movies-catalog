import { useTranslation } from 'react-i18next';

import { ReactComponent as StarSVG } from '../../images/star.svg';
import { Genre } from '../../types/movies';
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
  movie: {
    image: string;
    title: string;
    description: string;
    categories: Genre[];
    rating: number;
  };
};

export function MovieHeader({ movie }: Props) {
  const { t } = useTranslation();

  function renderCategories(categories: Genre[]) {
    const getCategoriesName = categories.map((category) => category.name);
    return <span>{`${getCategoriesName[0]}`}</span>;
  }

  let categories;

  if (movie.categories) {
    categories = renderCategories(movie.categories);
  }

  return (
    <Container>
      <MovieSection>
        <Image src={`https://image.tmdb.org/t/p/w500${movie.image}`} />

        <About>
          <Title>{movie.title}</Title>

          <HalfSection>
            <Category>{categories}</Category>

            <Rating>
              <StarSVG />
              {movie.rating}
            </Rating>
          </HalfSection>

          <Description>
            <span>{t('titles.synopsis')}</span>
            {movie.description}
          </Description>
        </About>
      </MovieSection>
    </Container>
  );
}
