import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // flexDirection: 'row',
        height: 200,
        
    },
    
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',       
        backgroundColor: 'yellow',
        // margin: 20,
        // padding: 20,
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        // alignSelf: 'center',
        // margin: 20,
        // padding: 20,
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'green',
        // margin: 20,
        // padding: 20,
    },
});

export default BoxScreen;