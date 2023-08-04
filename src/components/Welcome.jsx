import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

function Welcome({ onClick }) {
  const [fadeout, setFadeout] = useState(false);

  const changeView = () => {
    setFadeout(true);

    const timeout = setTimeout(() => {
      onClick();
    }, 1100);

    return () => clearTimeout(timeout);
  };

  return (
    <Container fade={fadeout.toString()}>
      <WelcomeImage
        loading="lazy"
        fade={fadeout.toString()}
        src={"https://clarissemichard.com/welcomeAnim.cb031a15.gif"}
      />
      <InfoText fade={fadeout.toString()}>
        This website uses cookies to give you the best.
      </InfoText>
      <EnterButton fade={fadeout.toString()} onClick={changeView}>
        Enter
      </EnterButton>
    </Container>
  );
}

// rgb(232, 228, 224) ok
// rgb(255,224,133) ok
// rgb(253,207,182) ok
// rgb(255, 203, 219) ok
// rgb(255,212,175) ok
// rgb(235, 240, 255) ok
// rgb(207,238,228) ok
// rgb(255, 224, 133) ok
// rgb(241, 250, 228) ok
// rgb(232, 228, 224)

export default Welcome;

const colorChange = keyframes`
    0% {
        background-color: rgb(232, 228, 224);
    }

    10% {
        background-color: rgb(232, 228, 224);
    }

    10.1% {
        background-color: rgb(255,224,133);
    }

    20% {
        background-color: rgb(255,224,133);
    }

    20.1% {
        background-color: rgb(253,207,182);
    }

    30% {
        background-color: rgb(253,207,182);
    }

    30.1% {
        background-color: rgb(255, 203, 219);
    }

    40% {
        background-color: rgb(255, 203, 219);
    }

    40.1% {
        background-color: rgb(255,212,175);
    }

    50% {
        background-color: rgb(255,212,175);
    }

    50.1% {
        background-color: rgb(235, 240, 255);
    }

    60% {
        background-color: rgb(235, 240, 255);
    }

    60.1% {
        background-color: rgb(207,238,228);
    }

    70% {
        background-color: rgb(207,238,228);
    }

    70.1% {
        background-color: rgb(255, 224, 133);
    }

    80% {
        background-color: rgb(255, 224, 133);
    }

    80.1% {
        background-color: rgb(241, 250, 228);
    }

    90% {
        background-color: rgb(241, 250, 228);
    }

    90.1% {
        background-color: rgb(232, 228, 224);
    }

    100% {
        background-color: rgb(232, 228, 224);
    }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const fadeOutStyles = css`
  animation: ${fadeOutAnimation} 1s forwards;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${colorChange} 30s linear infinite;
`;

const WelcomeImage = styled.img`
  width: 300px;
  height: auto;
  ${({ fade }) => (fade === "true" ? fadeOutStyles : "")};
`;

const InfoText = styled.p`
  text-align: center;
  margin: 10px;
  font-size: 12px;
  text-transform: uppercase;
  ${({ fade }) => (fade === "true" ? fadeOutStyles : "")};
`;

const EnterButton = styled.button`
  padding: 7px;
  margin-top: 5px;
  width: 120px;
  font-size: 15px;
  background-color: transparent;
  border-radius: 50px;
  border: 1px solid black;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  ${({ fade }) => (fade === "true" ? fadeOutStyles : "")};

  &:hover {
    background-color: black;
    color: white;
  }
`;
