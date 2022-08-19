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
