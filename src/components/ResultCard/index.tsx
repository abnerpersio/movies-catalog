import React, { useContext } from 'react';
import PropTypes, { InferProps } from 'prop-types'
import { Card, Image, About, Title, Category, Rating } from './styles';

import { DataContext } from '../../context/DataContext'

import { ReactComponent as StarSVG } from '../../images/star.svg'

function ResultCard(props: InferProps<typeof ResultCard.propTypes>) {
  const { genres } = useContext(DataContext);

  function renderCategories(categories:number[]) {
    const getCategoriesName = categories.map((category) => {
      const genre = genres?.find((genre) => genre.id === category)
      return genre?.name;
    }) 

    return <span>{`${getCategoriesName.slice(0, 2)}`}</span>
  }


  return (
    <Card to={`/filme/${props.id}`}>
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
      </About>
    </Card>
  )
}

ResultCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
}

export default ResultCard;