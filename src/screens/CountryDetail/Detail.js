
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Detail = ({label, value}) => (
    <View style={styles.detail}>
        <Text style={styles.labelStyle}>{label}</Text>
        <Text style={styles.valueStyle}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 12
    },
    labelStyle: {
        fontSize: 16,
        fontWeight: '700',
        flex: 0.4
    },
    valueStyle:{
        fontSize: 14,
        fontWeight: '200',
        flex: 0.6
    }
});

export default Detail;
