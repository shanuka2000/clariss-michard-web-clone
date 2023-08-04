import styled, { css, keyframes } from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

function Content() {
  const [lang, setLang] = useState("FR");

  return (
    <Container>
      <NavSection>
        <RotatingImage src={"../src/assets/Mediamodifier-Design.svg"} />
        <TitleTextWrapper>
          <TItleCharacter>H</TItleCharacter>
          <TItleCharacter>E</TItleCharacter>
          <TItleCharacter>L</TItleCharacter>
          <TItleCharacter>L</TItleCharacter>
          <TItleCharacter>O</TItleCharacter>
        </TitleTextWrapper>
        <ColorChangeButton>Click</ColorChangeButton>
      </NavSection>
      <ContentSection>
        <ParagraphWrapper>
          <ParaLine>
            I{"`"}m Clarisse,{" "}
            <WordSet>
              Graduated <School />
            </WordSet>{" "}
            as a graphic designer specializing in the
            <CustomBold ml="left">web</CustomBold>.
          </ParaLine>
          <ParaLine>
            I work as a <Flower /> freelance webdesigner and graphist. I have a
            weakness for <Language /> digital,
          </ParaLine>
          <ParaLine>
            Especially for designing custom websites with a{" "}
            <CustomBold>Strong</CustomBold> user experiance. I also work on
          </ParaLine>
          <ParaLine>
            Branding projects <Visibility /> where I like to build a strong
            visual identity with all print and
          </ParaLine>
          <ParaLine>
            digital communication. During free time, I <Favorite /> to create cd
            covers.
          </ParaLine>
          <ParaLine>
            <ArrowForward run="true" />I{" "}
            <WordSet>
              would <FavoriteBorder />
            </WordSet>{" "}
            to help you on <WordSet>your projects.</WordSet>
          </ParaLine>
        </ParagraphWrapper>
      </ContentSection>
      <FooterSection>
        <ContactWrapper>
          <ArrowForward run="false" />
          <ContactText>Contact</ContactText>
        </ContactWrapper>
        <LanguageChangeButton>
          <LanguageChangeButtonText>{lang}</LanguageChangeButtonText>
        </LanguageChangeButton>
        <QuickLinks>
          <CustomQuickLink href="#">Insta</CustomQuickLink>
          <CustomQuickLink href="#">Dribbble</CustomQuickLink>
          <CustomQuickLink href="#">Linkedin</CustomQuickLink>
          <CustomQuickLink href="#">Behance</CustomQuickLink>
          <CustomQuickLink href="#">Okey studio</CustomQuickLink>
        </QuickLinks>
      </FooterSection>
    </Container>
  );
}

export default Content;

// animations
const rotateLogo = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);
  }
`;

const bounceSide = keyframes`
  16.65% {
    transform: translateX(5px);
  }

  33.3% {
    transform: translateX(-5px);
  }

  49.95% {
    transform: translateX(3px);
  }

  66.6% {
    transform: translateX(-1px);
  }

  83.25% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(0);
  }
`;

const bounceSlow = keyframes`
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-3px);
    }

    100% {
      transform: translateY(0px);
    }
`;

const vibrate = keyframes`
  68.25% {
    transform: translateX(0) rotate(0);
  }

  70% {
    transform: translateX(3px) rotate(2deg);
  }

  73.5% {
    transform: translateX(-3px) rotate(-2deg);
  }

  77% {
    transform: translateX(3px) rotate(2deg);
  }

  80.5% {
    transform: translateX(-3px) rotate(-2deg);
  }

  84% {
    transform: translateX(2px) rotate(1deg);;
  }

  87.5% {
    transform: translateX(-2px) rotate(-1deg);
  }

  91% {
    transform: translateX(2px) rotate(1deg);
  }

  94.5% {
    transform: translateX(-2px) rotate(-1deg);
  }

  98% {
    transform: translateX(1px) rotate(0);
  }

  100% {
    transform: translateX(-1px) rotate(0);
  }
`;

const slowScale = keyframes`
  25% {
    transform: scale(1.1);
  }

  75% {
    transform: scale(0.9);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const NavSection = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
`;

const RotatingImage = styled.img`
  width: 6%;
  height: auto;
  animation: ${rotateLogo} 3.3s linear forwards infinite;
`;

const TitleTextWrapper = styled.div`
  display: flex;
`;

const TItleCharacter = styled.p`
  font-family: "Messapia-Bold";
  font-size: 12px;
`;

const ColorChangeButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 10px;
  font-family: "Messapia-Bold";
  background-color: transparent;
  border-radius: 50px;
  border: 1px solid black;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.6s ease-in-out;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ParagraphWrapper = styled.p`
  text-transform: uppercase;
  width: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;
  line-height: 45px;
`;

const ParaLine = styled.span`
  display: flex;
  align-items: center;
`;

const WordSet = styled.span`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const CustomBold = styled.span`
  font-weight: 800;
  margin: ${(props) => (props.ml === "left" ? "0 0 0 5px" : "0 5px")};
`;

// Icons
const School = styled(SchoolIcon)`
  margin: 0 5px;
  animation: ${bounceSlow} 1s linear infinite;
`;

const Flower = styled(FilterVintageIcon)`
  margin: 0 5px;
  animation: ${rotateLogo} 3.3s linear forwards infinite;
`;

const Language = styled(LanguageIcon)`
  margin: 0 5px;
  transform: perspective(1px) translateZ(0);
  animation: ${vibrate} 1.5s linear infinite;
`;

const Visibility = styled(VisibilityIcon)`
  margin: 0 5px;
  animation: ${bounceSlow} 1s linear infinite;
`;

const Favorite = styled(FavoriteIcon)`
  margin: 0 5px;
  animation: ${slowScale} 1s linear infinite;
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin: 0 5px;
  animation: ${(props) =>
    props.run === "true"
      ? css`
          ${bounceSide} 2s ease-in-out infinite
        `
      : ""};

  width: 0.8em !important;
  height: 0.8em !important;
`;

const FavoriteBorder = styled(FavoriteBorderIcon)`
  margin: 0 5px;
  animation: ${slowScale} 1s linear infinite;
`;

const FooterSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 30px 40px;
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const ContactText = styled.span`
  font-family: "Messapia-Bold";
  text-transform: uppercase;
  transition: all 0.6s ease;
  margin-top: 3px;

  &:hover {
    letter-spacing: 5px;
  }
`;

const LanguageChangeButton = styled.button`
  padding: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid black;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const LanguageChangeButtonText = styled.p`
  font-family: "Messapia-Bold";
  margin-top: 5px;
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CustomQuickLink = styled.a`
  font-family: "Messapia-Bold";
  text-transform: uppercase;
  text-decoration: none;
  font-size: 11px;
  line-height: 23px;
  transition: all 0.6s ease;
  color: black;

  &:hover {
    letter-spacing: 2px;
  }
`;
