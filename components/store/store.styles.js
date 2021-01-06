import styled from "styled-components";
import { space } from "styled-system";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -2rem 0 0 0;
  font-family: "Inconsolata", monospace;
  font-size: 3em;
`;

const Button = styled.button`
  border: none;
  background: none;
  margin: 15rem 0 0 10rem;
  img {
    width: 125px;
    height: 125px;

    border: 10px double aqua;
  }
`;

const Balloon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;
  ${space}
  img {
    width: 500px;
    height: 500px;
  }
`;

export { Header, Button, Balloon };
