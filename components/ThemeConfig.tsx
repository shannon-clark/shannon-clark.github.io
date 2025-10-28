import { createGlobalStyle } from "styled-components";

export interface ThemeProps {
  background: string;
  text: string;
  textsecondary: string;
  hovered: string;
}

export const lightTheme: ThemeProps = {
  background: "#ECE8EF",
  text: "#313131ff",
  textsecondary: "#68D4E6",
  hovered: "#000000",
};

export const darkTheme: ThemeProps = {
  background: "#232222ff",
  text: "#ffffffc9",
  textsecondary: "#68D4E6",
  hovered: "#ffffff",

  // #EB67FC pink
  // #6A706E grey
};

export const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
    html {
      scroll-behavior: smooth;
    }
    body {
      background: ${({ theme }) => theme.background}; 
      color: ${({ theme }) => theme.text};
      margin: 0px;
      padding-top: 50px;
      font-family:n Helvetica Neue, Arial,  sans-serif;
      overflow: hidden;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;
