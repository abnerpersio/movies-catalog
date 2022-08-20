import { useTranslation } from 'react-i18next';

import { Carousel } from '../Carousel';
import { Container, EllipsePulsing, Heading, Title } from './styles';

export function Releases() {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>
        <EllipsePulsing />
        <Title>
          <span className="bold">{t('titles.releases').toUpperCase()}</span>{' '}
          {t('titles.from_week').toUpperCase()}
        </Title>
      </Heading>

      <Carousel />
    </Container>
  );
}
