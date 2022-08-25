import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { DataContext } from '../../context/DataContext';
import { ReactComponent as StarSVG } from '../../images/star.svg';
import { About, Category, Container, Description, Image, Rating, Title } from './styles';

type Props = {
  viewType?: string;
  id: number;
  image: string;
  title: string;
  categories: number[];
  description: string;
  rating: number;
};

export function MovieCard({ viewType, id, image, title, categories, description, rating }: Props) {
  const { genres } = useContext(DataContext);

  function renderCategories() {
    const categoriesName = categories
      .map((category) => genres?.find(({ id: categoryId }) => categoryId === category)?.name)
      .filter(Boolean);

    return <span>{`${categoriesName.slice(0, 2)}`}</span>;
  }

  return (
    <Container className={viewType === 'list' ? 'list-display' : ''}>
      <Link to={routes.MOVIE.replace(':id', String(id))}>
        <Image
          className={viewType === 'list' ? 'list-display' : ''}
          src={`https://image.tmdb.org/t/p/w500${image}`}
        />
      </Link>

      <About>
        <Title to={routes.MOVIE.replace(':id', String(id))}>{title}</Title>

        <Category>{renderCategories()}</Category>

        <Rating>
          <StarSVG />
          <p>{rating}</p>
        </Rating>

        <Description>{`${description.substring(0, 150)}...`}</Description>
      </About>
    </Container>
  );
}
