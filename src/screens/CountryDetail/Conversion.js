
import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Toast from 'react-native-toast-message';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { CONVERSION_API_KEY } from '../../constants/keys';
import { colors } from '../../constants/theme';


const Conversion = ({currency}) => {

    const {code, symbol} = currency;
    const [result, setResult] = useState(0);
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const onConvertPress = () => {
        setLoading(true);
        let queryStr = code + '_SEK';
        fetch(`https://free.currconv.com/api/v7/convert?q=${queryStr}&apiKey=${CONVERSION_API_KEY}`).then(result => result.json().
        then(resultJson => {
            setLoading(false);    
            setResult((parseFloat(resultJson.results[queryStr].val) * amount));
        }))
        .catch(err => {
            console.log(err);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Some error occured. Please try again',
                visibilityTime: 2000,
                autoHide: true,
              });
              setLoading(false); 
        });
    }

    const onChangeInput = (amount) => setAmount(amount);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Convert {code} To SEK:</Text>
            <Input onChangeInput={onChangeInput} text={symbol}/>
            {loading ?  <ActivityIndicator color={colors.PRIMARY_COLOR} size='large' style={styles.indicator}/> 
            : <Button label='Convert' onButtonPress={onConvertPress} />}
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
    indicator:{
        marginVertical: 12 
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
