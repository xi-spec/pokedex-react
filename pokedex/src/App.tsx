import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './pages/dashbord';
import store from './redux/store/configureStore';

function App () {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
