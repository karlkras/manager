import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({ onPress, disabled, children }) => (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle} disabled={disabled}>
        <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
);

Button.propTypes = {
    onPress: PropTypes.func.isRequired
};

export { Button };
