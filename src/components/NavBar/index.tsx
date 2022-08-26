import { useTranslation } from 'react-i18next';

import { routes } from '../../constants/routes';
import { MobileMenu } from '../MobileMenu';
import { SearchBar } from '../Search';
import {
  Container,
  LinkWithScroll,
  MenuIcon,
  MenuLink,
  NavSection,
  SearchIcon,
  Section,
  TextLogo,
} from './styles';

type Props = {
  searchBarActive: boolean;
  onToggleSearch: () => void;
};

export function NavBar({ searchBarActive, onToggleSearch }: Props) {
  const { t } = useTranslation();

  return (
    <Container>
      <Section>
        <TextLogo to={routes.INDEX}>
          {t('project.first_name').toUpperCase()}{' '}
          <span className="bold">{t('project.second_name').toUpperCase()}</span>
        </TextLogo>
      </Section>

      <NavSection>
        <MenuLink activeClassName="active" to={routes.INDEX}>
          {t('titles.menu.home').toUpperCase()}
        </MenuLink>
        <LinkWithScroll to={routes.CATALOG} spy smooth offset={-70} duration={500}>
          {t('titles.menu.catalog').toUpperCase()}
        </LinkWithScroll>
        <SearchIcon className={searchBarActive ? 'active' : 'normal'} onClick={onToggleSearch} />
        {searchBarActive && <SearchBar />}
      </NavSection>
    </Container>
  );
}

type MobileProps = {
  menuActive: boolean;
  searchBarActive: boolean;
  onToggleSearch: () => void;
  onToggleMenu: () => void;
};

export function MobileNavBar({
  searchBarActive,
  onToggleMenu,
  onToggleSearch,
  menuActive,
}: MobileProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <Section>
        <MenuIcon className={searchBarActive ? 'active' : 'normal'} onClick={onToggleMenu} />
        {menuActive && <MobileMenu onToggleMenu={onToggleMenu} />}
      </Section>

      <Section>
        <TextLogo to="/">
          {t('project.first_name').toUpperCase()}{' '}
          <span className="bold">{t('project.second_name').toUpperCase()}</span>
        </TextLogo>
      </Section>

      <Section>
        <SearchIcon className={searchBarActive ? 'active' : 'normal'} onClick={onToggleSearch} />
        {searchBarActive && <SearchBar />}
      </Section>
    </Container>
  );
}
