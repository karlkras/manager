import types from '../actions/types';

const shiftDays = [
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
    { label: 'Sunday', value: 'Sunday' }
];

const defaultState = {
    name: '',
    phone: '',
    shift: '',
    shiftDays
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    const { EMPLOYEE } = types;
    switch (type) {
        case EMPLOYEE.UPDATE: 
            return { ...state, [payload.prop]: action.payload.value };
        case EMPLOYEE.CLEAR_STATE:
        case EMPLOYEE.REMOVE_SUCCESS:
        case EMPLOYEE.CREATE:
        case EMPLOYEE.SAVE_SUCCESS:
            return { ...state, ...defaultState };
        default:
            return state;
    }
};
