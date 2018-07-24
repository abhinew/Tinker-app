import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import FirstPage from './components/FirstPage'
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <main>
          <Route exact path="/" component={FirstPage} />
          </main>
          
        </div>
      </Provider>
    );
  }
}

export default App;