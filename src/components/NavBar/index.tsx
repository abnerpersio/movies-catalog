import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Container, MenuLink, LinkWithScroll, NavSection, Section, MenuIcon, SearchIcon, TextLogo } from './styles';

import SearchBar from '../Search'
import MobileMenu from '../MobileMenu'

function NavBar(props: InferProps<typeof NavBar.propTypes>) {
  function renderSearchBar() {
    if(props.searchBarActive) {
      return <SearchBar />
    }
  }

  return (
    <Container>

      <Section>
        <TextLogo to="/">
            SUNO <span className="bold">MOVIES</span>
        </TextLogo>
      </Section>

      <NavSection>
        <MenuLink activeClassName="active" to="/">INÍCIO</MenuLink>
        <LinkWithScroll 
          to="catalog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          CATÁLOGO
        </LinkWithScroll>
        <SearchIcon
          className={props.searchBarActive ? 'active' : 'normal'} 
          onClick={props.onToggleSearch} 
        />
        {renderSearchBar()}
      </NavSection>
      
    </Container>
  )
  
}

NavBar.propTypes = {
  searchBarActive: PropTypes.bool.isRequired,
  onToggleSearch: PropTypes.func.isRequired
}

function MobileNavBar(props: InferProps<typeof MobileNavBar.propTypes>) {
  function renderSearchBar() {
    if(props.searchBarActive) {
      return <SearchBar />
    }
  }

  function renderMobileMenu() {
    if(props.menuActive) {
      return <MobileMenu onToggleMenu={props.onToggleMenu} />
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
            SUNO <span className="bold">MOVIES</span>
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
  )
}

MobileNavBar.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  searchBarActive: PropTypes.bool.isRequired,
  onToggleSearch: PropTypes.func.isRequired,
  onToggleMenu: PropTypes.func.isRequired
}

export { MobileNavBar, NavBar };