import styled from "styled-components";


export const ContactHeader = styled.h1`
    font-size: 40px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
`;


export const FormContainer = styled.form`
    width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #212D45;
  padding: 50px;
  margin: 50px auto;
`;

export const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  border: none;
  border-radius: 5px;
`;

export const TextAreaField = styled.textarea`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  border: none;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #2ecc71;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #27ae60;
  }
`;
