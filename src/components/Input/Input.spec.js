import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from "./Input";

configure({ adapter: new Adapter() });

describe('Test Input Component', () => {
  let shallowComponent;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      onClick: () => {},
      onChange: () => {}
    };
    shallowComponent = shallow(<Input {...defaultProps} />);
  });

  test('should render the Input component', () => {
    expect(shallowComponent).toMatchSnapshot();
    expect(shallowComponent.length).toEqual(1)
  });
});