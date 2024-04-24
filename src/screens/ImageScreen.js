import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return<View>
        <ImageDetail
        title='F12'
        imageSource = {require ('../../assets/F12.jpg')}
        score ={9}
        />
        <ImageDetail
        title='forest'
        imageSource = {require('../../assets/forest.jpg')}
        score = {5}
        />
        <ImageDetail
        title='mountain'
        imageSource = {require('../../assets/mountain.jpg')}
        score={7}
        />

    </View>;
}

const styles = StyleSheet.create({

});

export default ImageScreen;