import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import LinkClick from './LinkClick';

describe('LinkClick', () => {
  it('should handle the click event', () => {
    window.alert = jest.fn();
    const output = shallow(<LinkClick title="mockTitle" url="mockUrl"/>);
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('clicked!');
  })

  it('should handle state changes', () => {
    const output = shallow(<LinkClick title="mockTitle" url="mockUrl"/>);

    expect(output.state().clicked).toEqual(false);
    output.simulate('click');
    expect(output.state().clicked).toEqual(true);
  })

});
