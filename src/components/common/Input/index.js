import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const Input = (
    {
        value,
        onChangeText,
        label,
        autoCorrect,
        placeholder,
        autoCapitalize,
        secureTextEntry
    }) => {
    const { inputStyle, containerStyle, labelStyle } = styles;
    const theAutoCorrect = autoCorrect == null ? true : autoCorrect;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                style={inputStyle}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                autoCorrect={theAutoCorrect}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
            />
        </View>
    );
};

Input.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    label: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    placeholder: PropTypes.string,
    autoCapitalize: PropTypes.string,
    secureTextEntry: PropTypes.bool
};

export { Input };
