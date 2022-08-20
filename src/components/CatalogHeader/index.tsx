import { Container, Heading, Title, EllipsePulsing } from './styles';

function CatalogHeader() {
  return (
    <Container>
      <Heading>
        <EllipsePulsing />
        <Title>
          <span className="bold">CATÁLOGO</span> COMPLETO
        </Title>
      </Heading>
    </Container>
  );
}

export default CatalogHeader;
