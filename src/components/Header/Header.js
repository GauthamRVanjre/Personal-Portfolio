import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
} from "react-icons/ai";
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
} from "./HeaderStyles";
import { auth } from "../../firebase";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  // console.log(isLoggedin);

  useEffect(() => {
    if (localStorage.getItem("isLogged")) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          localStorage.setItem("isLogged", true);
          setIsLoggedin(true);
        } else {
          localStorage.removeItem("isLogged");
          setIsLoggedin(false);
        }
      });
    }
  }, []);

  const logUserOut = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedin(false);
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProject = () => {
    window.location.href = "/uploadProject";
  };

  const logUserIn = () => {
    window.location.href = "/Login";
  };

  return (
    <Container>
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
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/GauthamRVanjre/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/gautham-r-vanjre-72b858228/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/vanjregautham1">
          <AiFillTwitterSquare size="3rem" />
        </SocialIcons>
        {isLoggedin ? (
          <Btn onClick={logUserOut}>Logout</Btn>
        ) : (
          <Btn onClick={logUserIn}>Login</Btn>
        )}

        {isLoggedin && auth.currentUser.email === "vanjregautham@gmail.com" ? (
          <Btn onClick={addProject}>Upload</Btn>
        ) : (
          ""
        )}

        {/* <Btn onClick={addProject}>
          Upload
        </Btn> */}
      </Div3>
    </Container>
  );
};

export default Header;
