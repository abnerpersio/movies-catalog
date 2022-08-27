import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { routes } from '../../constants/routes';
import { MobileMenu } from '../MobileMenu';
import { SearchBar } from '../Search';
import { MenuIcon } from '../icons/menu';
import { SearchIcon } from '../icons/search';
import { Container, LinkWithScroll, MenuLink } from './styles';

type Props = {
  searchBarActive: boolean;
  onToggleSearch: () => void;
};

export function NavBar({ searchBarActive, onToggleSearch }: Props) {
  const { t } = useTranslation();
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleToggleMenu = useCallback(() => setIsMenuActive((prevState) => !prevState), []);

  return (
    <Container>
      <section className="mobile-menu">
        <MenuIcon className={searchBarActive ? 'active' : 'normal'} onClick={handleToggleMenu} />
        {isMenuActive && <MobileMenu onToggleMenu={handleToggleMenu} />}
      </section>

      <section>
        <Link className="logo" to={routes.INDEX}>
          {t('project.first_name').toUpperCase()}{' '}
          <span className="bold">{t('project.second_name').toUpperCase()}</span>
        </Link>
      </section>

      <section className="nav">
        <MenuLink className="desktop-menu" activeClassName="active" to={routes.INDEX}>
          {t('titles.menu.home').toUpperCase()}
        </MenuLink>
        <LinkWithScroll
          className="desktop-menu"
          to={routes.CATALOG}
          spy
          smooth
          offset={-70}
          duration={500}
        >
          {t('titles.menu.catalog').toUpperCase()}
        </LinkWithScroll>

        <SearchIcon className={searchBarActive ? 'active' : 'normal'} onClick={onToggleSearch} />
        {searchBarActive && <SearchBar />}
      </section>
    </Container>
  );
}
