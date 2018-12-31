import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { employeeUpdate, employeeEdit, employeeDelete } from '../../actions';
import { FormView, Button, Card, CardSection, Confirm } from '../common';
import EmployeeForm from '../EmpoyeeForm';

class EmployeeEdit extends Component {
    state = {
        showConfirm: false
    }

    componentDidMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onSave = () => { 
        const { name, phone, shift } = this.props;
        const { uid } = this.props.employee;
        this.props.employeeEdit({ name, phone, shift, uid });
    }

    onTextPress = () => {
        const { phone, shift, name } = this.props;
        text(phone, `${name}, your upcoming shift is on ${shift}`);
    }

    acceptFire = () => {
        this.props.employeeDelete({ uid: this.props.employee.uid });
        this.setState({ showConfirm: false });
    } 

    isButtonDisabled = () => {
        const { name, phone } = this.props;

        return !name.length || !phone.length;
    }

    render() {
        return (
            <FormView>
                <Card>
                    <EmployeeForm {...this.props} />
                    <CardSection>
                        <Button onPress={this.onSave} disabled={this.isButtonDisabled()}>
                            Save Changes
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Button
                            onPress={this.onTextPress}
                            disabled={this.isButtonDisabled()} 
                        >
                            Text Schedule
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => this.setState({ showConfirm: true })} >
                            Fire
                        </Button>
                    </CardSection>
                </Card>
                <Confirm
                    visible={this.state.showConfirm}
                    onDecline={() => this.setState({ showConfirm: false })}
                    onAccept={this.acceptFire}
                >
                    Are you sure you want to fire {this.props.name}?
                </Confirm>
            </FormView>
        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;

    return { name, phone, shift };
};


export default connect(mapStateToProps,
    {
        employeeUpdate,
        employeeEdit,
        employeeDelete
    })(EmployeeEdit);
