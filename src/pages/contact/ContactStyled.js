import styled from 'styled-components';
import { mobile } from '../../queries/mediaQueries';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 50px 0;
  background-image: url('/src/assets/noisy-texture-200x200-o10-d13-c-f3eee7-t0.png');
  background-size: auto;
  background-position: center;
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
  padding: 10px;
  text-align: center;

  ${mobile} {
    width: 80%;
  }
`;
export const Title = styled.h2``;

export const Subtitle = styled.p`
text-align: center;
  font-weight: 400;
  font-size: 22px;
  font-family:
    'Inter',
    sans-serif ${mobile} {
    font-size: 14px;
  }
`

;
export const Paragraph = styled.p`
  text-align: start;
  a {
    text-decoration: none;
    margin-left: 10px;
  }
`;
