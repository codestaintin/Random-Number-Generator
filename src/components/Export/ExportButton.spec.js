import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExportButton from "./ExportButton";

configure({ adapter: new Adapter() });

describe('Test ExportButton component', () => {
  let shallowComponent;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      phoneNumbers: [],
      onClick: () => {}
    };
    shallowComponent = shallow(<ExportButton {...defaultProps} />);
  });

  test('should render the Export button', () => {
    expect(shallowComponent).toMatchSnapshot();
    expect(shallowComponent.length).toEqual(1);
  });

  test('should render export text', () => {
    shallowComponent.setProps({
      phoneNumbers: ['0903428765', '0787665456']
    });
    expect(shallowComponent.find('button').text()).toContain('Export')
  });
});