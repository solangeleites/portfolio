import styled from 'styled-components';
import { mobile } from '../../queries/mediaQueries';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://res.cloudinary.com/dgyubvlec/image/upload/v1779151199/noisy-texture-200x200-o10-d13-c-f3eee7-t0_nnprzd.png');
  background-size: auto;
  background-position: center;
  height: 95vh;

  ${mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  text-align: center;
`;
export const Title = styled.h2``;

export const Subtitle = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  font-family: 'Inter', sans-serif;

  ${mobile} {
    font-size: 14px;
    max-width:350px;
  }
`;
export const Paragraph = styled.p`
  text-align: start;
  a {
    text-decoration: none;
    margin-left: 10px;
  }
`;
