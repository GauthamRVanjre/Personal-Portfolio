import Link from "next/link";
import React, { useState } from "react";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  Btn,
} from "../Header/HeaderStyles";

const Header = () => {
  const addProject = () => {
    window.location.href = "/uploadProject";
  };

  return (
    <Container
      style={{
        margin: "8px 120px",
      }}
    >
      <Div1>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#uploadProject">
            <NavLink>Project</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#uploadAbout">
            <NavLink>about</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#uploadAccomplishments">
            <NavLink>Accomplishments</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <Btn onClick={addProject}>Logout</Btn>
      </Div3>
    </Container>
  );
};

export default Header;
