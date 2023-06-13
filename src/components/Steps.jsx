import styled from "styled-components";
import React from "react";
import Next from "../images/next.png";
import Check from "../images/check.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 40px;

  max-width: 528px;
  max-height: 44px;

  @media (max-width: 576px) {
    padding: 0px 20px;
    gap: 0px;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;
  max-width: 112px;
  max-height: 44px;
  border-radius: 2px;

  font-family: "Titillium Web";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
`;

const CircularDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: ${(props) => props.backgroundColor};

  border-radius: 50px;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
`;

const StepTitle = styled.h2`
  width: 60px;
  height: 24px;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #323238;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
`;

const Steps = (props) => {
  const currentStep = props.currentStep;

  var [stepOne, stepTwo, stepThree] = ["", "", ""];
  var [valueOne, valueTwo, valueThree] = ["1", "2", "3"];

  if (currentStep === 1) {
    stepOne = "#633BBC";
    stepTwo = "#E1E1E6";
    stepThree = "#E1E1E6";
  } else if (currentStep === 2) {
    stepOne = "#1D8841";
    stepTwo = "#633BBC";
    stepThree = "#E1E1E6";
    valueOne = <Image src={Check} />;
  } else if (currentStep === 3) {
    stepOne = "#1D8841";
    stepTwo = "#1D8841";
    stepThree = "#633BBC";
    valueOne = <Image src={Check} />;
    valueTwo = <Image src={Check} />;
  } else if (currentStep === 4) {
    stepOne = "#1D8841";
    stepTwo = "#1D8841";
    stepThree = "#1D8841";
    valueOne = <Image src={Check} />;
    valueTwo = <Image src={Check} />;
    valueThree = <Image src={Check} />;
  }

  return (
    <Container>
      <Step>
        <CircularDiv backgroundColor={stepOne}>{valueOne}</CircularDiv>
        <StepTitle>Contato</StepTitle>
      </Step>
      <Image src={Next} alt="next" />
      <Step>
        <CircularDiv backgroundColor={stepTwo}>{valueTwo}</CircularDiv>
        <StepTitle>Empresa</StepTitle>
      </Step>
      <Image src={Next} alt="next" />
      <Step>
        <CircularDiv backgroundColor={stepThree}>{valueThree}</CircularDiv>
        <StepTitle>Projeto</StepTitle>
      </Step>
    </Container>
  );
};

export default Steps;
