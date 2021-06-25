
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { CONVERSION_API_KEY } from '../../constants/keys';
const Conversion = ({currency}) => {

    const {code, symbol} = currency;
    const [result, setResult] = useState(0);
    const [amount, setAmount] = useState('');

    const onConvertPress = () => {
        let queryStr = code + '_SEK';
        fetch(`https://free.currconv.com/api/v7/convert?q=${queryStr}&apiKey=${CONVERSION_API_KEY}`).then(result => result.json().
        then(resultJson => setResult((parseFloat(resultJson.results[queryStr].val) * amount))))
        .catch(err => {
            console.log(err);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Some error occured. Please try again',
                visibilityTime: 2000,
                autoHide: true,
              });
        });
    }

    const onChangeInput = (amount) => setAmount(amount);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Convert {code} To SEK:</Text>
            <Input onChangeInput={onChangeInput} text={symbol}/>
            <Button label='Convert' onButtonPress={onConvertPress} />
            <View>
                <Text style={styles.resultStyle}>= {result.toFixed(2)} SEK</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 24 

    },
    header: {
        marginVertical: 12,
        fontSize: 16,
        fontWeight: '400'
    },  

    resultStyle: {
        fontSize: 16,
        fontWeight: '300'
    },

});

export default Conversion;
