import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './pages/dashbord';
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
            <Router>
              <Switch>
                <Route path='/' component={Dashboard}></Route>
              </Switch>
            </Router>

    </Provider>
  );
}

export default App;
