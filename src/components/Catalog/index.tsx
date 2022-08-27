import { useTranslation } from 'react-i18next';

import { CatalogBody } from '../CatalogBody';
import { EllipsePulsing } from '../EllipsePulsing';
import { Heading } from '../Heading';
import { Container } from './styles';

export function Catalog() {
  const { t } = useTranslation();

  return (
    <Container id="catalog">
      <section className="catalog-header">
        <Heading>
          <EllipsePulsing />

          <h4>
            <span className="bold">{t('titles.catalog').toUpperCase()}</span>{' '}
            {t('titles.complete').toUpperCase()}
          </h4>
        </Heading>
      </section>

      <CatalogBody />
    </Container>
  );
}
