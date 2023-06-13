import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;
  border: 1px solid #e1e1e6;
  border-radius: 6px;
`;

export const InputDiv = styled.div`
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E1E1E6;
  margin: 32px 0;
`;