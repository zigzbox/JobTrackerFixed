import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import enterNewJob from './enterNewJob';


class App extends Component {
  render() {
    return (
      <div>
        <header>

        </header>
        <Switch>
            <Route exact path='/' component={enterNewJob} />


        </Switch>


      </div>
    );
  }
}

export default App;
