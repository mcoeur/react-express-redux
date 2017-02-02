import { combineReducers } from 'redux';
import Constants from './Constants';

function counter(state = 0, action) {
    switch (action.type) {
        case Constants.COUNTER_INCREMENT:
            return state + 1;
        case Constants.COUNTER_DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default combineReducers({
    counter
});
