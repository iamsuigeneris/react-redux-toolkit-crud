import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { fetchUsers } from "./features/users/usersSlice";
import App from './App';
import store from "./store"

store.dispatch(fetchUsers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


