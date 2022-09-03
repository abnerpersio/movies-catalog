import { useEffect, useState } from 'react';

import { useMovies } from '../../hooks/useMovies';
import { useMaxWidth } from '../../hooks/useWindowSize';
import { Movie } from '../../types/movies';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/chevron';
import { CarouselItem } from './CarouselItem';
import { Container } from './styles';

export function Carousel() {
  const { popularMovies: movies } = useMovies();
  const [carouselDisplay, setCarouselDisplay] = useState<number[]>([]);
  const isMobileSize = useMaxWidth(480);
  const isTabletSize = useMaxWidth(920);

  useEffect(() => {
    if (isMobileSize) {
      setCarouselDisplay([0]);
      return;
    }

    if (isTabletSize) {
      setCarouselDisplay([0, 1]);
      return;
    }

    setCarouselDisplay([0, 1, 2, 3]);
  }, [isMobileSize, isTabletSize]);

  function handlePlus(arr: Movie[], count: number[]) {
    const lastItemIndex = arr.length - 1;
    const lastCountIndex = count.length - 1;
    return count[lastCountIndex] === lastItemIndex ? count : count.map((number) => number + 1);
  }

  function handleMinus(count: number[]) {
    return count[0] === 0 ? count : count.map((number) => number - 1);
  }

  function handlePreviusCarousel() {
    if (!movies) return;
    setCarouselDisplay((prevState) => handleMinus(prevState));
  }

  function handleNextCarousel() {
    if (!movies) return;
    setCarouselDisplay((prevState) => handlePlus(movies, prevState));
  }

  return (
    <Container>
      {!!movies?.length && <ChevronLeftIcon onClick={handlePreviusCarousel} />}
      {(movies ?? []).map((movie, index) => (
        <CarouselItem movie={movie} active={carouselDisplay.includes(index)} key={movie.id} />
      ))}
      {!!movies?.length && <ChevronRightIcon onClick={handleNextCarousel} />}
    </Container>
  );
}
