import styled from "styled-components";
import ButtonSignUp from "../styled/ButtonSignUp.styled";
import { Colors, TextStyles } from "../../Theme";

const HeaderEl = styled.header`
 padding: 21px 10%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 font-weight: 700;
 background-color: #29304D;
 color: white;
`;

const LeftPart = styled.span`
  display: flex;
  column-gap: 1rem;
  margin-left: 5rem;
  
`;

const RightPart = styled.span`
  display: flex;
  column-gap: 1rem;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const NavBar = styled.nav`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  padding-left: 250px;
  font-weight: 700;
  
`;
const NavItem = styled.a`
:visited {
  color: ${Colors.Default.White};
}
`;
 

export default function Header() {
  return (
    <HeaderEl>
      <LeftPart>
        <LogoContainer>
        <label class= "logo">MyCash</label>
        </LogoContainer>
        <NavBar>
          <NavItem href="#">How it Work</NavItem>
          <NavItem href="#">Webinar</NavItem>
          <NavItem href="#">Product</NavItem>
          <NavItem href="#">Dashboard</NavItem>
        </NavBar>
      </LeftPart>
      <RightPart>
         <NavItem href="#">Login</NavItem>
         <ButtonSignUp href="#">Start Free</ButtonSignUp>
      </RightPart>
    </HeaderEl>
  );
}
