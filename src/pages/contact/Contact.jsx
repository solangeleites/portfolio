import React from 'react';
import { ContainerRow, Container, Title, Paragraph } from './ContactStyled';
import { Subtitle } from '../projects/ProjectsStyled';
import { Title2, SubtitleEspecial } from '../projects/ProjectsStyled';


const Contact = () => {
  return (
    <Container id="contacto">

      <ContainerRow >
         <Title2>Hablemos!</Title2>
        <Subtitle>
          Podes pedir cotización para tu pagina web, consultar por opciones que se adecuen a tus necesidades. <SubtitleEspecial>Estamos para ayudarte a llevar tu presencia online al siguiente nivel.</SubtitleEspecial>
          </Subtitle>
        <Form />
      </ContainerRow>
    </Container>
  );
};

export default Contact;
