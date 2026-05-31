import React from 'react';
import { NavbarContainer, Logo, LinkContainer, BlurOverlay } from './NavbarStyled';
import LinksItems from '../links/LinksItems';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import MenuToggle from '../menuToggle/MenuToggle';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

import {} from 'react-router-dom';

const Navbar = () => {
  const ctx = useContext(MenuContext);
  return (
    <NavbarContainer>

      {ctx.isMenuOpen && <BlurOverlay />}
      <Logo
        onClick={() => scroll.scrollToTop()}
        src="https://res.cloudinary.com/dgyubvlec/image/upload/v1769649699/logo_upage_npsrgm.png"
      />

      <LinkContainer isOpen={ctx.isMenuOpen}   onClick={ctx.toggleMenu}>
        <LinksItems to="inicio" smooth={true} duration={500} id="inicio">
          Inicio
        </LinksItems>

        <LinksItems to="servicios" smooth={true} duration={500} id="servicios">
          Servicios
        </LinksItems>

        <LinksItems to="contacto" smooth={true} duration={500} id="contacto">
          Contacto
        </LinksItems>
      </LinkContainer>
      <MenuToggle />
    </NavbarContainer>
  );
};

export default Navbar;
