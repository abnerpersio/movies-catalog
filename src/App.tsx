import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import GlobalStyle from './styles/global'

import Home from './components/Home'
import MoviePage from './components/MoviePage'

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>

          <Route exact path={['/', '/home']} component={Home}  />
          <Route path='/filme/:movieId' component={MoviePage}  />
        
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;