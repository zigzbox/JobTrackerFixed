import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import enterNewJob from './enterNewJob';
import navBar from './navBar';


class App extends Component {
  render() {
    return (
      <div>
        <header>
        <navBar/>
        </header>
        <Switch>
            <Route exact path='/' component={enterNewJob} />


        </Switch>


      </div>
    );
  }
}

export default App;
