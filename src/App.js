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
          <Route path ="/tenants/:tenantID" component = {HouseSelector} />
          <Route path ='/owners/:ownerID' component = {TenantSelector} />
          <Route path ='/profile/owners/:ownerID' component = {ProfilePageOwnerComponent} />
          <Route path ='/profile/tenants/:tenantID' component = {ProfilePageTenantComponent} />
          <Route exact path="/tenantsLogin" component={LoginTenant} />
          <Route exact path="/ownersLogin" component={LoginOwner} />
        </div>
         </BrowserRouter>
      </Provider>
    );
  }
}

export default connect(null, {})(App)
