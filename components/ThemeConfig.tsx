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
  background: "#f9f4dd",
  surface: "#fff5c9",
  card: "#fffdf5",
  text: "#1f1c16",
  textsecondary: "#2e65a9",
  border: "#1f1c16",
  nav: "#ffcb42",
  accent: "#da291c",
  accentAlt: "#0057a4",
  warning: "#f4a61b",
  hovered: "#da291c",
  shadow: "rgba(26, 22, 14, 0.35)",
};

export const GlobalStyles = createGlobalStyle<{ theme: ThemeProps }>`
    html {
      scroll-behavior: smooth;
    }
    body {
      --lego-ink: ${({ theme }) => theme.border};
      --lego-card-bg: ${({ theme }) => theme.card};
      --lego-blue: ${({ theme }) => theme.accentAlt};
      --lego-shadow: ${({ theme }) => theme.shadow};
      --font-display: "Bungee", "Trebuchet MS", sans-serif;
      --font-body: "Nunito", "Segoe UI", sans-serif;
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      margin: 0;
      padding-top: 55px;
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
