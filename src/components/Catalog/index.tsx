import CatalogBody from '../CatalogBody';
import CatalogHeader from '../CatalogHeader';
import { Container } from './styles';

export function Catalog() {
  return (
    <Container id="catalog">
      <CatalogHeader />
      <CatalogBody />
    </Container>
  );
}
