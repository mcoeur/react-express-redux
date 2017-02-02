import Counter from './Counter';
import { connect } from 'react-redux';

import { decrementAction, incrementAction } from '../Actions';


function mapStateToProps(state) {
    return {
        counter: state.counter,
    };
}

export default connect(mapStateToProps, {
    increment: incrementAction,
    decrement : decrementAction
})(Counter);

