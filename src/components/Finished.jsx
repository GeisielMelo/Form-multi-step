import styled from "styled-components"
import React from "react"

const StyledH1 = styled.h1`
    text-align: center;
    margin-bottom: 32px;

    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #323238;
`;

export default function Finished({msg}) {
    return (
            <StyledH1>{msg}</StyledH1>
    )
};