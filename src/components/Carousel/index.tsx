import React, { useState, useEffect, useContext } from 'react'
import { useMaxWidth } from '../../hooks/useWindowSize'
import { Container, ChevronBackIcon, ChevronFrontIcon } from './styles';

import CarouselItem from '../CarouselItem'

import { DataContext } from '../../context/DataContext'

function Carousel() {
  const { popularMovies } = useContext(DataContext)
  const [carouselDisplay, setCarouselDisplay] = useState<number[]>([]);
  const isMobileSize = useMaxWidth(480);
  const isTabletSize = useMaxWidth(920);

  useEffect(() => {
    if (isMobileSize) {
      setCarouselDisplay([0]);
    } else if(isTabletSize) {
      setCarouselDisplay([0, 1])
    } else {
      setCarouselDisplay([0, 1, 2, 3])
    } 
  }, [isMobileSize, isTabletSize])

  function renderMovies() {
    return popularMovies?.map((movie, index) => (
      <CarouselItem
        id={movie.id}
        active={carouselDisplay.includes(index)}
        key={movie.id}
        image={movie.poster_path}
        title={movie.title}
        categories={movie.genre_ids}
        rating={movie.vote_average}
      />
    ))
  }

  function handlePlus(arr: any[], count: number[]) {
    const lastItemIndex = arr.length - 1;
    const lastCountIndex = count.length - 1;
    return count[lastCountIndex] === lastItemIndex ? count : count.map((number) => number + 1);
  }

  function handleMinus(count: number[]) {
    return count[0] === 0 ? count : count.map((number) => number - 1);
  }

  function handlePreviusCarousel() {
    if(popularMovies) {
      setCarouselDisplay((prevState) => handleMinus(prevState));
    }
  }
  
  function handleNextCarousel() {
    if(popularMovies) {
      setCarouselDisplay((prevState) => handlePlus(popularMovies, prevState));
    }
  }

  return (
    <Container>
      <ChevronBackIcon onClick={handlePreviusCarousel} />
      {renderMovies()}
      <ChevronFrontIcon onClick={handleNextCarousel} />
    </Container>
  )
}

export default Carousel

