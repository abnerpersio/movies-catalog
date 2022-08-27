import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Router } from '../../router';
import { GlobalStyle } from '../../styles/global';
import { darkTheme } from '../../styles/theme/dark';
import { ScrollTop } from '../ScrollTop';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <ScrollTop />

        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
