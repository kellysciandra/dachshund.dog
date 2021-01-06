import React from "react";
import { MainContainer, MainWrapper } from "../global.styles";
import { Header, Button, Balloon } from "./store.styles";
const StorePage = () => {
  return (
    <>
      <MainContainer>
        <MainWrapper style={{ border: "none" }}>
          <Header>want to shop?</Header>
          <Button>
            <img src="dachshund.svg"></img>
          </Button>
          <Balloon ml={"10rem"} mt={"-80%"}>
            <img src="balloon1.svg"></img>
          </Balloon>
          <Balloon mt={"-90%"} ml={"-30%"}>
            <img src="balloon2.svg"></img>
          </Balloon>
          <Balloon mt={"-110%"}>
            <img src="balloon3.svg"></img>
          </Balloon>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default StorePage;
