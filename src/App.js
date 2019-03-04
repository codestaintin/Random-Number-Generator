import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SubHeader from './components/Header/SubHeader'
import Input from './components/Input/Input';
import PhoneNumbers from './components/PhoneNumbers/PhoneNumber';
import SortBy from './components/Sort/SortBy';
import Error from './components/Error/Error';

/**
 * App class
 */
class App extends Component {
  state = {
    error: false,
    message: "",
    bound: 1,
    phoneNumbers: [],
    max: null,
    min: null,
    total: 0,
    defaultSort: 'asc'
  };

  /**
   * Handle Input
   *
   * @return {object} event
   * @param {object} event
   */
  handleInput = async event => {
    event.preventDefault();
    const bound = event.target.value;
    try {
      if (Math.floor(Number(bound))) {
        this.setState({
          bound
        })
      }
    } catch (e) {
      this.setState({
        error: true,
        message: "An error occurred during this operation"
      })
    }
  };
  /**
   * Handle MinMax
   *
   * @return {object} event
   * @param {object} event
   */
  handleMinMax = () => {
    const { phoneNumbers } = this.state;
    if (phoneNumbers.length > 0) {
      const min = Math.min(...phoneNumbers);
      const max = Math.max(...phoneNumbers);
      const total = phoneNumbers.length;
      this.setState({
        min,
        max,
        total
      })
    }
  };
  /**
   * Sort Phone numbers
   */
  sortPhoneNumbers = () => {
    const { defaultSort, phoneNumbers } = this.state;
    if (!phoneNumbers.length > 0) return;
    if(defaultSort === 'asc'){
      this.setState({
        phoneNumbers : phoneNumbers.sort((a, b) => 0 - (a > b ? -1 : 1))
      });
    } else {
      this.setState({
        phoneNumbers : phoneNumbers.sort((a, b) => 0 - (a > b ? 1 : -1))
      })
    }
  };

  /**
   * Handle sort change
   *
   * @return {object} event
   * @param {object} event
   */
  handleSortChange = event => {
    event.preventDefault();
    const sorter = event.target.value;
    this.setState({
      sorter
    }, () => this.sortPhoneNumbers());
  };

  /**
   * Handle number generation
   *
   * @return {object} event
   * @param {object} event
   */
  handleNumberGeneration = event => {
    event.preventDefault();
    const { bound } = this.state;
    if (bound > 10000) return this.setState({
      error: true,
      message: "Please enter a number less than 10000"
    });
    let phoneNumbers = [];
    let phoneNumber = 0;
    while (phoneNumber < bound) {
      phoneNumbers.push('0' + Math.floor(Math.random() * 900000000 + 100000000));
      phoneNumber++;
    }
    return this.setState({
      phoneNumbers
    }, () =>
      this.handleMinMax(),
      this.sortPhoneNumbers()
    );
  };

  render() {
    const { error, message, phoneNumbers, max, min, total } = this.state;
    return (
      <Fragment>
        <Header
          phoneNumbers={phoneNumbers}
          min={min}
          max={max}
          total={total}
        />
        <div className="wrapper">
          <SubHeader />
          <div className="App-body">
            <Error
              error={error}
              message={message}
            />
            <div className="input-wrapper">
              <Input
                onClick={this.handleNumberGeneration}
                onChange={this.handleInput}
              />
              <SortBy
                phoneNumbers={phoneNumbers}
                onChange={this.handleSortChange}
              />
            </div>
            <PhoneNumbers
              phoneNumbers={phoneNumbers}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
