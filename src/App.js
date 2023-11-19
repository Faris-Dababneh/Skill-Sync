import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Home';
import ReactionTime from './Games/ReactionTime';
import SignUp from './Account/SignUp';
import Login from './Account/Login';
import Dashboard from './Dashboard';
import ChimpTest from './Games/ChimpTest';
import Type from './Games/TypeTest';
import { SignIn } from './Server/Database';
import NumberTest from './Games/NumberTest';
import Suggestions from './Suggestions';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/dashboard' Component={Dashboard}/>
          <Route path='/signup' Component={SignUp} />
          <Route path='/login' Component={Login}/>
          <Route path='/reaction-time' Component={ReactionTime} />
          <Route path='/chimp-test' Component={ChimpTest}/>
          <Route path='/type-test' Component={Type}/>
          <Route path='/sequence-test' />
          <Route path='/verbal-test' />
          <Route path='/number-test' Component={NumberTest}/>
          <Route path='/suggestions' Component={Suggestions}/>
          
        </Routes>  
      </Router>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=VzWBLj_CfpE
