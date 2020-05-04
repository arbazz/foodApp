import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Swiper = ({ data, navigation }) => {
    // console.log(navigation)
    data ? '' : data = [];
    return (
        <View style={styles.container}>

            <ScrollView
                horizontal={true} showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.secondContiner}>
                {!!data.length && data.map(e => {
                    return (
                        <TouchableOpacity onPress={s => navigation.navigate("Product", {data: e})}>
                            <ImageBackground
                                source={{ uri: 'https://picsum.photos/200/300' }}
                                style={styles.imageBack}
                                key={e}
                                imageStyle={{ borderRadius: 10 }}
                            >
                                <View style={styles.innerCont}>
                                    <View style={styles.innerThirdCont}>
                                        <Text style={styles.innerText} numberOfLines={1}>{e.title}</Text>
                    <Text style={styles.innerSecText}>Rs {e.id}</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}


export default Swiper;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // flex: 1
    },
    imageBack: {
        width: 280,
        height: 180,
        marginTop: 20,
        padding: 20,
        marginRight: 20,
    },
    secondContiner: {
        flexDirection: 'row',
        flexGrow: 1,
        padding: 20
    },
    innerCont: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    innerText: {
        fontSize: 16,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
        width: '98%',
    },
    innerThirdCont: {
        backgroundColor: 'white',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 10,
        borderRadius: 6,
    },
    innerSecText: {
        fontSize: 12
    }
})