import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountryDetail = ({route}) => {

    const {country} = route.params;
    return (
        <View style={styles.container}>
            <Text>{country.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});

export default CountryDetail;
