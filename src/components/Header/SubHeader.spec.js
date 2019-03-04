import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubHeader from "./SubHeader";

configure({ adapter: new Adapter() });

describe('Test SubHeader component', () => {
  let shallowComponent;

  beforeEach(() => {
    shallowComponent = shallow(<SubHeader />);
  });

  test('should render once', () => {
    expect(shallowComponent).toMatchSnapshot();
    expect(shallowComponent.length).toEqual(1)
  });
});