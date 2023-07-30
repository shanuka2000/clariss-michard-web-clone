import styled from "styled-components";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";
import Content from "./components/Content";

function App() {
  const [viewChange, setViewChnage] = useState(false);

  const handleViewChange = () => {
    setViewChnage(true);
  };

  useEffect(() => {
    console.log(viewChange);
  }, [viewChange]);

  return (
    <Container>
      {!viewChange ? (
        <Welcome
          onClick={() => {
            handleViewChange();
          }}
        />
      ) : (
        <Content />
      )}
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
