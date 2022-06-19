import styled from "styled-components";
import Header from "../Header/Header";
import Button from "../styled/Button.styled";
import H1 from "../styled/H1.styled";
import PhoneMockUp from "../../images/PhoneMockup.png";
import Img from "../styled/Img.styled";
import BgImage from "../../images/HeroBackground.png";
import { Shadows } from "../../Theme";

const HeroEl = styled.article`
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${BgImage});
  background-repeat: no-repeat;
  background-size: 1222px;
  row-gap: 4rem;
  
`;

const Content = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Title = styled(H1)`
  padding-top: 7rem;
  margin-left: 5rem;
`;

const Span = styled (H1)`
 color: #2573D5;
`;
const Image = styled(Img)`
  filter: (${Shadows.PhoneMockUp});
  margin-right: 5rem;
`;

export default function Hero() {
  return (
    <HeroEl>
      <Header />
      <Content>
        <span>
          <Title>Nyicil! Investasi! <Span> Atur Uang <br/>Bebas Utang</Span> </Title>
          <br/>
          <br/>
          <Button size="lg">Sign up Free</Button>
        </span>
        <Image src={PhoneMockUp} />
      </Content>
    </HeroEl>
  );
}
