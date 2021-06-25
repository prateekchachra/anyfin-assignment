
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Header = ({name, nativeName, flag, onBackPress}) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
            <Text style={styles.backButtonText}>{'< Back'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{name} ({nativeName})</Text>
        <SvgUri uri={flag} height={100} width={200} />
    </View>
)

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 48,
        marginBottom: 24
    },
    backButton: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    backButtonText: {
        fontSize: 16,
        fontWeight: '400',
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12
    }
});


export default Header;
