import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import { ScrollTop } from './components/ScrollTop';
import { routes } from './constants/routes';

function App() {
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

export default App;
