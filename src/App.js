import React, { useState } from "react";
import { Container, Divider, InputDiv } from "./components/Div";
import Buttons from "./components/Buttons";
import InputField from "./components/InputFields";
import TextAreaFields from "./components/TextAreaFields";
import Steps from "./components/Steps";
import Finished from "./components/Finished";
import InputError from "./components/InputError";
import {
  isContactInputValid,
  isCompanyInputValid,
  isProjectInputValid,
} from "./utils/inputValidation.js";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    employees: "",
    objectives: "",
    about: "",
  });

  const showErrorMessage = () => {
    setErrorMessage(true);
    setTimeout(() => {
      setErrorMessage(false);
    }, 3000);
  };

  const handleRedirect = () => {
    window.open("https://geisielmelo.netlify.app", "_blank");
  };

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePageTwo = () => {
    return isContactInputValid(
      userInput.name,
      userInput.phone,
      userInput.email)
      ? setCurrentStep(2)
      : showErrorMessage();
  };

  const handlePageThree = () => {
    return isCompanyInputValid(
      userInput.company,
      userInput.employees,
      userInput.about
    )
      ? setCurrentStep(3)
      : showErrorMessage();
  };

  const handlePageFour = () => {
    return isProjectInputValid(
      userInput.objectives)
      ? setCurrentStep(4)
      : showErrorMessage();
  };

  return (
    <section>
      <Container>
        <Steps currentStep={currentStep} />
        <Divider />
        {currentStep === 1 && (
          <>
            <InputDiv>
              <InputField
                label="Nome"
                placeholder="Como prefere ser chamado"
                type="text"
                name="name"
                value={userInput.name}
                onChange={handleUserInput}
              />
              <InputField
                label="Telefone"
                placeholder="Digite seu número de WhatsApp"
                type="number"
                name="phone"
                value={userInput.phone}
                onChange={handleUserInput}
              />
              <InputField
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="e-mail"
                name="email"
                value={userInput.email}
                onChange={handleUserInput}
              />
            </InputDiv>
            <Buttons
              page={currentStep}
              continue="Continuar"
              onContinue={handlePageTwo}
            />
          </>
        )}
        {currentStep === 2 && (
          <>
            <InputDiv>
              <InputField
                label="Nome da empresa"
                placeholder="Qual é o nome da empresa"
                type="text"
                name="company"
                value={userInput.company}
                onChange={handleUserInput}
              />
              <InputField
                label="Número de funcionários"
                placeholder="Digite o número de colaboradores"
                type="number"
                name="employees"
                value={userInput.employees}
                onChange={handleUserInput}
              />
              <TextAreaFields
                label="Sobre seu negócio"
                placeholder="Fale um pouco sobre seus produtos ou serviços"
                name="about"
                value={userInput.about}
                onChange={handleUserInput}
              />
            </InputDiv>
            <Buttons
              page={currentStep}
              continue="Continuar"
              back="Voltar"
              onContinue={handlePageThree}
              onBack={() => setCurrentStep(1)}
            />
          </>
        )}
        {currentStep === 3 && (
          <>
            <InputDiv>
              <TextAreaFields
                label="Objetivos do projeto"
                placeholder="Descreva quais os objetivos desse projeto"
                name="objectives"
                value={userInput.objectives}
                onChange={handleUserInput}
              />
            </InputDiv>
            <Buttons
              page={currentStep}
              continue="Enviar proposta"
              back="Voltar"
              onContinue={handlePageFour}
              onBack={() => setCurrentStep(2)}
            />
          </>
        )}
        {currentStep === 4 && (
          <>
            <InputDiv>
              <Finished msg="Obrigado por entrar em contato!" />
            </InputDiv>
            <Buttons
              page={currentStep}
              continue="Sair"
              onContinue={handleRedirect}
            />
          </>
        )}
        {errorMessage && <InputError />}
      </Container>
    </section>
  );
}

export default App;
