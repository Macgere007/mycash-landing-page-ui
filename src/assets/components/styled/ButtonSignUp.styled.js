import styled from "styled-components";
import { Colors, TextStyles } from "../../Theme";

const Button = styled.button`
  border: none;
  padding: 0rem 1rem;
  transition-property: background-color, color, border-color;
  transition-duration: 0.3s;
  border-radius: 5px;
  cursor: pointer;

 
  ${(p) => {
    switch (p.var) {
      case "sec":
        return `
                background-color: #2573D5;
                color: #7665FF;
                :hover {
                    background-color: ${Colors.Brand.Purple800};
                    color: ${Colors.Default.White};
                }
              `;
      case "outline":
        return `
                background-color: transparent;
                color: ${Colors.Default.White};
                border: 1px solid ${Colors.Default.White};

                :hover {
                background-color: ${Colors.Default.White};
                color: ${Colors.Default.Black};
                }
              `;
      default:
        return `
                background-color:#2573D5;
                color: ${Colors.Default.White};

                :hover {
                background-color:#7665FF;
                color: ${Colors.Default.White};
                }
            `;
    }
  }}

  ${(p) => {
    switch (p.size) {
      case "sm":
        return TextStyles.Bundler(TextStyles.Lable.Small);
      case "lg":
        return TextStyles.Bundler(TextStyles.Lable.Large);
      default:
        return TextStyles.Bundler(TextStyles.Lable.Medium);
    }
  }}
`;

export default Button;
