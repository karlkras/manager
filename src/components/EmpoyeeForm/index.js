import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { Input, CardSection } from '../common';
import { employeeUpdate } from '../../actions/employee';
import styles from './styles';


class EmployeeForm extends Component {
    renderPicker = () => (
        <Fragment>
            <Text style={styles.label}>
                Select Shift
            </Text>
            <Picker
                style={styles.picker}
                selectedValue={this.props.shift}
                onValueChange={value => 
                    this.props.employeeUpdate({ prop: 'shift', value })}
            >
                { this.props.shiftDays.map(day => (
                    <Picker.Item
                        key={day.label}
                        label={day.label}
                        value={day.value}
                    />
                )) }
            </Picker>
        </Fragment>
    );

    render() {
        return (
            <Fragment>
                <CardSection>
                    <Input
                        label='Name'
                        onChangeText={value => 
                            this.props.employeeUpdate({ prop: 'name', value })}
                        value={this.props.name}
                        placeholder='name'
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        onChangeText={value => 
                            this.props.employeeUpdate({ prop: 'phone', value })}
                        value={this.props.phone}
                        placeholder='XXX-XXX-XXXX'
                    />
                </CardSection>
                <CardSection style={styles.pickerSection}>
                    {this.renderPicker()}
                </CardSection>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift, shiftDays } = employeeForm;

    return { name, phone, shift, shiftDays };
};

export default connect(mapStateToProps,
    {
        employeeUpdate
    })(EmployeeForm);
