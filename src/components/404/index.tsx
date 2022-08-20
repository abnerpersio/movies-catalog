import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.section`
  padding: 1rem;
  padding-top: 3rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h3 {
    text-align: center;
  }
`;

export function ErrorPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <h3>{t('titles.errors.movie_not_found')}</h3>
    </Container>
  );
}
