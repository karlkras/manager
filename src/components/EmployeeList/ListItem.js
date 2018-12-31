import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../common';
import styles from './styles';

class ListItem extends Component {

    onRowPress = () => {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { employee } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {employee.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
    

export default ListItem;
