import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --color-highlight: #29D;
    --color-background: #030518;
    --color-white: #eeeeee;
    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    background: var(--color-background);
    color: var(--color-white)
  }

  body {
    text-rendering: optimizelegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--color-highlight);
    text-decoration: none;
  }
`

export default GlobalStyles
