// import Link from "next/link";
// import React, { useState } from "react";
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
// import { DiCssdeck } from "react-icons/di";

// import {
//   Container,
//   Div1,
//   Div2,
//   Div3,
//   NavLink,
//   SocialIcons,
//   Span,
//   Btn,
// } from "./HeaderStyles";

// const Header = () => {
//   const addProject = () => {
//     window.location.href = "/uploadProject";
//   };

//   return (
//     <Container>
//       <Div1>
//         <Link href="/">
//           <a
//             style={{
//               display: "flex",
//               alignItems: "center",
//               color: "white",
//               marginBottom: "20px",
//             }}
//           >
//             <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
//           </a>
//         </Link>
//       </Div1>
//       <Div2>
//         <li>
//           <Link href="#projects">
//             <NavLink>Projects</NavLink>
//           </Link>
//         </li>
//         <li>
//           <Link href="#tech">
//             <NavLink>Technologies</NavLink>
//           </Link>
//         </li>
//         <li>
//           <Link href="#about">
//             <NavLink>About</NavLink>
//           </Link>
//         </li>
//         <li>
//           <Link href="#contact">
//             <NavLink>Contact</NavLink>
//           </Link>
//         </li>
//       </Div2>
//       <Div3>
//         <SocialIcons href="https://github.com/GauthamRVanjre/">
//           <AiFillGithub size="3rem" />
//         </SocialIcons>
//         <SocialIcons href="https://www.linkedin.com/in/gautham-r-vanjre-72b858228/">
//           <AiFillLinkedin size="3rem" />
//         </SocialIcons>
//         <SocialIcons href="https://www.instagram.com/vanjregautham/">
//           <AiFillInstagram size="3rem" />
//         </SocialIcons>
//         {/* {isLoggedin ? (
//           <Btn onClick={handleLogout}>Logout</Btn>
//         ) : (
//           <Btn onClick={handleLogin}>Login</Btn>
//         )} */}

//         <Btn onClick={addProject}>Upload</Btn>
//       </Div3>
//     </Container>
//   );
// };

// export default Header;
