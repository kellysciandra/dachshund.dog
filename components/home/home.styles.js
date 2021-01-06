import styled from "styled-components";

const HomeContainer = styled.div`
  margin-left: 25rem;
  position: absolute;
  display: block;
  float: right;
  background: transparent;

  transform-origin: top center;
  animation: mymove 10s infinite ease-in-out;
  ellipse {
    opacity: 0.2;
    overflow: hidden;
  }
  img {
    @keyframes mymove {
      0% {
        left: 0px;
      }
      20% {
        left: 50px;
        transform: rotate(5deg);
      }
      40% {
        left: 100px;
      }
      60% {
        left: 50px;
        transform: rotate(-5deg);
      }
      80% {
        left: 70px;
        transform: rotate(5deg);
      }
      100% {
        left: 0px;
        transform: rotate(0deg);
      }
    }
  }
`;

const Border = styled.div`
  border: 5px solid aqua;
  text-align: center;
  font-family: "Inconsolata", monospace;
  font-size: 2em;
  font-weight: bold;
`;
export { HomeContainer, Border };
