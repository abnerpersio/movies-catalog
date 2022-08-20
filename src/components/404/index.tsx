import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem;
  padding-top: 3rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

function ErrorPage() {
  return (
    <Container>
      <h3 style={{ textAlign: 'center' }}>Oops, Filme não encontrado!</h3>
    </Container>
  );
}

export default ErrorPage;
