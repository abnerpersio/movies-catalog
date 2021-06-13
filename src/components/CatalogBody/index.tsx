import React, { useContext } from 'react'
import { Container, FilterBar, Select, Button, CenterButton, DarkButton, MoviesList } from './styles';

import MovieCard from '../MovieCard'

import { DataContext } from '../DataContext'

function CatalogBody() {
  const { catalogMovies, onNextPage } = useContext(DataContext)

  function renderCatalog() {
    return catalogMovies?.map((movie) => 
      <MovieCard 
        // key={movie.id}
        key={Math.random()}
        image={movie.poster_path}
        title={movie.title}
        categories={movie.genre_ids}
        description={movie.overview}
        rating={movie.vote_average}
      />  
    )
  }

  return (
    <Container>
      <FilterBar>
        <Select placeholder="por gênero">
          <option selected disabled>por gênero</option>
        </Select>
        
        <Button>
          mais populares
        </Button>
        
        <DarkButton>
          em lista
        </DarkButton>
      </FilterBar>

      <MoviesList>

        {renderCatalog()}

      </MoviesList>

      <CenterButton onClick={() => { return onNextPage ? onNextPage() : false }}>carregar mais</CenterButton>

    </Container>
  )
}

export default CatalogBody;
