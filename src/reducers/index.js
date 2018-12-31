import { combineReducers } from 'redux';
import authReducer from './authorization';
import employeeFormReducer from './employeeForm';
import employeesReducer from './employees';

export default combineReducers({
    auth: authReducer,
    employeeForm: employeeFormReducer,
    employees: employeesReducer
});
