import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Overlay, Container, Section, MenuLink, LinkWithScroll } from './styles';

function MobileMenu(props: InferProps<typeof MobileMenu.propTypes>) {
  return (
    <Overlay>

      <Container>

        <Section>
          <MenuLink 
            onClick={props.onToggleMenu}
            to="/"
            activeClassName="active" 
          >
            INÍCIO
          </MenuLink>
        </Section>

        <Section>
          <LinkWithScroll 
            onClick={props.onToggleMenu}
            to="catalog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            CATÁLOGO
          </LinkWithScroll>
        </Section>
        
      </Container>

    </Overlay>
  ) 
}

MobileMenu.propTypes = {
  onToggleMenu: PropTypes.func.isRequired
}

export default MobileMenu;