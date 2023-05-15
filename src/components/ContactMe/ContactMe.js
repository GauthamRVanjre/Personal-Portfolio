import React, { useState, useEffect } from "react";
import {
  FormContainer,
  InputField,
  SubmitButton,
  TextAreaField,
} from "./ContactMeStyles";
import { SectionTitle } from "../../styles/GlobalComponents";
import { auth } from "../../firebase";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (auth && auth.currentUser !== null) {
      setName(auth.currentUser.displayName);
      setEmail(auth.currentUser.email);
    }
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      message,
    };

    // const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //     'Content-Type': 'application/json',
    //     },
    // });

    const result = await response.json();
    console.log(result);

    setMessage("");
  };
  return (
    <>
      <SectionTitle
        id="contact"
        style={{
          marginLeft: "120px",
        }}
      >
        Contact Me - Make sure to login
      </SectionTitle>
      <FormContainer onSubmit={handleSubmit}>
        <InputField type="text" placeholder="name" value={name} readOnly />

        <InputField type="email" placeholder="email" value={email} readOnly />

        <TextAreaField
          type="submit"
          placeholder="Send Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <SubmitButton type="submit">Send Message</SubmitButton>
      </FormContainer>
    </>
  );
};

export default ContactMe;
