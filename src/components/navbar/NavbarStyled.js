import styled from 'styled-components';

import { tablet, mobile } from '../../queries/mediaQueries';

// export const NavbarContainer = styled.nav`
//   /* Estructura original del Navbar */

//   z-index: 100;
//   padding: 0 50px;
//   border-bottom: 1px solid grey;
//
// `;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0px 92px;
  background-image: url('/src/assets/noisy-texture-200x200-o10-d13-c-f3eee7-t0.png');
  background-position: center;
  background-size: contain;
  position: fixed;
  top: 0px;
  z-index: 999;
  ${mobile} {
    padding: 0px;
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 80px;
  padding-top: 10px;

  ${mobile} {
    font-size: 18px;
    margin-left: 25px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${mobile} {
    flex-direction: column;
    background-image: url('/src/assets/noisy-texture-200x200-o10-d13-c-f3eee7-t0.png');
    background-position: center;
    background-size: contain;
    position: absolute;
    border-bottom: 2px solid #2a3d74;
    width: 100%;
    top: 79px;
    right: 0;
    height: calc(100vw - 100px);
    z-index: 5;
    transition: all 0.5s ease-in;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0%)' : 'translateX(200%)'};
    height: calc(100vh - 80px);
  }
`;
