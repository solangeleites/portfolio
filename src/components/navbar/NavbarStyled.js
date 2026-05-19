import styled from 'styled-components';

import { tablet, mobile } from '../../queries/mediaQueries';

export const NavbarContainer = styled.nav`
  /* Estructura original del Navbar */
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 0 50px;
  border-bottom: 1px solid grey;
  background-image: url('https://res.cloudinary.com/dgyubvlec/image/upload/v1779151199/noisy-texture-200x200-o10-d13-c-f3eee7-t0_nnprzd.png');
  background-size: contain;
  background-position: center;
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 80px;
  padding-top: 10px;

  ${mobile} {
    font-size: 18px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 80px;
  right: 0;

  flex-direction: column;
  width: 100%;
  background: white;

  border-left: 1px solid var(--oliva);
  border-bottom: 1px solid var(--oliva);

  height: calc(100vh - 60px);
  z-index: 5;

  transition: all 1s ease-in-out;

  transform: ${(props) =>
    props.isOpen ? 'translateX(0%)' : 'translateX(120%)'};
`;
