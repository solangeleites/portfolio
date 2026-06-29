import {
  SecondContainer,
  Title,
  Subtitle,
  CardContainer,
  Title2,
  SubtitleEspecial,
  SwiperStyled,
} from './ProjectsStyled';
import CardEach from '../../components/card/CardEach';
import { Proyectos } from '../../data/Proyectos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Projects = () => {
  const data = Proyectos;
  return (
    <SecondContainer id="servicios">
      <Title2>Servicios</Title2>
      <Subtitle>
        Una selección de trabajos donde el diseño y la tecnología se encuentran.
        Transformamos ideas en experiencias digitales que se sientan{' '}
        <SubtitleEspecial>simples, modernas y atractivas.</SubtitleEspecial>
      </Subtitle>
      <CardContainer>
        <SwiperStyled
          modules={[Navigation, Autoplay]}
          speed={1000}
          autoplay={{ delay: 3500 }} // Cambia cada 3 segundos
          spaceBetween={25} // Espacio entre cards
          slidesPerView={1} // Cuántas se ven a la vez
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
        >
          {data &&
            data.map((proyecto) => (
              <SwiperSlide key={proyecto.id}>
                <CardEach {...proyecto} />
              </SwiperSlide>
            ))}
        </SwiperStyled>
      </CardContainer>
    </SecondContainer>
  );
};

export default Projects;
