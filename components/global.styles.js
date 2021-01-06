import styled from "styled-components";
import { space } from "styled-system";
const PageWrapper = styled.main`
  * {
    margin: 0;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120vh;
`;

const MainWrapper = styled.div`
  border: 10px solid;
  width: 500px;
  height: 75vh;
  ${space}
`;

export { PageWrapper, MainContainer, MainWrapper };
