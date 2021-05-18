import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { AddUser } from './features/users/AddUser'
import { EditUser } from './features/users/EditUser'
import { UserList } from './features/users/UserList'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

