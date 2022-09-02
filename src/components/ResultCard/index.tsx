import { useMemo } from 'react';

import { routes } from '../../constants/routes';
import { useMovies } from '../../hooks/useMovies';
import { formatImageUrl } from '../../utils/image';
import { StarIcon } from '../icons/star';
import { About, Card, Category, Image, Rating, Title } from './styles';

type Props = {
  id: number;
  image: string;
  title: string;
  rating: number;
  categories: number[];
};

export function ResultCard({ id, image, title, rating, categories }: Props) {
  const { genres } = useMovies();

  const categoriesName = useMemo(
    () =>
      categories
        .map((category) => genres?.find(({ id: categoryId }) => categoryId === category)?.name)
        .filter(Boolean),
    [categories, genres],
  );

  return (
    <Card to={routes.MOVIE.replace(':id', String(id))}>
      <Image src={formatImageUrl(image)} />
      <About>
        <Title>{title}</Title>

        <Category>
          <span>{categoriesName.slice(0, 2).join(', ')}</span>
        </Category>

        <Rating>
          <StarIcon />
          <p>{rating}</p>
        </Rating>
      </About>
    </Card>
  );
}
