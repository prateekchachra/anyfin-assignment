//import liraries
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';


// create a component
const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() =>  navigation.reset({
            index: 0,
            routes: [{ name: 'Search' }],
          }), 2000);
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
           <Animatable.Text animation="zoomInUp">Country Search</Animatable.Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Splash;
