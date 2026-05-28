import styled from 'styled-components';
import { mobile, tablet } from '../../queries/mediaQueries';

export const MenuHamburger = styled.div`
  color: var(--verde);
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
  height: 2.5px;
  border-radius:50px;
  width: 75%;
  background: ${(props) => (props.clicked ? 'transparent' : 'var(--verde)')};
  display: inline-block;
  transition: all 0.3s;

  &::before,
  &::after {
    background-color: var(--verde);
    content: '';
    width: 100%;
    height: 2.5px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
      height: 2.5px;
  border-radius:50px;
  }

  &::before {
    top: ${(props) => (props.clicked === true ? '0' : '-.5rem')};
    transform: ${(props) =>
      props.clicked === true ? 'rotate(135deg)' : 'rotate(0)'};
        height: 2.5px;
  border-radius:50px;
  }

  &::after {
    top: ${(props) => (props.clicked === true ? '0' : '.5rem')};
    transform: ${(props) =>
      props.clicked === true ? 'rotate(-135deg)' : 'rotate(0)'};
        height: 2.5px;
  border-radius:50px;
  }
`;
