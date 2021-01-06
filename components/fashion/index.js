import axios from "axios";
import React, { useState, useEffect } from "react";
import { backgroundColor } from "styled-system";
import { MainContainer, MainWrapper } from "../global.styles";
import { Header, PicWrapper } from "./fashion.styles";

function FashionPage() {
  const [dogs, setDogs] = useState([]);

  // useEffect(() => {
  //   const search = async () => {
  //     const { data } = await axios.get(
  //       "https://dog.ceo/api/breed/Dachshund/images/random"
  //     );

  //     console.log(data);
  //   };
  //   search();
  // }, []);

  return (
    <>
      <MainContainer>
        <MainWrapper
          mt={"10%"}
          style={{
            border: "none",
            backgroundColor: "aquamarine",
            height: "100%",
          }}
        >
          <Header>let's see some cuties</Header>
          <PicWrapper mt={"10rem"}>
            <img src="bbr.png"></img>
          </PicWrapper>

          <PicWrapper mt={"5rem"}>
            <img
              src="rich3.png"
              style={{ width: "250px", height: "250px" }}
            ></img>
          </PicWrapper>
        </MainWrapper>
      </MainContainer>
    </>
  );
}

export default FashionPage;
