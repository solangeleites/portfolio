import React from 'react';
import { ContainerRow, Container, Title, Paragraph } from './ContactStyled';

import Form from './form/Form';
import { Subtitle, Title2 } from '../projects/ProjectsStyled';


const Contact = () => {
  return (
    <Container id="contacto">

      <ContainerRow >
         <Title2>Hablemos!</Title2>
        <Subtitle>
          Podes pedir cotización, hacer consultas o simplemente saludar. Estamos para ayudarte a llevar tu presencia online al siguiente nivel.
          </Subtitle>
        <Form />
      </ContainerRow>
    </Container>
  );
};

export default Contact;
