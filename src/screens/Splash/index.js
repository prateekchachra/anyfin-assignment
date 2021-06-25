import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';


const ANIM_DURATION = 2000;

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() =>  navigation.reset({
            index: 0,
            routes: [{ name: 'Search' }],
          }), ANIM_DURATION);
    }, []);

    let _animation = null;
    return (
        <View style={styles.container}>
            <LottieView
            autoPlay 
            loop
            ref={animation => {
            _animation = animation;
            }}
            source={require('../../assets/animations/search.json')}
        />
           <Animatable.Text animation="bounceInLeft" duration={ANIM_DURATION} style={styles.title}>Euro-Country Search</Animatable.Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        position: 'absolute',
        bottom: 24,
        fontSize: 24,
        fontWeight: 'bold',
        
    }
});


export default Splash;
