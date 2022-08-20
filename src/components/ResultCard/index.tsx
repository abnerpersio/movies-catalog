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

export function ResultCard(props: Props) {
  const { genres } = useContext(DataContext);

  function renderCategories(categories: number[]) {
    const getCategoriesName = categories.map((category) => {
      const genre = genres?.find((genre) => genre.id === category);
      return genre?.name;
    });

    return <span>{`${getCategoriesName.slice(0, 2)}`}</span>;
  }

  return (
    <Card to={routes.MOVIE.replace(':id', String(props.id))}>
      <Image src={`https://image.tmdb.org/t/p/w500${props.image}`} />
      <About>
        <Title>{props.title}</Title>

        <Category>{renderCategories(props.categories)}</Category>

        <Rating>
          <StarSVG />
          <p>{props.rating}</p>
        </Rating>
      </About>
    </Card>
  );
}
