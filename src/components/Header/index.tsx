import { useState } from 'react';

import { NavBar } from '../NavBar';
import { Container } from './styles';

export function Header() {
  const [searchBarActive, setSearchBarActive] = useState<boolean>(false);

  function toggleSearchBar() {
    setSearchBarActive((prevState) => !prevState);
  }

  return (
    <Container className={searchBarActive ? 'fixed' : ''}>
      <NavBar searchBarActive={searchBarActive} onToggleSearch={toggleSearchBar} />
    </Container>
  );
}
