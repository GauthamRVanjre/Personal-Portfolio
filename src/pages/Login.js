import React from "react";
import { Btn } from "../components/Header/HeaderStyles";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const LoginUser = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user.email);
        localStorage.setItem("isLogged", true);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Btn onClick={LoginUser}>Login here</Btn>
    </div>
  );
};

export default Login;
