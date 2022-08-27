import { Route, Switch } from 'react-router-dom';

import { routes } from './constants/routes';
import { Home } from './pages/Home';
import { MoviePage } from './pages/MoviePage';

export function Router() {
  return (
    <Switch>
      <Route exact path={[routes.INDEX, routes.HOME]} component={Home} />
      <Route path={routes.MOVIE} component={MoviePage} />
    </Switch>
  );
}
