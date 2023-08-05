import styled, { css, keyframes } from "styled-components";
import SchoolIcon from "@mui/icons-material/School";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import LanguageIcon from "@mui/icons-material/Language";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";
import CustomIcon from "./CustomIcon";

function Content() {
  const colors = [
    { background: "#E8E4E0", other: "#000000" }, // default
    { background: "rgb(45, 45, 45)", other: "rgb(214, 255, 0)" }, // 1st click
    { background: "rgb(186, 85, 74)", other: "rgb(255, 224, 133)" }, // 2nd click
    { background: "rgb(253, 207, 182)", other: "rgb(229, 58, 58)" }, // 3rd click
    { background: "rgb(31, 98, 70)", other: "rgb(255, 188, 210)" }, // 4th click
    { background: "rgb(32, 32, 32)", other: "rgb(255, 255, 255)" },
    { background: "rgb(66, 80, 62)", other: "rgb(255, 212, 175)" },
    { background: "rgb(134, 140, 125)", other: "rgb(241, 250, 228)" },
    { background: "rgb(207, 238, 228)", other: "rgb(229, 58, 58)" },
    { background: "rgb(71, 66, 49)", other: "rgb(239, 234, 53)" },
    { background: "rgb(153, 163, 191)", other: "rgb(235, 240, 255)" },
    { background: "rgb(255, 206, 176)", other: "rgb(53, 82, 242)" },
    { background: "rgb(54, 104, 174)", other: "rgb(255, 203, 219)" },
  ];

  const [lang, setLang] = useState("FR");
  const [index, setIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(
    colors[index].background
  );
  const [otherColor, setOtherColor] = useState(colors[index].other);

  useEffect(() => {
    console.log("Clicked index " + index);
  }, [index]);

  const changeColor = () => {
    const totalLength = colors.length;

    if (index >= totalLength - 1) {
      console.log("Running if ");
      setIndex(0);
      setBackgroundColor(colors[0].background);
      setOtherColor(colors[0].other);
      return;
    }

    setIndex(index + 1);
    setBackgroundColor(colors[index + 1].background);
    setOtherColor(colors[index + 1].other);
  };

  return (
    <Container background={backgroundColor} other={otherColor}>
      <NavSection>
        {/* <RotatingImage
          style={{ stroke: "red" }}
          src={"../src/assets/Mediamodifier-Design.svg"}
        /> */}
        <CustomIcon color={otherColor} />
        <TitleTextWrapper>
          <TItleCharacter background={backgroundColor} other={otherColor}>
            H
          </TItleCharacter>
          <TItleCharacter background={backgroundColor} other={otherColor}>
            E
          </TItleCharacter>
          <TItleCharacter background={backgroundColor} other={otherColor}>
            L
          </TItleCharacter>
          <TItleCharacter background={backgroundColor} other={otherColor}>
            L
          </TItleCharacter>
          <TItleCharacter background={backgroundColor} other={otherColor}>
            O
          </TItleCharacter>
        </TitleTextWrapper>
        <ColorChangeButton
          background={backgroundColor}
          other={otherColor}
          onClick={changeColor}
        >
          Click
        </ColorChangeButton>
      </NavSection>
      <ContentSection>
        <ParagraphWrapper>
          <ParaLine background={backgroundColor} other={otherColor}>
            I{"`"}m Clarisse,{" "}
            <WordSet>
              Graduated <School />
            </WordSet>{" "}
            as a graphic designer specializing in the
            <CustomBold ml="left">web</CustomBold>.
          </ParaLine>
          <ParaLine background={backgroundColor} other={otherColor}>
            I work as a <Flower /> freelance webdesigner and graphist. I have a
            weakness for <Language /> digital,
          </ParaLine>
          <ParaLine background={backgroundColor} other={otherColor}>
            Especially for designing custom websites with a{" "}
            <CustomBold>Strong</CustomBold> user experiance. I also work on
          </ParaLine>
          <ParaLine background={backgroundColor} other={otherColor}>
            Branding projects <Visibility /> where I like to build a strong
            visual identity with all print and
          </ParaLine>
          <ParaLine background={backgroundColor} other={otherColor}>
            digital communication. During free time, I <Favorite /> to create cd
            covers.
          </ParaLine>
          <ParaLine background={backgroundColor} other={otherColor}>
            <ArrowForward run="true" />I{" "}
            <WordSet>
              would <FavoriteBorder />
            </WordSet>{" "}
            to help you on <WordSet>your projects.</WordSet>
          </ParaLine>
        </ParagraphWrapper>
      </ContentSection>
      <FooterSection>
        <ContactWrapper background={backgroundColor} other={otherColor}>
          <ArrowForward run="false" />
          <ContactText>Contact</ContactText>
        </ContactWrapper>
        <LanguageWrapper>
          <LanguageChangeButton background={backgroundColor} other={otherColor}>
            <LanguageChangeButtonText>{lang}</LanguageChangeButtonText>
          </LanguageChangeButton>
        </LanguageWrapper>

        <QuickLinks>
          <CustomQuickLink
            background={backgroundColor}
            other={otherColor}
            href="#"
          >
            Insta
          </CustomQuickLink>
          <CustomQuickLink
            background={backgroundColor}
            other={otherColor}
            href="#"
          >
            Dribbble
          </CustomQuickLink>
          <CustomQuickLink
            background={backgroundColor}
            other={otherColor}
            href="#"
          >
            Linkedin
          </CustomQuickLink>
          <CustomQuickLink
            background={backgroundColor}
            other={otherColor}
            href="#"
          >
            Behance
          </CustomQuickLink>
          <CustomQuickLink
            background={backgroundColor}
            other={otherColor}
            href="#"
          >
            Okey studio
          </CustomQuickLink>
        </QuickLinks>
      </FooterSection>
    </Container>
  );
}

export default Content;

// animations

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
  transition: all 200ms ease;

  background-color: ${(props) => props.background};
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
  color: ${(props) => props.other};
`;

const ColorChangeButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 10px;
  font-family: "Messapia-Bold";
  background-color: transparent;
  border-radius: 50px;
  border: ${(props) => `1px solid ${props.other}`};
  color: ${(props) => props.other};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.6s ease-in-out;

  &:hover {
    background-color: ${(props) => props.other};
    color: ${(props) => props.background};
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
  color: ${(props) => props.other};
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
  width: 130px;
  font-size: 12px;
  color: ${(props) => props.other};
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

const LanguageWrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const LanguageChangeButton = styled.button`
  padding: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: ${(props) => `1px solid ${props.other}`};
  background-color: transparent;
  color: ${(props) => props.other};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.other};
    color: ${(props) => props.background};
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
  color: ${(props) => props.other};

  &:hover {
    letter-spacing: 2px;
  }
`;
