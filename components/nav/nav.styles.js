import styled from "styled-components";

const NavContainer = styled.div`
  position: fixed;
  top: 75px;
  width: 100%;
  height: 5rem;
  transition: 0.25s ease-in-out;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    top: 0;
    background-color: aquamarine;
    border-bottom: 5px solid white;
  }
`;

const LinkStyle = styled.div`
  display: flex;
  font-weight: bold;
  margin: 0 0 0 4rem;
  padding: 20px;
  text-decoration: none;

  cursor: pointer;
  font-family: "Inconsolata", monospace;
  font-size: 1.5em;

  @media only screen and (max-width: 600px) {
    padding: 1rem 1rem 1rem 1rem;
    margin: 0;
    opacity: 0.8;
  }
`;

const Home = styled.div`
  font-family: "Inconsolata", monospace;

  .inside {
    border: 10px double aqua;
    font-weight: bolder;
    color: black;
    background-color: aquamarine;
  }
  @media only screen and (max-width: 600px) {
    border: none;

    .inside {
      color: black;

      border: none;
    }
  }
`;
const Border = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  font-family: "Inconsolata", monospace;
  font-size: 20px;
  border: 10px double aqua;
  font-weight: bold;
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;
export { NavContainer, LinkStyle, Home, Border };
