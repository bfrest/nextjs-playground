import styled from 'styled-components';
import Nav from '../components/Nav';
import '../styles/globals.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html {
  --yellow: #faed26;
  --black: #030e12;
  --green: #6db784;
  --boxShadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
}

 body {
        font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }

    a {
        text-decoration: none;
        color: var(--black);
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
