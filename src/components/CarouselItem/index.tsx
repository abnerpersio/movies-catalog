import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, About, Title, Category, Rating } from './styles';

import { DataContext } from '../../context/DataContext';
import { ReactComponent as StarSVG } from '../../images/star.svg';

type Props = {
  id: number;
  active?: boolean;
  image: string;
  title: string;
  categories: number[];
  rating: number;
};

export default function CarouselItem(props: Props) {
  const { genres } = useContext(DataContext);

  function renderCategories(categories: number[]) {
    const getCategoriesName = categories.map((category) => {
      const genre = genres?.find((genre) => genre.id === category);
      return genre?.name;
    });

    return <span>{`${getCategoriesName.slice(0, 2)}`}</span>;
  }

  return (
    <Container className={props.active ? 'active' : 'inactive'}>
      <Link to={`/filme/${props.id}`}>
        <Image src={`https://image.tmdb.org/t/p/w500${props.image}`} />
      </Link>

      <About>
        <Title to={`/filme/${props.id}`}>
          {`${props.title.substring(0, 10)}${props.title.length >= 10 ? '...' : ''}`}
        </Title>
        <Category>{renderCategories(props.categories)}</Category>

        <Rating>
          <StarSVG />
          <p>{props.rating}</p>
        </Rating>
      </About>
    </Container>
  );
}
