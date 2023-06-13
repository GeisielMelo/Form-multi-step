import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.onlyRightButton ? "flex-end" : "space-between"};
  align-items: center;
  padding: 0px;

  width: 100%;
  height: 56px;
`;

const ButtonContinue = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  background: #633bbc;
  border-radius: 6px;
  border: none;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;

  text-transform: uppercase;
  color: #ffffff;
`;

const ButtonBack = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  border: 1px solid #633BBC;
  border-radius: 6px;

  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  color: #633BBC;
`;

const Buttons = ({ onContinue, onBack, ...props }) => {
  const currentPage = props.page;

  return (
    <Div onlyRightButton={currentPage === 1 || currentPage === 4}>
      {currentPage === 1 || currentPage === 4 ? (
        <ButtonContinue onClick={onContinue}>{props.continue}</ButtonContinue>
      ) : (
        <>
          <ButtonBack onClick={onBack}>{props.back}</ButtonBack>
          <ButtonContinue onClick={onContinue}>{props.continue}</ButtonContinue>
        </>
      )}
    </Div>
  );
};

export default Buttons;
