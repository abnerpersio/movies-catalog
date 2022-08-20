import { Catalog } from '../../components/Catalog';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Releases } from '../../components/Releases';
import { DataProvider } from '../../context/DataContext';
import { Container } from './styles';

export function Home() {
  return (
    <DataProvider>
      <Container>
        <Header />

        <Releases />
        <Catalog />

        <Footer />
      </Container>
    </DataProvider>
  );
}
