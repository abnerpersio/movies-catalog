import React from 'react';
import PropTypes, { InferProps } from 'prop-types'
import { Container, Image, About, Title, Description, Category, Rating } from './styles'

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

function MovieCard(props: InferProps<typeof MovieCard.propTypes>) {
   
  function renderCategories(categories:number[]) {
    const allCategories = categories.map((category) => {
      const genre = genres.find((genre) => genre.id === category)
      return genre?.name;
    }) 

    return <span>{`${allCategories[0]}, ${allCategories[1]}`}</span>
  }
  
  return (
    <Container>
      <Image src={`https://image.tmdb.org/t/p/w500${props.image}`} />

      <About>
        <Title>
          {props.title} 
        </Title>
        <Category>
          {renderCategories(props.categories)}
        </Category>

        <Rating>
          <StarSVG />
          <p>{props.rating}</p>
        </Rating>
        
        <Description>
          {props.description.substring(0, 150) + '...'}
        </Description>
      </About>

    </Container>
  )
}

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default MovieCard;