import styled from 'styled-components';

import { tablet, mobile } from '../../queries/mediaQueries';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: fixed;
  top: 0px;
  z-index: 999;
  margin: 15px 50px;
  ${mobile} {
    margin: 0;
    width: 100%;
    background: url('https://res.cloudinary.com/dgyubvlec/image/upload/v1779151199/noisy-texture-200x200-o10-d13-c-f3eee7-t0_nnprzd.png');
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
  align-items: center;
  justify-content: space-evenly;
  display: none;

  ${mobile} {
    display: flex;
    flex-direction: column;
    background-image: url('https://res.cloudinary.com/dgyubvlec/image/upload/v1779151199/noisy-texture-200x200-o10-d13-c-f3eee7-t0_nnprzd.png');
    background-position: center;
    background-size: contain;
    position: absolute;
    border-bottom: 2px solid #2a3d74;
    width: 100%;
    top: 79px;
    right: 0;
    z-index: 200;
    overflow: hidden;
    height: ${(props) => (props.isOpen ? '350px' : '0')};
    transition: height 0.5 ease;
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    transition:
      height 0.5s ease-in-out,
      opacity 0.5s ease;
  }
`;

export const BlurOverlay = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.1);
  z-index: 100;
`;
