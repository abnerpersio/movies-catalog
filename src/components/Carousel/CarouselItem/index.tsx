import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../constants/routes';
import { useMovies } from '../../../hooks/useMovies';
import { Movie } from '../../../types/movies';
import { formatImageUrl } from '../../../utils/image';
import { formatMovieName } from '../../../utils/text';
import { StarIcon } from '../../icons/star';
import { Container } from './styles';

type Props = {
  active?: boolean;
  movie: Movie;
};

export function CarouselItem({ active, movie }: Props) {
  const { genres } = useMovies();

  const categoriesName = useMemo(
    () =>
      movie.genre_ids
        .map((category) => genres?.find(({ id: categoryId }) => categoryId === category)?.name)
        .filter(Boolean),
    [movie.genre_ids, genres],
  );

  return (
    <Container className={active ? 'active' : 'inactive'}>
      <Link to={routes.MOVIE.replace(':id', String(movie.id))}>
        <img src={formatImageUrl(movie.poster_path)} alt={movie.title} />
      </Link>

      <section>
        <Link className="movie-title" to={routes.MOVIE.replace(':id', String(movie.id))}>
          {formatMovieName(movie.title)}
        </Link>

        <p className="category">
          <span>{categoriesName.slice(0, 2).join(', ')}</span>
        </p>

        <div>
          <StarIcon />
          <p>{movie.vote_average}</p>
        </div>
      </section>
    </Container>
  );
}
