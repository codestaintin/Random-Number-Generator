import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SubHeader from './components/Header/SubHeader'
import Input from './components/Input/Input';
import PhoneNumbers from './components/PhoneNumbers/PhoneNumber';
import SortBy from './components/Sort/SortBy';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="wrapper">
          <SubHeader />
          <div className="App-body">
            <div className="input-wrapper">
              <Input />
              <SortBy />
            </div>
            <PhoneNumbers />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
