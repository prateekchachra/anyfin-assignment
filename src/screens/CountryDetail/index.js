import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Conversion from './Conversion';

import Detail from './Detail';
import Header from './Header';
const CountryDetail = ({route, navigation}) => {

    const {country} = route.params;

    const {name, nativeName, flag, capital, population,  currencies} = country;
    
    const getCurrencyStr = (currencies) => `${currencies[0].code} (${currencies[0].symbol})`
    const getCommaValues = (num) => num.toLocaleString('en-US')

    const onBackPress = () => navigation.pop();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header name={name} nativeName={nativeName} flag={flag}
            onBackPress={onBackPress}/>
            <Detail label='Full Name:' value={name}/>
            <Detail label='Capital:' value={capital}/>
            <Detail label='Population:' value={getCommaValues(population)}/>
            <Detail label='Currency:' value={getCurrencyStr(currencies)}/>
            <Conversion currency={currencies[0]}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding:24
    },

});

export default CountryDetail;
