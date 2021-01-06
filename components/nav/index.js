import React, { useState } from "react";
import { FaHotdog } from "react-icons/fa";

import Link from "next/link";

import { NavContainer, LinkStyle, Home, Border } from "./nav.styles";

const NavBar = () => {
  return (
    <NavContainer>
      {/* <Border>dachshund.dog</Border> */}
      <Link href="/">
        <LinkStyle>
          <Home>
            <Home className="inside">
              {" "}
              <FaHotdog size={30} />
            </Home>
          </Home>
        </LinkStyle>
      </Link>
      <Link href="/breeders">
        <LinkStyle>breeders</LinkStyle>
      </Link>
      <Link href="/meetups">
        <LinkStyle>meetups</LinkStyle>
      </Link>
      <Link href="/store">
        <LinkStyle>store</LinkStyle>
      </Link>
      <Link href="/fashion">
        <LinkStyle>fashion show</LinkStyle>
      </Link>
    </NavContainer>
  );
};

export default NavBar;
