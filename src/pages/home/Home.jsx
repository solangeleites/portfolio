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
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <>
      <HomeContainer id="inicio">
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
            <BtnDown to="servicios" smooth={true} duration={500} offset={-80}>
              Servicios
            </BtnDown>
            <BtnDownContacto
              href="https://wa.me/5491162182330?text=Hola%20UPage!%20Quiero%20más%20info"
              alt="Chatear con UPage!"
              target="_blank"
            >
              Contáctanos
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
