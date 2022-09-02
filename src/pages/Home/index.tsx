import { Catalog } from '../../components/Catalog';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Releases } from '../../components/Releases';
import { FilterProvider } from '../../context/FilterContext';
import { MovieProvider } from '../../context/MovieContext';
import { Container } from './styles';

export function Home() {
  return (
    <FilterProvider>
      <MovieProvider>
        <Container>
          <Header />

          <Releases />
          <Catalog />

          <Footer />
        </Container>
      </MovieProvider>
    </FilterProvider>
  );
}
