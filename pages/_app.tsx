import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ThemeProvider } from 'styled-components'
import withDarkMode from 'next-dark-mode'
import { useDarkMode } from 'next-dark-mode'
import { lightTheme, darkTheme, useGlobalStyles } from '../components/ThemeConfig'
config.autoAddCss = false


function App({ Component, pageProps}: AppProps) {
  const {darkModeActive} = useDarkMode()
  const GlobalStyles = useGlobalStyles();

  return (
    <ThemeProvider theme={ darkModeActive ? darkTheme : lightTheme }>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default withDarkMode(App)

