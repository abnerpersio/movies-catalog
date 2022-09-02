import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { QueryProvider } from '../../context/QueryProvider';
import { Router } from '../../router';
import { GlobalStyle } from '../../styles/global';
import { darkTheme } from '../../styles/theme/dark';
import { ScrollTop } from '../ScrollTop';

export function App() {
  return (
    <BrowserRouter>
      <QueryProvider>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <ScrollTop />

          <Router />
        </ThemeProvider>
      </QueryProvider>
    </BrowserRouter>
  );
}
