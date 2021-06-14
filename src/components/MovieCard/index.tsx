import React, { useContext } from 'react';
import PropTypes, { InferProps } from 'prop-types'
import { Link } from 'react-router-dom';
import { Container, Image, About, Title, Description, Category, Rating } from './styles'

import { DataContext } from '../../context/DataContext'

import { ReactComponent as StarSVG } from '../../images/star.svg'

function MovieCard(props: InferProps<typeof MovieCard.propTypes>) {
  const { genres } = useContext(DataContext)
   
  function renderCategories(categories:number[]) {
    const getCategoriesName = categories.map((category) => {
      const genre = genres?.find((genre) => genre.id === category)
      return genre?.name;
    }) 

    return <span>{`${getCategoriesName.slice(0, 2)}`}</span>
  }

  return (
    <Container className={props.viewType === 'list' ? 'list-display' : ''}>
      <Link to={`/filme/${props.id}`}>
        <Image className={props.viewType === 'list' ? 'list-display' : ''} src={`https://image.tmdb.org/t/p/w500${props.image}`} />
      </Link>

      <About>
        <Title to={`/filme/${props.id}`}>
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
  viewType: PropTypes.string,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default MovieCard;