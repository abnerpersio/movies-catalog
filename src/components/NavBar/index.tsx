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

  return (
    <Container>
      <Section>
        <TextLogo to="/">
          {t('project.first_name').toUpperCase()}{' '}
          <span className="bold">{t('project.second_name').toUpperCase()}</span>
        </TextLogo>
      </Section>

      <NavSection>
        <MenuLink activeClassName="active" to="/">
          {t('titles.menu.home').toUpperCase()}
        </MenuLink>
        <LinkWithScroll to="catalog" spy={true} smooth={true} offset={-70} duration={500}>
          {t('titles.menu.catalog').toUpperCase()}
        </LinkWithScroll>
        <SearchIcon
          className={props.searchBarActive ? 'active' : 'normal'}
          onClick={props.onToggleSearch}
        />
        {props.searchBarActive && <SearchBar />}
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
  const { t } = useTranslation();

  return (
    <Container>
      <Section>
        <MenuIcon
          className={props.searchBarActive ? 'active' : 'normal'}
          onClick={props.onToggleMenu}
        />
        {props.menuActive && <MobileMenu onToggleMenu={props.onToggleMenu} />}
      </Section>

      <Section>
        <TextLogo to="/">
          {t('project.first_name').toUpperCase()}{' '}
          <span className="bold">{t('project.second_name').toUpperCase()}</span>
        </TextLogo>
      </Section>

      <Section>
        <SearchIcon
          className={props.searchBarActive ? 'active' : 'normal'}
          onClick={props.onToggleSearch}
        />
        {props.searchBarActive && <SearchBar />}
      </Section>
    </Container>
  );
}
