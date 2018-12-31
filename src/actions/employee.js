import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import types from './types';

export const employeeUpdate = ({ prop, value }) => (
    {
        type: types.EMPLOYEE.UPDATE,
        payload: { prop, value }
    }
);

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    const { EMPLOYEE } = types;
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE.CREATE });
            Actions.pop();
        });
    };
};

export const employeeEdit = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    const { EMPLOYEE } = types;
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE.SAVE_SUCCESS });
            Actions.pop();
        });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    const { EMPLOYEE } = types;
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: EMPLOYEE.REMOVE_SUCCESS });
            Actions.pop();
        });
    };
};

export const employeeClearState = () => (dispatch) => {
    const { EMPLOYEE } = types;
    dispatch({ type: EMPLOYEE.CLEAR_STATE });
};


export const employeesFetch = () => (dispatch) => {
    const { EMPLOYEES } = types;
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ type: EMPLOYEES.FETCH_SUCCESS, payload: snapshot.val() });
        });
};

