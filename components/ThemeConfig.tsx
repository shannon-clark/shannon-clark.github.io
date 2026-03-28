import { createGlobalStyle } from "styled-components";

export interface ThemeProps {
  background: string;
  surface: string;
  card: string;
  text: string;
  textsecondary: string;
  border: string;
  nav: string;
  accent: string;
  accentAlt: string;
  warning: string;
  hovered: string;
  shadow: string;
}

export const lightTheme: ThemeProps = {
  background: "#f2f2f2",
  surface: "#e8f0fe",
  card: "#ffffff",
  text: "#1a1a1a",
  textsecondary: "#006DB7",
  border: "#1a1a1a",
  nav: "#FFD100",
  accent: "#E3000B",
  accentAlt: "#006DB7",
  warning: "#FF8C00",
  hovered: "#E3000B",
  shadow: "rgba(0, 0, 0, 0.10)",
};

export const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
    html {
      scroll-behavior: smooth;
      min-height: 100%;
    }
    #__next {
      min-height: 100%;
    }
    body {
      --lego-ink: ${({ theme }) => theme.border};
      --lego-card-bg: ${({ theme }) => theme.card};
      --lego-blue: ${({ theme }) => theme.accentAlt};
      --lego-shadow: ${({ theme }) => theme.shadow};
      --font-display: "Bungee", "Trebuchet MS", sans-serif;
      --font-body: "Nunito", "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at 14% 8%, rgba(0, 109, 183, 0.09), transparent 40%),
        radial-gradient(circle at 86% 0%, rgba(255, 209, 0, 0.09), transparent 34%),
        linear-gradient(180deg, #fbfcff 0%, #f2f4f8 56%, #e9edf3 100%);
      color: ${({ theme }) => theme.text};
      margin: 0;
      padding-top: 0;
      min-height: 100dvh;
      font-family: var(--font-body);
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 1.4;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;
