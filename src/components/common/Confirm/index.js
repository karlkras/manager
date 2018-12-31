import React from 'react';
import { Text, View, Modal } from 'react-native';
import PropTypes from 'prop-types';
import { CardSection } from '../CardSection';
import { Button } from '../Button';
import styles from './styles';

const Confirm = ({ children, onAccept, onDecline, visible }) => (
    <Modal
        animationType="fade"
        onRequestClose={() => {}}
        transparent
        visible={visible}
    >
        <View style={styles.container}>
            <CardSection style={styles.cardSection}>
                <Text style={styles.text}>
                    {children}
                </Text>
            </CardSection>
            <CardSection style={styles.cardSection}>
                <Button onPress={onAccept}>Yes</Button>
                <Button onPress={onDecline}>No</Button>
            </CardSection>
        </View>
    </Modal>
);

Confirm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]),
    onAccept: PropTypes.func.isRequired,
    onDecline: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

export { Confirm };
