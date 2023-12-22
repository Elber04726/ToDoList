import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: none;
}

*{
    font-family: 'Poppins', sans-serif;
    font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyles;
