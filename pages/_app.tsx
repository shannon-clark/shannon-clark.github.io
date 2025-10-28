import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { lightTheme, darkTheme, GlobalStyles } from "../components/ThemeConfig";
config.autoAddCss = false;

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const activeTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <StyledThemeProvider theme={activeTheme}>
      <GlobalStyles theme={activeTheme} />
      {children}
    </StyledThemeProvider>
  );
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

const MyAppWrapper = (props: AppProps) => (
  <NextThemesProvider attribute="class" defaultTheme="system">
    <ThemeWrapper>
      <App {...props} />
    </ThemeWrapper>
  </NextThemesProvider>
);

export default MyAppWrapper;
