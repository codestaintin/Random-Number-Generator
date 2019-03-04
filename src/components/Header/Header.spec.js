import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from "./Header";

configure({ adapter: new Adapter() });

describe('Test Header component', () => {
  let shallowComponent;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      min: null,
      max: null,
      total: 0,
      phoneNumbers: []
    };
    shallowComponent = shallow(<Header  {...defaultProps} />);
  });

  test('should render the Header component', () => {
    expect(shallowComponent).toMatchSnapshot();
    expect(shallowComponent.length).toEqual(1);
  });
  test('should render text', () => {
    shallowComponent.setProps({
      phoneNumbers : ['0903428765', '0787665456']
    });
    expect(shallowComponent.find('h3').text()).toContain('Details');
    expect(shallowComponent.find('strong').at(0).text()).toContain('Min Phone number');
    expect(shallowComponent.find('strong').at(1).text()).toContain('Max Phone number');
    expect(shallowComponent.find('strong').at(2).text()).toContain('Total number of Phone numbers:');
  });
});