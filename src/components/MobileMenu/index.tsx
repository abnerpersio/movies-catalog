import { useTranslation } from 'react-i18next';

import { routes } from '../../constants/routes';
import { Container, LinkWithScroll, MenuLink, Overlay } from './styles';

type Props = {
  onToggleMenu: () => void;
};

export function MobileMenu({ onToggleMenu }: Props) {
  const { t } = useTranslation();

  return (
    <Overlay>
      <Container>
        <section>
          <MenuLink onClick={onToggleMenu} to={routes.HOME} activeClassName="active">
            {t('titles.menu.home').toUpperCase()}
          </MenuLink>
        </section>

        <section>
          <LinkWithScroll
            onClick={onToggleMenu}
            to="catalog"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            {t('titles.menu.catalog').toUpperCase()}
          </LinkWithScroll>
        </section>
      </Container>
    </Overlay>
  );
}
