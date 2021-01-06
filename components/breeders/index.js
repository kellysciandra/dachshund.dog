import React from "react";
import { MainContainer, MainWrapper } from "../global.styles";
import {
  Header,
  Name,
  BreederContainer,
  Location,
  Contact,
  Type,
  Upcoming,
} from "./breeders.styles";

const breederDetails = [
  {
    name: "Sandra",
    location: "Kansas City, MO",
    contact: "sandrajandra@gmail.com",
    type: "wire-haired, reds, blue, orange, short-haired",
    upcoming: "March 21",
  },
  {
    name: "Franklin Templeton",
    location: "Upstate, NY",
    contact: "franklintempleton@gmail.com",
    type: "long-haired, small, sexy",
    upcoming: "June 21",
  },
  {
    name: "Barry D'Angelo",
    location: "Ocean City, MD",
    contact: "barryd@gmail.com",
    type: "wire-haired, reds, blue, orange, short-haired",
    upcoming: "Feb 21",
  },
  {
    name: "John Won Demarco",
    location: "San Fran, CA",
    contact: "jwon@gmail.com",
    type: "wire-haired, reds, blue, orange, short-haired",
    upcoming: "August 22",
  },
  {
    name: "Sandra",
    location: "Kansas City, MO",
    contact: "sandrajandra@gmail.com",
    type: "wire-haired, reds, blue, orange, short-haired",
    upcoming: "March 21",
  },
  {
    name: "Franklin Templeton",
    location: "Upstate, NY",
    contact: "franklintempleton@gmail.com",
    type: "long-haired, small, sexy",
    upcoming: "June 21",
  },
  {
    name: "Barry D'Angelo",
    location: "Ocean City, MD",
    contact: "barryd@gmail.com",
    type: "wire-haired, reds, blue, orange, short-haired",
    upcoming: "Feb 21",
  },
  {
    name: "John Won Demarco",
    location: "San Fran, CA",
    contact: "jwon@gmail.com",
    type: "wire-haired, reds, blue, orange, short-haired",
    upcoming: "August 22",
  },
];

function BreedersPage() {
  return (
    <>
      {" "}
      <Header>Breeders Baby Boy</Header>
      <MainContainer>
        <MainWrapper style={{ border: "none" }}>
          {breederDetails.map((breeder, index) => (
            <BreederContainer key={index}>
              <Name>{breeder.name}</Name>
              <Location>{breeder.location}</Location>
              <Contact>{breeder.contact}</Contact>
              <Type>{breeder.type}</Type>
              <Upcoming>{breeder.upcoming}</Upcoming>
              <hr />
              <hr />
            </BreederContainer>
          ))}
        </MainWrapper>
      </MainContainer>
      ;
    </>
  );
}

export default BreedersPage;
