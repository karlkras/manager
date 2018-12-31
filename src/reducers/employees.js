import types from '../actions/types';

const defaultState = {};

export default (state = defaultState, action) => {
    const { EMPLOYEES } = types;
    switch (action.type) {
        case EMPLOYEES.FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
