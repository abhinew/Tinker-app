import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Route } from 'react-router';
import FirstPageComponent from './components/FirstPage.js';
import  MainPageOwner from './components/MainPageOwner.js';
import MainPageTenant from './components/MainPageTenant.js';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path ='/main' component = {FirstPageComponent} />
          <Route exact path ='/main/owner' component = {MainPageOwner} />
          <Route exact path ='/main/tenant' component = {MainPageTenant} />
        </div>
      </Provider>
    );
  }
}

export default App;
