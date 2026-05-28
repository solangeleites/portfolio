import styled from 'styled-components';
import { mobile } from '../../queries/mediaQueries';

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-image: url('/src/assets/noisy-texture-200x200-o10-d13-c-f3eee7-t0.png');
  background-size: auto;
  background-position: center;
  ${mobile} {
    background-color: green;
    gap: 15px;
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
    align-items: center;
    font-weight: 600;
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
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  width: 800px;
  font-size: 22px;
  text-align: center;
  ${mobile} {
    font-size: 14px;
    width: auto;
    margin: 0 15px;
    font-weight:500;
  }
`;
export const SubtitleEspecial = styled.p`
  color: #2a3d75;
      font-weight:600;

`;

export const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: white;
  width: 550px;
  ${mobile} {
    font-size: 14px;
    text-align: justify;
    max-width: 320px;
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

  ${mobile} {
    padding: 0px;
  }
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
    padding: 10px;
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
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
  transition: 0.3s ease-in;

  ${mobile} {
    flex-direction: column;
    max-width: 350px;
    margin: 0 auto;
    border-radius: 50px;
  }
`;

export const ImageCard = styled.img`
  height: 400px;
  border-radius: 999px;

  ${mobile} {
    height: 280px;
    border-radius: 50px;
  }
`;

export const ContainerButtonDeployAndGithub = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  ${mobile} {
    gap: 15px;
    text-align: center;
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
    background-color: green;
  }
`;
