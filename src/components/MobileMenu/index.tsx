import { useTranslation } from 'react-i18next';
import { routes } from '../../constants/routes';
import { Overlay, Container, Section, MenuLink, LinkWithScroll } from './styles';

type Props = {
  onToggleMenu: () => void;
};

export default function MobileMenu({ onToggleMenu }: Props) {
  const { t } = useTranslation();

  return (
    <Overlay>
      <Container>
        <Section>
          <MenuLink onClick={onToggleMenu} to={routes.HOME} activeClassName="active">
            {t('titles.menu.home').toUpperCase()}
          </MenuLink>
        </Section>

        <Section>
          <LinkWithScroll
            onClick={onToggleMenu}
            to="catalog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {t('titles.menu.catalog').toUpperCase()}
          </LinkWithScroll>
        </Section>
      </Container>
    </Overlay>
  );
}
