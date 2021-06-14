import React from 'react'
import PropTypes, { InferProps } from 'prop-types';
import { Container, MovieSection, HalfSection, Image,  About, Title, Category, Description, Rating  } from './styles';

import { ReactComponent as StarSVG } from '../../images/star.svg'

interface IGenre {
  id: number;
  name: string;
}

function MovieHeader(props: InferProps<typeof MovieHeader.propTypes>) {
  function renderCategories(categories:IGenre[]) {
    const getCategoriesName = categories.map((category) => category.name) 
    return <span>{`${getCategoriesName[0]}`}</span>
  }

  console.log(props?.movie?.categories)

  let categories;

  if(props.movie?.categories) {
    categories = renderCategories(props.movie.categories)
  }

  return (
    <Container>

      {
        props.movie ? 
        <MovieSection>
          <Image src={`https://image.tmdb.org/t/p/w500${props.movie.image}`} />

          <About>

            <Title>
              {props.movie.title}
            </Title>

            <HalfSection>
              <Category>
                {categories}
              </Category>
            
              <Rating>
                <StarSVG />
                {props.movie.rating}
              </Rating>
            </HalfSection>

            <Description>
              <span>Sinopse</span>
              {props.movie.description}
            </Description>

          </About>
        </MovieSection>
          : <p>carregando...</p>
      }


    </Container>
  )
}

MovieHeader.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired 
  })
}

export default MovieHeader;

