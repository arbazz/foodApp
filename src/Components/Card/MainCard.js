import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { terscheryColor } from '../../Config/Colors';

const MainCard = ({ navigation, data }) => {
    // console.log("nav", navigation)
    data ? '' : data = "";
    return (
        <TouchableOpacity style={styles.Containr} onPress={() => { navigation.navigate("Product", {data}) }}>
            <ImageBackground source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>Rs {data.id}</Text>
                </View>
            </ImageBackground>
            <View style={styles.otherContainer}>
                <Text style={styles.mainName} numberOfLines={2}>{data.title}</Text>
                <Text style={styles.desc} numberOfLines={6}>{data.body}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default MainCard;


const styles = StyleSheet.create({
    Containr: {
        width: '90%',
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        elevation: 10,

    },
    image: {
        width: '100%',
        height: 210,
        flex: 1
    },
    otherContainer: {
        width: '45%',
        marginTop: 30,
        paddingHorizontal: 20
    },
    desc: {
        flexWrap: 'wrap',
        marginTop: 10,
        marginLeft: 2
    },
    mainName: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    priceContainer: {
        backgroundColor: terscheryColor,
        alignSelf: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 5,
        margin: 10,
        borderRadius: 5
    },
    priceText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
})