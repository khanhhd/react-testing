import commentsReducers from '../comments'
import { SAVE_COMMENT } from '../../actions/types'

it ('handles action of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New cmt'
  }

  const newState = commentsReducers([], action)

  expect(newState).toEqual(['New cmt'])
})

it ('unknow type', () => {
  const newState = commentsReducers([], {type: 'ASDF'})
  expect(newState).toEqual([])
})
