import React, { Component } from 'react';
import Task from './Task.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import Admin from './Admin.js';
import Navigation from './Navigation.js';

// App component - represents the whole app
class App extends Component {


  render() {
    return (
      <BrowserRouter>
            <div>
              <Navigation />
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/contact" component={Contact}/>
                <Route path="/admin" component={Admin}/>
              </Switch>
            </div>

      </BrowserRouter>

    );
  }
}

export default App;
