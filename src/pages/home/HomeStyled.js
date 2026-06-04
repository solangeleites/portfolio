import { mobile } from '../../queries/mediaQueries';
import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  background-size: auto;
  background-position: center;
  background-image: url('https://res.cloudinary.com/dgyubvlec/image/upload/v1779151199/noisy-texture-200x200-o10-d13-c-f3eee7-t0_nnprzd.png');
  z-index: 300;
`;
export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
  ${mobile} {
    flex-direction: column;
    gap: 25px;
  }
`;

export const Image = styled.img`
  height: 350px;
  ${mobile} {
    display: none;
  }
`;

export const Title = styled.h2``;
export const Subtitle = styled.h4``;
export const Paragraph = styled.p`
  font-size: 20px;
`;

export const Name = styled.h1`
  font-size: 80px;
  font-family: 'Anton', sans-serif;
  font-weight: 500;
  ${mobile} {
    font-size: 30px;
  }
`;

export const ParagraphAboutMe = styled.p`
  font-weight: 500;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
  ${mobile} {
    font-size: 16px;
    width: 325px;
  }
`;

export const BtnDown = styled(Link)`
  padding: 18px 40px;
  width: 200px;
  border-radius: 10px;
  text-align: center;
  transition: 0.3s ease-in;
  margin: 0 auto;
  border: 3px solid #2a3d74;
  font-family: 'Inter', sans-serif;
  cursor: pointer;

  &:hover {
    background: #2a3d74;
    color: white;
    transform: translateY(-2px);
    transition: 0.3s ease;
  }
`;
export const BtnDownContacto = styled.a`
  padding: 18px 40px;
  width: 200px;
  border-radius: 10px;
  text-align: center;
  transition: 0.3s ease-in;
  margin: 0 auto;
  background: #2a3d74;
  border: 3xp solid #2a3d74;
  color: white;
  font-family: 'Inter', sans-serif;
  &:hover {
    transform: translateY(-5px);
    transition: 0.3s ease;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 700px;
  gap: 25px;
  width: 1300px;
  ${mobile} {
    width: 320px;
    gap: 30px;
  }
`;
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 350px;
  border-radius: 10px;
  border: 1px solid var(--oliva);
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 25px;
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 20px;
  border-radius: 10px;
  background-color: var(--oliva);

  text-align: center;
  border: none;
  margin-top: 20px;

  a {
    text-decoration: none;
    list-style: none;
    background-color: var(--oliva);
    color: var(--beige);
  }
`;

//----------------------------------------------------------------------------------------

const move = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(40px, -20px) scale(1.1);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`;

export const GradientBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: #fefadf;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    opacity: 0.8;
    animation: ${move} 12s ease-in-out infinite;
  }

  &::before {
    width: 600px;
    height: 600px;
    background: #2a3d75;
    top: -150px;
    left: -150px;
  }

  &::after {
    width: 700px;
    height: 700px;
    background: #1b2750;
    bottom: -200px;
    right: -200px;
    animation-delay: -6s;
  }
`;
