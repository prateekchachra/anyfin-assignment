
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';


const Button = ({onButtonPress, label}) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onButtonPress}>
            <Text style={styles.buttonLabelStyle}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: colors.PRIMARY_COLOR,
        width: 100,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12
    },
    buttonLabelStyle: {
        color: colors.PRIMARY_WHITE,
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default Button;
