import React, { useState } from "react";
import { Container, Divider, InputDiv } from "./components/Div";
import Buttons from "./components/Buttons";
import InputField from "./components/InputFields";
import TextAreaFields from "./components/TextAreaFields";
import Steps from "./components/Steps";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

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
              />
              <InputField
                label="Telefone"
                placeholder="Digite seu número de WhatsApp"
                type="number"
              />
              <InputField
                label="E-mail"
                placeholder="Digite seu e-mail"
                type="e-mail"
              />
            </InputDiv>
            <Buttons
              page={currentStep}
              continue="Continuar"
              onContinue={() => setCurrentStep(2)}
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
              />
              <InputField
                label="Número de funcionários"
                placeholder="Digite o número de colaboradores"
                type="number"
              />
              <TextAreaFields 
                label="Sobre seu negócio"
                placeholder="Fale um pouco sobre seus produtos ou serviços"
              />
            </InputDiv>
            <Buttons
              page={currentStep}
              continue="Continuar"
              back="Voltar"
              onContinue={() => setCurrentStep(3)}
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
              />
            </InputDiv>
            <Buttons
              page={currentStep}
              continue="Enviar proposta"
              back="Voltar"
              onContinue={() => alert("Obrigado por entrar em contato!")}
              onBack={() => setCurrentStep(2)}
            />
          </>
        )}
      </Container>
    </section>
  );
}

export default App;
