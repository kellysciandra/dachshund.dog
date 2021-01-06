import styled from "styled-components";
import { space } from "styled-system";
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 -5rem 0;
  font-family: "Inconsolata", monospace;
  font-size: 2em;
  width: 100%;
`;

const PicWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${space}
  img {
    width: 250px;
    height: 250px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
`;

export { Header, PicWrapper };
