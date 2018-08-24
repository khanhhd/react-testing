import React from 'react';
import { mount, unmount } from 'enzyme';
import Root from '../Root'
import App from '../components/App'
import moxios from 'moxios'

beforeEach(()=>{
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'cmt 1'}, {name: 'cmt2'}]
  })
})

afterEach(()=>{
  moxios.uninstall()
})

it('can fetch a list of cmts and display them', () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  )
  wrapped.find('.fetch-comments').simulate('click')
  moxios.wait(()=> {
    wrapped.update()
    expect(wrapped.find('li').length).toEqual(500)
    done()
    wrapped.unmount()
  })
})
