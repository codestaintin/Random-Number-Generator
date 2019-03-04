import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhoneNumber from "./PhoneNumber";

configure({ adapter: new Adapter() });

describe('Test GeneratedNumbers component', () => {
  let shallowComponent;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      phoneNumbers: []

    };
    shallowComponent = shallow(<PhoneNumber {...defaultProps} />);
  });

  test('should render the PhoneNumber component', () => {
    expect(shallowComponent).toMatchSnapshot();
    expect(shallowComponent.length).toEqual(1)
  });

  test('should text when there are no phone numbers', () => {
    expect(shallowComponent.find('div').find('span').text()).toContain('No phone numbers at the moment')
  });

  test('should render text when there are phone numbers', () => {
    shallowComponent.setProps({
      phoneNumbers : ['0903428765', '0787665456']
    });
    expect(shallowComponent.find('div').find('h3').text()).toContain('Generated Phone Numbers')
  });

  test('should render phone numbers', () => {
    shallowComponent.setProps({
      phoneNumbers : ['0903428765', '0787665456']
    });
    expect(shallowComponent.find('div').find('ul').text()).toContain('0903428765')
  });
});