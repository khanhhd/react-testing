import { saveComment } from '../index'
import { SAVE_COMMENT } from '../types'

describe('saveComment', () => {
  it('has correct type', ()=> {
    const action = saveComment()
    expect(action.type).toEqual(SAVE_COMMENT)

  })

  it('has correct payload', ()=> {
    const action = saveComment('CMT')
    expect(action.payload).toEqual('CMT')
  })
})

describe('fetchComment', ()=> {
  it('has correct type', ()=> {

  })

  it('has correct payload', ()=> {

  })
})
