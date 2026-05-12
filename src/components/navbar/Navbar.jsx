import React from 'react';
import { NavbarContainer, Logo, LinkContainer } from './NavbarStyled';
import LinksItems from '../links/LinksItems';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import MenuToggle from '../menuToggle/MenuToggle';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

import {} from 'react-router-dom';

const Navbar = () => {
  const ctx = useContext(MenuContext);
  return (

    <NavbarContainer >
    <Logo onClick={() => scroll.scrollToTop()} src='https://res.cloudinary.com/dgyubvlec/image/upload/v1769649699/logo_upage_npsrgm.png'/>
      
    <LinkContainer  isOpen={ctx.isMenuOpen}>
    <LinksItems to="inicio" smooth={true} duration={500}>
        Inicio
      </LinksItems>

       <LinksItems to="servicios" smooth={true} duration={500}>
        Servicios
      </LinksItems>

      <LinksItems to="contact" smooth={true} duration={500}>
        Contacto
      </LinksItems>
      
    </LinkContainer>
    <MenuToggle />
  </NavbarContainer>
  );
};

export default Navbar;
