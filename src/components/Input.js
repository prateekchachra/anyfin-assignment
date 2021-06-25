
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const Input = ({onChangeInput, text}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='0'
            style={styles.input}
            onChangeText={onChangeInput}/>
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 0.6,
        margin: 8,
        padding: 4,
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 16
    },
    textStyle: {
        fontStyle: 'italic',
        fontSize: 16
    },
});

export default Input;
