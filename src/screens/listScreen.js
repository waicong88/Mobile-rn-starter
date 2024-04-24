import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const listScreen =() => {
    const friends = [
        { name: 'Friend #1',age:19},
        { name: 'Friend #2',age:20},
        { name: 'Friend #3',age:21},
        { name: 'Friend #4',age:22},
        { name: 'Friend #5',age:22},
        { name: 'Friend #6',age:23},
        { name: 'Friend #7',age:23},
        { name: 'Friend #8',age:24},
        { name: 'Friend #9',age:24}
    ];
    return(
        <FlatList
            keyExtractor={friends => friends.name}
            data={friends}
            renderItem={({ item })=> {
                return <Text style={styles.textStyle}>
                {item.name} - {item.age}</Text>;
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle :{
        marginVertical: 50

    }

});

export default listScreen;