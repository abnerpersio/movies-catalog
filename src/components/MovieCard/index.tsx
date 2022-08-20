import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, About, Title, Description, Category, Rating } from './styles';

import { DataContext } from '../../context/DataContext';

import { ReactComponent as StarSVG } from '../../images/star.svg';
import { routes } from '../../constants/routes';

type Props = {
  viewType?: string;
  id: number;
  image: string;
  title: string;
  categories: number[];
  description: string;
  rating: number;
};

export default function MovieCard(props: Props) {
  const { genres } = useContext(DataContext);

  function renderCategories(categories: number[]) {
    const getCategoriesName = categories.map((category) => {
      const genre = genres?.find((genre) => genre.id === category);
      return genre?.name;
    });

    return <span>{`${getCategoriesName.slice(0, 2)}`}</span>;
  }

  return (
    <Container className={props.viewType === 'list' ? 'list-display' : ''}>
      <Link to={routes.MOVIE.replace(':id', String(props.id))}>
        <Image
          className={props.viewType === 'list' ? 'list-display' : ''}
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
        />
      </Link>

      <About>
        <Title to={routes.MOVIE.replace(':id', String(props.id))}>{props.title}</Title>

        <Category>{renderCategories(props.categories)}</Category>

        <Rating>
          <StarSVG />
          <p>{props.rating}</p>
        </Rating>

        <Description>{props.description.substring(0, 150) + '...'}</Description>
      </About>
    </Container>
  );
}
