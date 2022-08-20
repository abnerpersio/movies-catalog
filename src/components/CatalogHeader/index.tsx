import { useTranslation } from 'react-i18next';
import { Container, Heading, Title, EllipsePulsing } from './styles';

function CatalogHeader() {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>
        <EllipsePulsing />
        <Title>
          <span className="bold">{t('titles.catalog').toUpperCase()}</span>{' '}
          {t('titles.complete').toUpperCase()}
        </Title>
      </Heading>
    </Container>
  );
}

export default CatalogHeader;
