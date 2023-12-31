import React from "react";
import styled from "styled-components";

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  color: #323238;
`;

const Input = styled.input`
  max-width: 528px;
  height: 56px;

  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
    display: none;
  }
`;

const InputField = ({ label, ...props }) => {

  return (
    <InputFieldWrapper>
      <Label>{label}</Label>
      <Input {...props} />
    </InputFieldWrapper>
  );
};


export default InputField;
