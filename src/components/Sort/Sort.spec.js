import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SortBy from "./SortBy";

configure({ adapter: new Adapter() });

describe('Test SortBy component', () => {
  let shallowComponent;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      phoneNumbers: [],
      onChange: () => {}
    };
    shallowComponent = shallow(<SortBy {...defaultProps} />)
  });

  test('should render the SortBy component', () => {
    expect(shallowComponent).toMatchSnapshot();
    expect(shallowComponent.length).toEqual(1);
  });

  test('should render fields', () => {
    shallowComponent.setProps({
      phoneNumbers : ['0903428765', '0787665456']
    });
    expect(shallowComponent.find('span').text()).toContain('Sort by');
    expect(shallowComponent.find('option').at(0).text()).toContain('Ascending');
    expect(shallowComponent.find('option').at(1).text()).toContain('Descending');
  });
});