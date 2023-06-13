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

const TextArea = styled.textarea`
  max-width: 528px;
  height: 100px;

  font-family: "IBM Plex Sans";
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  resize: none;
`;

const TextAreaFields = ({ label, ...props }) => {

  return (
    <InputFieldWrapper>
      <Label>{label}</Label>
      <TextArea {...props} />
    </InputFieldWrapper>
  );
};


export default TextAreaFields;
