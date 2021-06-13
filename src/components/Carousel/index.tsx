import React, { useState, useEffect, useContext } from 'react'
import { useMaxWidth } from '../../hooks/useWindowSize'
import { Container, ChevronBackIcon, ChevronFrontIcon } from './styles';

import CarouselItem from '../CarouselItem'

import { DataContext } from '../DataContext'

function Carousel() {
  const { popularMovies } = useContext(DataContext)
  const [carouselDisplay, setCarouselDisplay] = useState<any[]>([]);
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
        active={carouselDisplay.includes(index)}
        key={movie.id}
        image={movie.poster_path}
        title={movie.title}
        categories={movie.genre_ids}
        rating={movie.vote_average}
      />
    ))
  }

  return (
    <Container>
      <ChevronBackIcon />
      {renderMovies()}
      <ChevronFrontIcon />
    </Container>
  )
}

export default Carousel

