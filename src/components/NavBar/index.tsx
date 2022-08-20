import {
  Container,
  MenuLink,
  LinkWithScroll,
  NavSection,
  Section,
  MenuIcon,
  SearchIcon,
  TextLogo,
} from './styles';

import SearchBar from '../Search';
import MobileMenu from '../MobileMenu';
import { useTranslation } from 'react-i18next';

type Props = {
  searchBarActive: boolean;
  onToggleSearch: () => void;
};

export function NavBar(props: Props) {
  const { t } = useTranslation();

  function renderSearchBar() {
    if (props.searchBarActive) {
      return <SearchBar />;
    }
  }

  return (
    <Container>
      <Section>
        <TextLogo to="/">
          MOVIES <span className="bold">CATALOG</span>
        </TextLogo>
      </Section>

      <NavSection>
        <MenuLink activeClassName="active" to="/">
          {t('menu.home').toUpperCase()}
        </MenuLink>
        <LinkWithScroll to="catalog" spy={true} smooth={true} offset={-70} duration={500}>
          {t('menu.catalog').toUpperCase()}
        </LinkWithScroll>
        <SearchIcon
          className={props.searchBarActive ? 'active' : 'normal'}
          onClick={props.onToggleSearch}
        />
        {renderSearchBar()}
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

export function MobileNavBar(props: MobileProps) {
  function renderSearchBar() {
    if (props.searchBarActive) {
      return <SearchBar />;
    }
  }

  function renderMobileMenu() {
    if (props.menuActive) {
      return <MobileMenu onToggleMenu={props.onToggleMenu} />;
    }
  }

  return (
    <Container>
      <Section>
        <MenuIcon
          className={props.searchBarActive ? 'active' : 'normal'}
          onClick={props.onToggleMenu}
        />
        {renderMobileMenu()}
      </Section>

      <Section>
        <TextLogo to="/">
          MOVIES <span className="bold">CATALOG</span>
        </TextLogo>
      </Section>

      <Section>
        <SearchIcon
          className={props.searchBarActive ? 'active' : 'normal'}
          onClick={props.onToggleSearch}
        />
        {renderSearchBar()}
      </Section>
    </Container>
  );
}
