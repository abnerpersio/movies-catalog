import { useTranslation } from 'react-i18next';

import { Carousel } from '../Carousel';
import { EllipsePulsing } from '../EllipsePulsing';
import { Heading } from '../Heading';
import { Container } from './styles';

export function Releases() {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>
        <EllipsePulsing />

        <h4>
          <span className="bold">{t('titles.releases').toUpperCase()}</span>{' '}
          {t('titles.from_week').toUpperCase()}
        </h4>
      </Heading>

      <Carousel />
    </Container>
  );
}
