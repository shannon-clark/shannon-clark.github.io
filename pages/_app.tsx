import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, GlobalStyles } from "../components/ThemeConfig";
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

const MyAppWrapper = (props: AppProps) => (
  <StyledThemeProvider theme={lightTheme}>
    <GlobalStyles theme={lightTheme} />
      <App {...props} />
  </StyledThemeProvider>
);

export default MyAppWrapper;
