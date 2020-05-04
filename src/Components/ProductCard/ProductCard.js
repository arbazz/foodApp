import React, { useState } from 'react';
import { FlatList, StyleSheet, ImageBackground } from 'react-native';
import { Text } from 'react-native'
import { primaryColor } from '../../Config/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';



function Item({ data, props }) {
    data ? '' : data = '';
    // console.log(props)
    return (
        <TouchableOpacity style={styles.container} onPress={s => props.navigate("Product", {data})}>
            <ImageBackground
                source={{ uri: 'https://picsum.photos/200/300' }}
                style={styles.imageBackground}
                imageStyle={{ borderRadius: 10 }}
            >
                <Text style={styles.price}>Rs {data.userId}</Text>
            </ImageBackground>
            <Text style={styles.nameCont} numberOfLines={1}>{data.title}</Text>
            <Text style={styles.dec} numberOfLines={3}>{data.body}</Text>
        </TouchableOpacity>
    );
}


const ProductCard = ({ data, navigation }) => {
    // console.log(navigation)

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Item data={item} props={navigation} />}
            keyExtractor={item => item.id.toString()}
        />
    )
}


export default ProductCard;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        paddingBottom: 20
    },
    imageBackground: {
        width: '100%',
        height: 200,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    price: {
        backgroundColor: primaryColor,
        color: 'white',
        marginRight: 20,
        marginBottom: 17,
        paddingVertical: 7,
        paddingHorizontal: 14,
        borderRadius: 7
    },
    nameCont: {
        fontSize: 19,
        fontWeight: 'bold',
        paddingTop: 4,
        paddingLeft: 2
    },
    dec: {
        paddingLeft: 2,
        color: 'grey',

    }
})