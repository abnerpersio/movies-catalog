import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { useData } from '../../hooks/useData';
import { ReactComponent as StarSVG } from '../../images/star.svg';
import { formatImageUrl } from '../../utils/image';
import { About, Category, Container, Image, Rating, Title } from './styles';

type Props = {
  id: number;
  active?: boolean;
  image: string;
  title: string;
  categories: number[];
  rating: number;
};

export function CarouselItem({ active, id, image, title, categories, rating }: Props) {
  const { genres } = useData();

  const categoriesName = useMemo(
    () =>
      categories
        .map((category) => genres?.find(({ id: categoryId }) => categoryId === category)?.name)
        .filter(Boolean),
    [categories, genres],
  );

  return (
    <Container className={active ? 'active' : 'inactive'}>
      <Link to={routes.MOVIE.replace(':id', String(id))}>
        <Image src={formatImageUrl(image)} />
      </Link>

      <About>
        <Title to={routes.MOVIE.replace(':id', String(id))}>
          {`${title.substring(0, 10)}${title.length >= 10 ? '...' : ''}`}
        </Title>
        <Category>
          <span>{categoriesName.slice(0, 2).join(', ')}</span>
        </Category>

        <Rating>
          <StarSVG />
          <p>{rating}</p>
        </Rating>
      </About>
    </Container>
  );
}
