import React from 'react';
import { shallow } from 'enzyme';

import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import App from '../App';

let wrapped;
beforeEach(()=>{
  wrapped = shallow(<App />);
});

it('show a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('show a comment list', ()=>{
  expect(wrapped.find(CommentList).length).toEqual(1);
});
