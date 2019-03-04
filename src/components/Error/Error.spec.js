import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from "./Error";

configure({ adapter: new Adapter() });

describe('Test Error component', () => {
  let spy;
  let shallowComponent;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      error: false,
      message: ''
    };
    shallowComponent = shallow(<Error {...defaultProps} />);
    spy = shallowComponent.instance();
  });

  test('should render the error component', () => {
    expect(shallowComponent).toMatchSnapshot();
    expect(shallowComponent.length).toEqual(1);
  });
});