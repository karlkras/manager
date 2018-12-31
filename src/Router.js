import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { getImageSource } from 'react-native-vector-icons/AntDesign';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


class RouterComponent extends Component {
    state = {
        plusIcon: null
    }

    componentDidMount() {
        getImageSource('pluscircleo', 25)
            .then(source => this.setState({ plusIcon: source }));
    }

    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key='auth'>
                        <Scene
                            key="login"
                            component={LoginForm}
                            title="Please Login"
                            initial
                        />
                    </Scene>
                    <Scene key="main">
                        <Scene
                            key="employeeList"
                            component={EmployeeList}
                            title="Employees"
                            rightButtonImage={this.state.plusIcon}
                            rightButtonIconStyle={{ width: 25, height: 25 }}
                            onRight={() => { Actions.employeeCreate(); }}
                            initial
                        />
                        <Scene
                            key="employeeCreate"
                            backTitle="List"
                            component={EmployeeCreate}
                            title="Create Employee"
                        />
                        <Scene
                            key="employeeEdit"
                            backTitle="List"
                            component={EmployeeEdit}
                            title="Edit Employee"
                        />
                    </Scene>
                </Scene>
            </Router>

        );
    }
}

export default RouterComponent;
