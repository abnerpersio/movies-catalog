import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ScrollTop } from './components/ScrollTop';
import { routes } from './constants/routes';
import { Home } from './pages/Home';
import { MoviePage } from './pages/MoviePage';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />

        <Switch>
          <Route exact path={[routes.INDEX, routes.HOME]} component={Home} />
          <Route path={routes.MOVIE} component={MoviePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
