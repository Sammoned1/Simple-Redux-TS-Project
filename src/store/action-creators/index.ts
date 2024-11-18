import * as TodoActionCreators from './todo'
import * as UserActionCreators from './user'

const ActionCreators = {
  ...UserActionCreators,
  ...TodoActionCreators
}

export default ActionCreators