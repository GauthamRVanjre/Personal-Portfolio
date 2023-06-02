import React, { useState, useEffect } from "react";
import {
  FormContainer,
  InputField,
  SubmitButton,
  TextAreaField,
} from "./ContactMeStyles";
import { SectionTitle } from "../../styles/GlobalComponents";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError("Please fill all the fields");
      return;
    }

    const data = {
      name: name,
      email: email,
      message,
    };

    console.log(data);

    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };
  return (
    <>
      <SectionTitle
        id="contact"
        style={{
          marginLeft: "120px",
        }}
        data-aos="fade-right"
      >
        Contact Me - Make sure to login
      </SectionTitle>
      <FormContainer onSubmit={handleSubmit} data-aos="fade-left">
        <InputField
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <InputField
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextAreaField
          type="submit"
          placeholder="Send Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <SubmitButton onClick={handleSubmit} type="submit">
          Send Message
        </SubmitButton>
        <p
          style={{
            color: "red",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          {error}
        </p>
      </FormContainer>
    </>
  );
};

export default ContactMe;
