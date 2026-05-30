import styled from 'styled-components';
import { mobile, tablet } from '../../queries/mediaQueries';

export const MenuHamburger = styled.div`
  color: #2a3d75;
  height: 55%;
  width: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  display: none;
  ${mobile} {
    position: absolute;
    right: 25px;
    display: flex;
  }
`;

export const Icon = styled.span`
  position: relative;
  height: 3px;
  border-radius: 50px;
  width: 75%;
  background: ${(props) => (props.clicked ? 'transparent' : '#2a3d75')};
  display: inline-block;
  transition: all 0.3s;

  &::before,
  &::after {
    background-color: #2a3d75;
    content: '';
    width: 100%;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
    border-radius: 50px;
  }

  &::before {
    top: ${(props) => (props.clicked === true ? '0' : '-.5rem')};
    transform: ${(props) =>
      props.clicked === true ? 'rotate(135deg)' : 'rotate(0)'};
    height: 3px;
    border-radius: 50px;
  }

  &::after {
    top: ${(props) => (props.clicked === true ? '0' : '.5rem')};
    transform: ${(props) =>
      props.clicked === true ? 'rotate(-135deg)' : 'rotate(0)'};
    height: 3px;
    border-radius: 50px;
  }
`;
