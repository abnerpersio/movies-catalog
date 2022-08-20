import {
  Container,
  MovieSection,
  HalfSection,
  Image,
  About,
  Title,
  Category,
  Description,
  Rating,
} from './styles';

import { ReactComponent as StarSVG } from '../../images/star.svg';
import { Genre } from '../../types/movies';
import { useTranslation } from 'react-i18next';

type Props = {
  movie: {
    image: string;
    title: string;
    description: string;
    categories: Genre[];
    rating: number;
  };
};

export default function MovieHeader(props: Props) {
  const { t } = useTranslation();

  function renderCategories(categories: Genre[]) {
    const getCategoriesName = categories.map((category) => category.name);
    return <span>{`${getCategoriesName[0]}`}</span>;
  }

  let categories;

  if (props.movie?.categories) {
    categories = renderCategories(props.movie.categories);
  }

  return (
    <Container>
      {props.movie && (
        <MovieSection>
          <Image src={`https://image.tmdb.org/t/p/w500${props.movie.image}`} />

          <About>
            <Title>{props.movie.title}</Title>

            <HalfSection>
              <Category>{categories}</Category>

              <Rating>
                <StarSVG />
                {props.movie.rating}
              </Rating>
            </HalfSection>

            <Description>
              <span>{t('titles.synopsis')}</span>
              {props.movie.description}
            </Description>
          </About>
        </MovieSection>
      )}

      {!props.movie && <p>{t('titles.loading')}</p>}
    </Container>
  );
}
