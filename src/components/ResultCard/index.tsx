import { useContext } from 'react';

import { routes } from '../../constants/routes';
import { DataContext } from '../../context/DataContext';
import { ReactComponent as StarSVG } from '../../images/star.svg';
import { About, Card, Category, Image, Rating, Title } from './styles';

type Props = {
  id: number;
  image: string;
  title: string;
  rating: number;
  categories: number[];
};

export function ResultCard({ id, image, title, rating, categories }: Props) {
  const { genres } = useContext(DataContext);

  function renderCategories() {
    const categoriesName = categories.map(
      (category) => genres?.find(({ id: categoryId }) => categoryId === category)?.name,
    );

    return <span>{`${categoriesName.slice(0, 2)}`}</span>;
  }

  return (
    <Card to={routes.MOVIE.replace(':id', String(id))}>
      <Image src={`https://image.tmdb.org/t/p/w500${image}`} />
      <About>
        <Title>{title}</Title>

        <Category>{renderCategories()}</Category>

        <Rating>
          <StarSVG />
          <p>{rating}</p>
        </Rating>
      </About>
    </Card>
  );
}
