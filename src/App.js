import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import styled from "styled-components";

function App() {
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
