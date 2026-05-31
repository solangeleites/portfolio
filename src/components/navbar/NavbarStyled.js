import styled from 'styled-components';

import { tablet, mobile } from '../../queries/mediaQueries';

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
  justify-content: space-evenly;

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
    z-index: 9999;
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
  z-index: 9998;
`;
