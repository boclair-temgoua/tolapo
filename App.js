import React from 'react';
import Routes from './src/routes/Routes'
import { AuthContext } from "./src/contexts/Auth"
import RouterComponent from './src/RouterComponent'

// // ** Redux Imports
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
}