import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './pages/dashbord';
import Detail from './pages/detail';
import store from './redux/store/configureStore';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './app.scss';

function App () {
  return (
    <Provider store={store}>
            <Router basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route exact path='/' component={Dashboard}></Route>
                <Route exact path='/detail/:pokeName' component={Detail}></Route>
              </Switch>
            </Router>

    </Provider>
  );
}

export default App;
