import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
`