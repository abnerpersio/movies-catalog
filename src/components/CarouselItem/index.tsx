import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Container, Image, About, Title, Category, Rating } from './styles';

import { ReactComponent as StarSVG } from '../../images/star.svg'

const genres = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]

function CarouselItem(props: InferProps<typeof CarouselItem.propTypes>) {
  
  function renderCategories(categories:number[]) {
    const allCategories = categories.map((category) => {
      const genre = genres.find((genre) => genre.id === category)
      return genre?.name;
    }) 

    return <span>{`${allCategories[0]}, ${allCategories[1]}`}</span>
  }


  return (
    <Container className={props.active ? 'active' : 'inactive'} >
      <Image src={`https://image.tmdb.org/t/p/w500${props.image}`} />

      <About>
        <Title>
          {`${props.title.substring(0, 13)}${props.title.length >= 13 ? '...' : ''}`}
        </Title>
        <Category>
          {renderCategories(props.categories)}
        </Category>

        <Rating>
          <StarSVG />
          <p>{props.rating}</p>
        </Rating>
      </About>
    </Container>
  )
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
}

export default CarouselItem;
