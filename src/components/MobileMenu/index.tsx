import { Overlay, Container, Section, MenuLink, LinkWithScroll } from './styles';

type Props = {
  onToggleMenu: () => void;
};

export default function MobileMenu({ onToggleMenu }: Props) {
  return (
    <Overlay>
      <Container>
        <Section>
          <MenuLink onClick={onToggleMenu} to="/" activeClassName="active">
            INÍCIO
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
            CATÁLOGO
          </LinkWithScroll>
        </Section>
      </Container>
    </Overlay>
  );
}
