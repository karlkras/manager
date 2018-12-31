import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import types from './types';

export const emailChanged = (text) => (
    { 
        type: types.AUTH.EMAIL_CHANGE,
        payload: text 
    }
);

export const passwordChanged = (text) => (
    { 
        type: types.AUTH.PASSWORD_CHANGE,
        payload: text 
    }
);

export const loginUser = (email, password) => (dispatch) => {
    dispatch({ type: types.AUTH.LOGIN_LOADING, payload: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            loginUserSuccess(dispatch, user);
        })
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
            })
            .catch(error => {
                loginUserError(dispatch, error);
            });
        })
        .finally(() => {
            dispatch({ type: types.AUTH.LOGIN_LOADING, payload: false });
        });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: types.AUTH.LOGIN_USER_SUCCESS, payload: user });
    Actions.main();
};

const loginUserError = (dispatch, error) => {
    dispatch({ type: types.AUTH.LOGIN_USER_ERROR, payload: error.message });
};

