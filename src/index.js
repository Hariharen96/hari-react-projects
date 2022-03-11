import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './Reduxcart/Redux/store';
// import { ContextProvider } from './samplecart/ContextCart';
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <Provider store={store}>
    <App />
    </Provider>
    {/* </ContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

