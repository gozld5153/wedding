import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import styled from "styled-components";
import { useEffect } from "react";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    console.log("실행");
    setScreenSize();
  });

  return (
    <Container>
      <GlobalStyle />
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
