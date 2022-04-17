import {createStore, combineReducers} from 'redux';
import counterReducer from './counterReducer'
import authReducer from './authReducer'

const reducers = combineReducers({
    counter: counterReducer,
    auth: authReducer
})

const store = createStore(reducers)

export default store