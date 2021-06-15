import React, { useState } from 'react';
import { useMaxWidth } from '../../hooks/useWindowSize';
import { Container } from './styles';

import { MobileNavBar, NavBar } from '../NavBar'

function Header() {
  const [searchBarActive, setSearchBarActive] = useState(false)
  const [menuActive, setMenuActive] = useState(false)

  function toggleSearchBar() {
    setSearchBarActive((prevState) => !prevState)
  }

  function toggleMobileMenu() {
    setMenuActive((prevState) => !prevState)
  }

  const isTabletSize = useMaxWidth(920);
  
  if(isTabletSize) {
    return (
      <Container className={searchBarActive ? 'fixed' : ''}>
        <MobileNavBar 
          searchBarActive={searchBarActive} 
          onToggleSearch={toggleSearchBar} 
          menuActive={menuActive}
          onToggleMenu={toggleMobileMenu} 
        />
      </Container>
    )
  }

  return (
    <Container className={searchBarActive ? 'fixed' : ''}>
      <NavBar searchBarActive={searchBarActive} onToggleSearch={toggleSearchBar}  />
    </Container>
  )
}

export default Header;