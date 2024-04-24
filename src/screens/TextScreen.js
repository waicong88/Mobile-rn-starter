import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextScreen = () => {
    return (
        <View>
            <TextInput/>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;