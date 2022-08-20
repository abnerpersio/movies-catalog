import { Container } from './styles';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <span>© {year} Movies Catalog. All rights reserved.</span>
    </Container>
  );
}

export default Footer;
