import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormView, Button, Card, CardSection } from '../common';
import { employeeCreate, employeeClearState } from '../../actions/employee';
import EmployeeForm from '../EmpoyeeForm';

class EmployeeCreate extends Component {

    componentDidMount() {
        this.props.employeeClearState();
    }

    onSave = () => {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
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
                            Create
                        </Button>
                    </CardSection>
                </Card>
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
        employeeCreate,
        employeeClearState
    })(EmployeeCreate);
