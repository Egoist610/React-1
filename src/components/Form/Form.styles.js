 import styled from "styled-components";

  export const Forms = styled("form")`
    background: green;`;


     export const Label = styled("label")`/  
        color: ${(props) => props.color || "red"};
     font-size: ${({ fontSize }) => fontSize || "32px"};
    `;