
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import cost from './cost'

export default combineReducers({
  routing,
  cost
})
