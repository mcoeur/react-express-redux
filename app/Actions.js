import Constants from './Constants';

export function incrementAction() {
    return {
        type : Constants.COUNTER_INCREMENT,
        payload : {
            // insert payload here
        }
    }
}

export function decrementAction() {
    return {
        type : Constants.COUNTER_DECREMENT,
        payload : {
            // insert payload here
        }
    }
}