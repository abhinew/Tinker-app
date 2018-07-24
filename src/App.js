import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import MainPageOwner from './components/MainPageOwner'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
        <MainPageOwner/>
        
        </div>
         </BrowserRouter>
      </Provider>
    );
  }
}

export default connect(null, {})(App)