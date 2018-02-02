import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM, { render } from 'react-dom';
import LinkClick from './LinkClick';

jest.mock('react-dom');

describe('LinkClick', () => {
  it('should render correctly', () => {
    ReactDOM.render(<LinkClick title="mockTitle" url="mockUrl" />, 'element-node');

    expect(render).toHaveBeenCalledWith(
      <LinkClick title="mockTitle" url="mockUrl" />, 'element-node'
    )

    expect(render).toHaveBeenCalledTimes(1);
  });
});
