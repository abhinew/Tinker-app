import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import FirstPageComponent from './components/FirstPageComponent';
import MainPageTenant from './components/MainPageTenant';
import MainPageOwner from './components/MainPageOwner'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path ='/' component = {FirstPageComponent} />
          <Route exact path ='/main/tenant' component = {MainPageOwner} />
          <Route exact path ='/main/owner' component = {MainPageTenant} />
        </div>
         </BrowserRouter>
      </Provider>
    );
  }
}

export default connect(null, {})(App)
