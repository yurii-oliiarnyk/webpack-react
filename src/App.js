import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent';

import Users from './containers/Users';
// import Pizza from './containers/Pizza';

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Users');
});

class App extends Component {
    render() {
        return (
          <div>
              <div>
                <Link to="/">Users</Link>
                <Link to="/pizza">Pizza</Link>
              </div>
              <div>
                <Route path="/" exact component={Users} /> 
                    <Route path="/pizza" component={AsyncPizza} /> 
              </div>
          </div>  
        );
    }
};
