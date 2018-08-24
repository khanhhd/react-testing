import React from 'react';
import { mount, unmount } from 'enzyme';
import Root from '../../Root';
import CommentList from '../CommentList'


let wrapped;
beforeEach(() => {
  const intialState = {comments: ['cmt1', 'cmt2']}
  wrapped = mount(
    <Root intialState={intialState}>
      <CommentList />
    </Root>
  );
});

it('create li tag for each cmt', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('contain the comment message', ()=> {
  expect(wrapped.render().text()).toContain('cmt1')
  expect(wrapped.render().text()).toContain('cmt2')
})
