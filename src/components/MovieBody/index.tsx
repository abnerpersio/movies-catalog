import { useTranslation } from 'react-i18next';
import { Container, Heading } from './styles';

export function MovieBody() {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>
        <h1>{t('titles.trailer')}</h1>
      </Heading>
    </Container>
  );
}
