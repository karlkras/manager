import types from '../actions/types';

const defaultState = {
    email: '',
    password: '',
    loggedIn: false,
    loading: false,
    error: '',
    user: {}
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.AUTH.EMAIL_CHANGE:
            return { ...state, email: payload };
        case types.AUTH.PASSWORD_CHANGE:
            return { ...state, password: payload };
        case types.AUTH.LOGIN_USER_SUCCESS:
            return { ...state, ...defaultState, user: payload };
        case types.AUTH.LOGIN_USER_ERROR:
            return { ...state, error: payload };
        case types.AUTH.LOGIN_LOADING:
            return { ...state, loading: payload, error: '' };
        default:
            return state;
    }
};
