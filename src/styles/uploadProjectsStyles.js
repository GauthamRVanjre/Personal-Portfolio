import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: grid;
  place-items: center;
  margin: 20px 0;
`;

export const TagWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
`;

export const Tag = styled.p`
  margin: 0 5px;
  padding: 5px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0069d9;
  }
`;

export const Wrapper = styled.div`
  width: 500px;
  height: auto;
  padding: 20px;
  background-color: black;
  border-radius: 12px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Label = styled.label`
  font-size: 25px;
`;

export const Input = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  font-size: 18px;
  border: none;
  border-radius: 2px;
  padding: 5px;
  height: 40px;
  margin-top: 5px;
`;

export const TextArea = styled.textarea`
  font-size: 18px;
  border: none;
  border-radius: 2px;
  padding: 5px;
  margin-top: 5px;
  height: 100px;
`;

export const CreateBtn = styled.button`
  margin-top: 20px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;
