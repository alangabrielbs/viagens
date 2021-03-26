import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/GlobalStyles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Minhas Viagens</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Um projeto simples para mostrar meus lugares favoritos do mundo"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
