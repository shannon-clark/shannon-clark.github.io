import { createGlobalStyle } from "styled-components";

export interface ThemeProps{
    background: string;
    text: string;
    textsecondary: string;
}

export const lightTheme: ThemeProps = {
    background: "#ECE8EF",
    text: "#0C0C0C",
    textsecondary: "#68D4E6",
  };
  
  export const darkTheme: ThemeProps = {
    background: "#0C0C0C",
    text: "#ECE8EF",
    textsecondary: "#68D4E6",
    // #EB67FC pink
    // #6A706E grey
  };

  export const useGlobalStyles = () => {
    
    return createGlobalStyle<{ theme: ThemeProps }>`

    html {
      scroll-behavior: smooth;
    }
    body {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      margin: 0px;
      padding-top: 50px;
      font-family:n Helvetica Neue, Arial,  sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
  `;
  };

