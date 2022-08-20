import { Container } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Releases from '../../components/Releases';
import Catalog from '../../components/Catalog';

import { DataProvider } from '../../context/DataContext';

function Home() {
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

export default Home;
