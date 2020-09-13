import { createStore, combineReducers, applyMiddleware } from"redux";
import CountReducer from "../Reducers/CountReducer";
import {logger} from "../actions/Logger"
import thunk from 'redux-thunk'

const store=createStore(combineReducers({
    count:CountReducer
}),applyMiddleware(logger,thunk)
)
export default store ;