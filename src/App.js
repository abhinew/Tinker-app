import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import FirstPageComponent from './components/FirstPage';
import MainPageTenant from './components/MainPageTenant';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MainPageOwner from './components/MainPageOwner'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route exact path ='/main' component = {FirstPageComponent} />
          <Route exact path ='/main/owner' component = {MainPageOwner} />
          <Route exact path ='/main/tenant' component = {MainPageTenant} />
        
        

        <main>
          <Route exact path="/" component={FirstPage} />
          </main>
        </div>
         </BrowserRouter>
      </Provider>
    );
  }
}

export default connect(null, {})(App)
