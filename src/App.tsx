import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Home from './components/Home';
import MoviePage from './components/MoviePage';
import { ScrollTop } from './components/ScrollTop';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />

        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route path="/filme/:movieId" component={MoviePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
