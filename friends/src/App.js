import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'></Link>
          </li>
        </ul>
        <Switch>
          {/* <PrivateRoute exact path='/protected' component={Friends} /> */}
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
