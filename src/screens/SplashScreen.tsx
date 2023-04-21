import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {}

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Indian Railways</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    text: {
        color: 'white',
    }
});

export default SplashScreen;
// SplashScreen