import { useTranslation } from 'react-i18next';

import { MovieDetails } from '../../types/movies';
import { Container, Heading } from './styles';

type Props = {
  movie: MovieDetails;
};

// eslint-disable-next-line no-unused-vars
export function MovieBody({ movie }: Props) {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>
        <h1>{t('titles.about')}</h1>
      </Heading>
    </Container>
  );
}
