import React from 'react';
import {
  HomeContainer,
  Image,
  Paragraph,
  Title,
  BtnDown,
  Container,
  ContainerRow,
  Subtitle,
  SecondContainer,
  CardContainer,
  Card,
  Name,
  ParagraphAboutMe,
  BtnDownContacto,
} from './HomeStyled';
import { Link as ScrollLink } from 'react-scroll';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import TypeWriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <HomeContainer id="Inicio">
        <Container>
          <Name>
            Desarrollo páginas web modernas que convierten visitantes en
            clientes.
          </Name>
          <ParagraphAboutMe>
            Creamos sitios web con estilo para que tu marca destaque y tus
            clientes encuentren exactamente lo que buscan, sin vueltas.
          </ParagraphAboutMe>
          <ContainerRow>
            <BtnDown href="#proyectos" alt="Servicios">
              Servicios
            </BtnDown>
            <BtnDownContacto
              href="https://wa.me/5491162182330?text=Hola%20UPage!%20Quiero%20más%20info"
              alt="Chatear con UPage!"
              target="_blank">
              Contactanos
            </BtnDownContacto>
          </ContainerRow>
        </Container>
      </HomeContainer>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
