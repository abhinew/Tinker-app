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
import ProfilePageOwnerComponent from './components/ProfilePageOwnerComponent'
import ProfilePageTenantComponent from './components/ProfilePageTenantComponent'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path ='/' component = {FirstPageComponent} />
          <Route exact path ='/main/tenant' component = {MainPageOwner} />
          <Route exact path ='/main/owner' component = {MainPageTenant} />
          <Route exact path ='/profile/owner' component = {ProfilePageOwnerComponent} />
          <Route exact path ='/profile/tenant' component = {ProfilePageTenantComponent} />
        </div>
         </BrowserRouter>
      </Provider>
    );
  }
}

export default connect(null, {})(App)
