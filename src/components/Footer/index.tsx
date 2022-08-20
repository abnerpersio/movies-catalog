import { useTranslation } from 'react-i18next';
import { Container } from './styles';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Container>
      <span>
        © {year} {t('titles.footer.description')}
      </span>
    </Container>
  );
}
