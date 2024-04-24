import React from "react";
import { Text, StyleSheet, View , Button, TouchableOpacity} from "react-native";

const HomeScreen = props => {

  return (
    <View>
      <Text style={styles.textStyle}>Hello World</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Counter')}
        title="Go to Counter Screen Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Color')}
        title="Go to Colour Screen Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Square')}
        title="Go to Square Screen Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('Text')}
        title="Go to Text Screen Demo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:40,
  },
  buttonStyle: {
    margin: 20,
  }
});

export default HomeScreen;


