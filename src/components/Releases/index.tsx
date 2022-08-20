import { Container, Heading, Title, EllipsePulsing } from './styles';

import { Carousel } from '../Carousel';
import { useTranslation } from 'react-i18next';

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
