import styled from 'styled-components';
import { mobile } from '../../queries/mediaQueries';

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-image: url('https://res.cloudinary.com/dgyubvlec/image/upload/v1779151199/noisy-texture-200x200-o10-d13-c-f3eee7-t0_nnprzd.png');
  background-size: auto;
  background-position: center;

  ${mobile} {
    align-items: center;
  }
`;

export const SecondContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  ${mobile} {
    height: 600px;
    gap: 0px;
  }
`;
export const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  color: white;
  text-shadow: -1px 3px 5px rgba(67, 67, 67, 0.83);
  ${mobile} {
    font-size: 18px;
  }
`;

export const Title2 = styled.p`
  font-size: 32px;
  font-weight: 900;
  font-family: 'Space Grotesk', sans-serif;
  ${mobile} {
    font-size: 18px;
  }
`;
export const Subtitle = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  width:950px;
  font-family: 'Inter', sans-serif;
  ${mobile} {
    font-size: 14px;
  }
`;
export const SubtitleEspecial = styled.p`
  color: #2a3d75;
  font-weight: 600;
`;

export const Paragraph = styled.p`
  color: white;
  font-weight: 400;
  font-size: 19px;
  font-family: 'Inter', sans-serif;
  ${mobile} {
    font-size: 14px;
  }

  ${mobile} {
    font-size: 14px;
    width: 90%;
    text-align: center;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 25px;
  border: 2px solid orange;
  ${mobile} {
    justify-content: space-evenly;
  }
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 25px;
  border-radius: 5px;
  background-color: pink;
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

export const CardContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  overflow: hidden;
`;
export const CardContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 12px;
  flex: 1;
  padding: 20px;

  ${mobile} {
    align-items: center;
    width: 100%;
    padding: 10px;
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  min-height: 450px;
  padding: 24px;
  box-sizing: border-box;
  background: #2a3d74;
  color: white;
  border-radius: 999px;
  padding: 18px 36px;
  font-weight: 500;
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(42, 61, 116, 0.2);
  }
  ${mobile} {
    flex-direction: column;
    max-width: 320px;
    margin: 0 auto;
    min-height: auto;
  }
`;

export const ImageCard = styled.img`
  height: 400px;
  border-radius: 999px;
`;

export const ContainerButtonDeployAndGithub = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  ${mobile} {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
export const ContainerRolAndDuration = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;

  ${mobile} {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;
