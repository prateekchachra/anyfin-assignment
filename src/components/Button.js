
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = ({onButtonPress, label}) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onButtonPress}>
            <Text style={styles.buttonLabelStyle}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
       
    buttonStyle: {
        backgroundColor: '#41ffee',
        width: 100,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 12
    },
    buttonLabelStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default Button;
