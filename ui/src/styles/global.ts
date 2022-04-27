import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }
  body {
    min-height: 100vh;
    background: ${({ theme }) => theme?.color?.background};
    font: 400 16px ${({ theme }) => theme?.font?.primary};
    color: ${({ theme }) => theme?.color?.fontPrimary}
  }
`;
