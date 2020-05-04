import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const App = (props) => {
    // console.log("the props", props.route.navigation)
    const nav = props.route.navigation;
    return (
        <View style={styles.container}>
            <Text style={styles.mainLogo}>HQC</Text>
            <View style={styles.twoIconCOntainer}>
                <Icon 
                name="search" 
                size={30} 
                color="#900" 
                style={styles.iconSearch} 
                color={"white"}
                onPress={() => { nav.navigate("Search") }}
                    />
                <Icon 
                name="shopping-cart" 
                size={30} 
                color="#900" 
                color={"white"} 
                onPress={() => { nav.navigate("Cart") }}
                 />
            </View>
        </View>
    )
}


export default App;


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30,
        flexDirection: 'row',
        // backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainLogo: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto-ThinItalic'
    },
    twoIconCOntainer: {
        flexDirection: 'row',
        // backgroundColor: 'white'
    },
    iconSearch: {
        marginRight: 10
    }
})