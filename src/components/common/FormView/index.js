import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const FormView = ({ children }) => (
    <View style={styles.viewStyle}>
        {children}
    </View>
);

export { FormView };

