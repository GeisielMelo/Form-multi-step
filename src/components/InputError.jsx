import styled from "styled-components";
import React from "react";

const StyledErrorMessage = styled.p`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: red;

  background-color: #fff;
  border-radius: 16px;
  padding: 4px 8px;
`;

const InputError = () => {
  return <StyledErrorMessage>Preencha todos os campos.</StyledErrorMessage>;
};

export default InputError;
