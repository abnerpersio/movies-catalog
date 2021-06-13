import React, { useState, useEffect, useCallback } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Container } from './styles'

import Header from '../Header'
import Footer from '../Footer'
import Releases from '../Releases'
import Catalog from '../Catalog'

import { DataProvider } from '../DataContext'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2E2MDc5ZDM3N2JhMGExODU4MDc3YWZjMDVkZDFmMyIsInN1YiI6IjYwYzQ0NDI2ZDA0ZDFhMDAyOTk1MTI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p3mk4AJk_5nt7Lor-qi1byDdi4LwUaS0hZiLvz98AyA'

function MoviePage(props: InferProps<typeof MoviePage.propTypes>) {
  const [movie, setMovie] = useState<any>({})
  const [notFound, setNotFound] = useState<boolean>(false)
  const { movieId } = props.match.params;

  const getMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if(response.status === 404) {
      setNotFound(true);
    }

    const json = await response.json();
    setMovie({
      image: json?.poster_path,
      title: json?.title,
      description: json?.overview,
      categories: json?.genres,
      rating: json?.vote_average 
    })
  }

  console.log(movie)

  useEffect(() => {
    getMovie()
  }, [])
  
  return (
    <DataProvider>
      <Container>
        <Header />


        <Footer />
      </Container>
    </DataProvider>
  )
}

MoviePage.propTypes = {
  match: PropTypes.any,
}

export default MoviePage;