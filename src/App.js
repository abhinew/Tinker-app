import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import FirstPageComponent from './components/FirstPageComponent';
import TenantSelector from './components/TenantSelector';
import HouseSelector from './components/HouseSelector'
import ProfilePageOwnerComponent from './components/ProfilePageOwnerComponent'
import ProfilePageTenantComponent from './components/ProfilePageTenantComponent'
import LoginTenant from './components/LoginTenant';
import LoginOwner from './components/LoginOwner';




class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path ='/' component = {FirstPageComponent} />
          <Route exact path ='/tenants/:tenant' component = {HouseSelector} />
          <Route exact path ='/owners/:owner' component = {TenantSelector} />
          <Route exact path ='/profile/owner' component = {ProfilePageOwnerComponent} />
          <Route exact path ='/profile/tenant' component = {ProfilePageTenantComponent} />
          <Route exact path="/tenants" component={LoginTenant} />
          <Route exact path="/owners" component={LoginOwner} />
        </div>
         </BrowserRouter>
      </Provider>
    );
  }
}

export default connect(null, {})(App)
