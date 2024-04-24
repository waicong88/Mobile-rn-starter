import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
const name ='Russell';
  return (
      <View>
        <Text style={styles.textStyle}>Getting Started</Text>
        <Text style={styles.subHeaderStyle}>The user is {name}</Text>

      </View>
      );
    };

const styles = StyleSheet.create({
  textStyle: {
    fontSize:40,
  },
  subHeaderStyle:{
    fontSize:20,
  }

});

export default ComponentsScreen;
