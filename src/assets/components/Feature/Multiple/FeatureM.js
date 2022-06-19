import styled from "styled-components";
import Icon1 from "../../../images/icons/01.png";
import Icon2 from "../../../images/icons/02.png";
import Icon3 from "../../../images/icons/03.png";
import H2 from "../../styled/H2.styled";
import Lead from "../../styled/Lead2.styled";
import FeatureItem from "./FeatureItem";
import BgImage from "../../../images/HeroBackground.png";


const Items = [
  {
    id: 1,
    icon: Icon1,
    title: "Budget Planner",
    text: "Manage Keuanganmu. Tambahkan income dan update your income.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Atur Cicilan",
    text: "Berbagai Usia akan berbeda setiap cicilan.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Reminder",
    text: "Setiap Pembayaran akan di reminder.",
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
