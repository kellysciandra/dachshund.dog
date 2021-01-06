import React from "react";
import { MainContainer, MainWrapper } from "../global.styles";

import { HomeContainer, Border } from "./home.styles";
const Home = () => {
  return (
    <>
      <MainContainer>
        <MainWrapper style={{ border: "none" }}>
          <HomeContainer>
            <Border>dachshund.dog</Border>
            <img src={"mainBalloon.svg"}></img>
          </HomeContainer>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default Home;
