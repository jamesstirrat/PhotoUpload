//#0 Import createStore from redux
//#1 Create Store and import

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import postReducer from './../reducers/postReducer'

export default Store = createStore(postReducer, applyMiddleware(thunk))
