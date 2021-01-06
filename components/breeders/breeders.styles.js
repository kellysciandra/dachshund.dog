import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0 -5rem 0;
  font-family: "Inconsolata", monospace;
  font-size: 3em;
`;

const BreederContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex-wrap: nowrap;
  font-family: "Inconsolata", monospace;
`;

const Name = styled.div`
  font-size: 1rem;
`;
const Location = styled.div`
  font-size: 1rem;
`;
const Type = styled.div`
  font-size: 1rem;
`;
const Contact = styled.div`
  font-size: 1rem;
`;
const Upcoming = styled.div`
  font-size: 1rem;
`;

export { Header, Name, BreederContainer, Location, Contact, Type, Upcoming };
