import styled from "styled-components";
import Icon1 from "../../../images/icons/01.svg";
import Icon2 from "../../../images/icons/02.svg";
import Icon3 from "../../../images/icons/03.svg";
import H2 from "../../styled/H2.styled";
import Lead from "../../styled/Lead2.styled";
import FeatureItem from "./FeatureItem";
import BgImage from "../../../images/HeroBackground.png";


const Items = [
  {
    id: 1,
    icon: Icon1,
    title: "Robust workflow",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Flexibility",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "User friendly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  
];

const FeatureMEl = styled.article`
  
  padding: 4.5rem 7rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: url(${BgImage});
  background-size: 999px;
`;

const SubTitle = styled(Lead)`
  text-align: center;
`;

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 5rem;
  column-gap: 2rem;
  row-gap: 3rem;
  
`;

export default function FeatureM() {
  return (
    <FeatureMEl>
      <H2>Features</H2>
     
      <ItemContainer>
        {Items.map((item) => {
          return <FeatureItem key={item.id} item={item} />;
        })}
      </ItemContainer>
    </FeatureMEl>
  );
}
