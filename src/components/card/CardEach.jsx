import React from 'react';
import {
  Card,
  CardContainer2,
  Title,
  Subtitle,
  Paragraph,
  ContainerButtonDeployAndGithub,
  ContainerRolAndDuration,
  ImageCard,
} from '../../pages/projects/ProjectsStyled';
import Deploy from '../UI/deploy/Deploy';

const CardEach = ({ id, img, title, deploy, type, tech }) => {
  return (
    <Card>
      <ImageCard src={img} alt={title} />
      <CardContainer2>
        <ContainerButtonDeployAndGithub>
          <Title>{title}</Title>
          <Deploy href={deploy} />
        </ContainerButtonDeployAndGithub>
        <Paragraph>{type}</Paragraph>
        <Paragraph>{tech}</Paragraph>
      </CardContainer2>
    </Card>
  );
};

export default CardEach;
