import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { DataContext } from '../../context/DataContext';
import { ReactComponent as StarSVG } from '../../images/star.svg';
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
  const { genres } = useContext(DataContext);

  function renderCategories() {
    const categoriesName = categories
      .map((category) => genres?.find(({ id: categoryId }) => categoryId === category)?.name)
      .filter(Boolean);

    return <span>{`${categoriesName.slice(0, 2)}`}</span>;
  }

  return (
    <Container className={active ? 'active' : 'inactive'}>
      <Link to={routes.MOVIE.replace(':id', String(id))}>
        <Image src={`https://image.tmdb.org/t/p/w500${image}`} />
      </Link>

      <About>
        <Title to={routes.MOVIE.replace(':id', String(id))}>
          {`${title.substring(0, 10)}${title.length >= 10 ? '...' : ''}`}
        </Title>
        <Category>{renderCategories()}</Category>

        <Rating>
          <StarSVG />
          <p>{rating}</p>
        </Rating>
      </About>
    </Container>
  );
}
