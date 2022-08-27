import Navbar from "components/Navbar";
import Menu from "components/Menu";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Menu></Menu>
      <Main>
        <Navbar />
        <Wrapper>video cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
