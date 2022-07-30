import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Greeting from "./pages/Greeting";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import Calendar from "./pages/Calendar";

function App() {
  SwiperCore.use([Navigation]);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    console.log("실행");
    setScreenSize();
  }, []);

  const swiperParams = {
    navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
    onBeforeInit: (swiper) => {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    },
    onSlideChange: (e) => setCurrentIdx(e.activeIndex),
  };

  return (
    <Container>
      <GlobalStyle />
      <Swiper
        {...swiperParams}
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        // navigation
      >
        <SwiperSlide>
          <Home />
        </SwiperSlide>
        <SwiperSlide>
          <Greeting />
        </SwiperSlide>
        <SwiperSlide>
          <Calendar />
        </SwiperSlide>
        <Next ref={nextRef}>
          <MdArrowForwardIos />
        </Next>

        <Prev ref={prevRef} isActive={currentIdx !== 0}>
          <MdArrowBackIos />
        </Prev>
      </Swiper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Next = styled.div`
  cursor: pointer;
  text-align: end;
  width: 50px;
  position: absolute;
  top: 30%;
  right: 3%;
  font-size: 3rem;
  opacity: 0.5;
  z-index: 10;
`;

const Prev = styled(Next)`
  left: 5%;
  display: ${({ isActive }) => (isActive ? "block" : "none")};
`;
