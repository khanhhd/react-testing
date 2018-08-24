import React from 'react';
import { mount, unmount } from 'enzyme';
import Root from '../../Root';

import CommentBox from '../CommentBox';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('Has a text area and button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
 });

describe('The textarea', () => {
  beforeEach(()=>{
    wrapped.find('textarea').simulate('change', {target: {value: 'new comment'}});
    wrapped.update();
  });

  it('Has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('When form is submitted, textarea gets emptied', () => {
    wrapped.find('form').simulate('submit');
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
})
