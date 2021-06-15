import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container, Section, Button } from './styles';

import ErrorPage from '../404'
import Header from '../Header';
import Footer from '../Footer';
import MovieHeader from '../MovieHeader';
import MovieBody from '../MovieBody';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2E2MDc5ZDM3N2JhMGExODU4MDc3YWZjMDVkZDFmMyIsInN1YiI6IjYwYzQ0NDI2ZDA0ZDFhMDAyOTk1MTI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p3mk4AJk_5nt7Lor-qi1byDdi4LwUaS0hZiLvz98AyA'

function MoviePage({ match }: RouteComponentProps<{ movieId?: string }>) {
  const [movie, setMovie] = useState<any>({})
  const [notFound, setNotFound] = useState<boolean>(false)
  const { movieId } = match.params;

  const getMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`, {
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

  useEffect(() => {
    getMovie()
  }, [])
  
  return (
    <Container>
      <Header />

      {
        notFound 
          ? <ErrorPage /> 
          : 
          <>
            <MovieHeader movie={movie} />
            <MovieBody />
          </>
      }

      <Section>
        <Button to="/home">voltar</Button>
      </Section>

      <Footer />
    </Container>
  )
}

// MoviePage.propTypes = 


export default MoviePage;