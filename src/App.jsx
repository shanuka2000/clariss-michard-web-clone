import styled from "styled-components";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Container>
      <Welcome />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
