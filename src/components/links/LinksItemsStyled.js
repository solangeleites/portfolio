import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { tablet, mobile } from '../../queries/mediaQueries';
import { Link as ScrollLink } from 'react-scroll';

export const LinkItemStyled = styled(ScrollLink)`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 50px;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  &.active {
    color: #2a3d75;
  }
  position: relative;
  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: #2a3d75;
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transition: transform 5s ease;
  }
  &:focus::after,
  &:active::after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
  ${mobile} {
    font-size: 18px;
    font-weight:500;
  }
`;
