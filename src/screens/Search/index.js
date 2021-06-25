import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-toast-message';


const {height} = Dimensions.get('window');

const Search = ({navigation}) => {

    const [query, setQuery] = useState('');
    const [data, setData] = useState(null);

    const navigateToDetail = (item) => navigation.navigate('CountryDetail', {country: item})

    const renderCountryItem = ({item}) => (
        <TouchableOpacity onPress={() => navigateToDetail(item)}>
            <Text style={styles.listItemStyle}>{item.name}</Text>
        </TouchableOpacity>
    )
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all',
        {method: 'GET', headers: {'content-type': 'application/json;charset=utf-8'}}).then(res => 
            res.json().then(resJson =>  setData(resJson)))
        .catch(err => {
            console.log(err);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Some error occured. Please try again',
                visibilityTime: 2000,
                autoHide: true,
              });
            setData([]);
        });
    }, []);


    const filteredData = () => data && query !== '' ? data.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())) : [];
 
    return (
        <View style={styles.container}>
            <Animatable.Text animation="fadeInDown" style={styles.inputLabel}>Select the country for which you'd like the details</Animatable.Text>
            <View style={styles.autocompleteContainer}>
            <Autocomplete
                data={filteredData()}
                value={query}
                inputContainerStyle={styles.inputStyle}
                listContainerStyle={styles.listContainerStyle}
                listStyle={styles.listStyle}
                onChangeText={(text) => setQuery(text)}
                flatListProps={{
                    keyExtractor: (_, idx) => idx,
                    renderItem: renderCountryItem,
                }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    autocompleteContainer: {
        flex: 1,
        left: 12,
        position: 'absolute',
        right: 12,
        top: height/4,
        zIndex: 1
      },
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginHorizontal: 24,
        marginVertical: 24
    },
    inputStyle: {
        borderRadius: 12,
        borderWidth: 2
    },

    listStyle: {
      borderWidth: 0,
      elevation: 8,
    },
    listContainerStyle: {
        maxHeight: 300
    },
    listItemStyle: {
      marginVertical: 8,
      marginHorizontal: 4,
      fontSize: 16
    }
});

export default Search;
