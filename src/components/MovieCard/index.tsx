import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { useMovies } from '../../hooks/useMovies';
import { Movie } from '../../types/movies';
import { formatImageUrl } from '../../utils/image';
import { StarIcon } from '../icons/star';
import { Container } from './styles';

type Props = {
  viewType?: 'grid' | 'list';
  movie: Movie;
};

export function MovieCard({ viewType, movie }: Props) {
  const { genres } = useMovies();

  const categoriesName = useMemo(
    () =>
      movie.genre_ids
        .map((category) => genres?.find(({ id: categoryId }) => categoryId === category)?.name)
        .filter(Boolean),
    [movie.genre_ids, genres],
  );

  return (
    <Container className={viewType === 'list' ? 'list-display' : ''}>
      <Link to={routes.MOVIE.replace(':id', String(movie.id))}>
        <img
          className={viewType === 'list' ? 'list-display' : ''}
          src={formatImageUrl(movie.poster_path)}
          alt={movie.title}
        />
      </Link>

      <section>
        <Link className="movie-title" to={routes.MOVIE.replace(':id', String(movie.id))}>
          {movie.title}
        </Link>

        <p className="category">
          <span>{categoriesName.slice(0, 2).join(', ')}</span>
        </p>

        <div>
          <StarIcon />
          <p>{movie.vote_average}</p>
        </div>

        <p className="movie-description">{`${movie.overview.substring(0, 150)}...`}</p>
      </section>
    </Container>
  );
}
