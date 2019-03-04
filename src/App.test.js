import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App Test', () => {
  let instance;
  let shallowComponent;

  beforeEach(() => {
    shallowComponent = shallow(<App />);
    instance = shallowComponent.instance();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should render the App component', () => {
    expect(shallowComponent).toMatchSnapshot();
    expect(shallowComponent.length).toEqual(1);
  });

  test('should set error to true when bound is greater than 10000 and display a message', () => {
    const event = {
      preventDefault: () => {},
    };

    shallowComponent.setState({ bound: 20000 });
    instance.handleNumberGeneration(event);
    const state = shallowComponent.state();

    expect(state.bound).toEqual(20000);
    expect(state.error).toBe(true);
    expect(state.message).toBe("Please enter a number less than 10000");
  });

  test('should generate phone numbers', () => {
    const event = {
      preventDefault: () => {},
    };
    shallowComponent.setState({ bound: 10 });
    instance.handleNumberGeneration(event);
    const state = shallowComponent.state();

    expect(state.bound).toEqual(10);
    expect(state.error).toBe(false);
  });

  test('should update the details', () => {
    const event = {
      preventDefault: () => {},
    };

    shallowComponent.setState({ bound: 20 });
    instance.handleNumberGeneration(event);
    const state = shallowComponent.state();

    expect(state.total).toBe(20);
    expect(state.min).toBeDefined();
    expect(state.max).toBeDefined();
  });

  test('should set bound', async () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: 10
      }
    };

    await instance.handleInput(event);
    const state = shallowComponent.state();
    expect(state.bound).toBe(10);
  });

  test('should not change the bound', async () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: 'hmmm'
      }
    };
    await instance.handleInput(event);
    const state = shallowComponent.state();
    expect(state.bound).toBe(1);
  });

  test('should set details', () => {
    shallowComponent.setState({ phoneNumbers: ['0903428765', '0787665456']});
    instance.handleMinMax();
    const state = shallowComponent.state();

    expect(state.total).toBe(2);
    expect(state.min).toBeDefined();
    expect(state.max).toBeDefined();
  });

  test('should test sortPhoneNumbers', () => {
    shallowComponent.setState({ defaultSort: 'desc', phoneNumbers: ['0903428765', '0787665456'] });
    instance.sortPhoneNumbers();
    const state = shallowComponent.state();

    expect(state.phoneNumbers.length).toBeGreaterThan(1);
    expect(state.defaultSort).toBe('desc');
  });

  test('should call sortPhoneNumbers', () => {
    shallowComponent.setState({ phoneNumbers: ['0903428765', '0787665456']});
    const event = {
      preventDefault: () => {},
      target: {
        value: 'desc'
      }
    };

    let spy;
    spy = jest.spyOn(instance, 'handleSortChange');
    instance.handleSortChange(event);
    const state = shallowComponent.state();

    expect(state.defaultSort).toBe('asc');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  test('should call sortPhoneNumbers with ascending order', () => {
    shallowComponent.setState({ phoneNumbers: ['0903428765', '0787665456']});
    const event = {
      preventDefault: () => {},
      target: {
        value: 'asc'
      }
    };
    let spy;
    spy = jest.spyOn(instance, 'handleSortChange');
    instance.handleSortChange(event);
    const state = shallowComponent.state();

    expect(state.defaultSort).toBe('asc');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
