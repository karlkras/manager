import React, { Component } from 'react';
import { FlatList } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeesFetch } from '../../actions/employee';
import ListItem from './ListItem';
import { FormView } from '../common';

class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch();
    }

    renderRow = ({ item: employee }) => {
        return <ListItem employee={employee} />;
    };

    render() {
        return (
            <FormView>
                <FlatList
                    data={this.props.employees}
                    renderItem={this.renderRow}
                    keyExtractor={item => item.uid}
                />
            </FormView>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => (
        { ...val, uid }
    ));
    return { employees };
};

export default connect(mapStateToProps,
    { 
        employeesFetch
    })(EmployeeList);
