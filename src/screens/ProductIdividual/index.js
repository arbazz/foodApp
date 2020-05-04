import React, { useState, useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { primaryColor } from '../../Config/Colors'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { CartContext } from '../../Context/CartContext'

const Product = ({ navigation, route }) => {
    const [items, setItems] = useContext(CartContext);
    console.log(route)
    const data = route.params.data;
    const onAdd = () => {
        setItems(prevItems => [...prevItems, data])
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.circleMain}>

                <View style={styles.circleContianer}>
                    <View>
                        <Text numberOfLines={1} style={styles.textTittle} >{data.title}</Text>
                        <Image
                            source={{ uri: 'https://picsum.photos/200/300' }}
                            style={styles.image}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.fullName}>{data.title}</Text>
                <Text style={styles.price}>Rs {data.id}</Text>
            </View>
            <View style={styles.descContainer}>
                <Text>{data.body}</Text>
            </View>
            <TouchableOpacity style={styles.btnContainer} onPress={onAdd}>
                <Text style={styles.btnText}>Add to basket</Text>
            </TouchableOpacity>
            <View style={styles.seprator} />
        </ScrollView>
    )
}


export default Product;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    circleContianer: {
        backgroundColor: primaryColor,
        height: 180,
        borderBottomRightRadius: 120,
        borderBottomLeftRadius: 120,
        // width: '140%',
        // alignSelf: 'center'
    },
    image: {
        width: '85%',
        height: 320,
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 10,
    },
    textTittle: {
        color: 'white',
        marginTop: '5%',
        alignSelf: 'center',
        fontSize: 18,
        width: '90%'
    },
    secondContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 10,
    },
    fullName: {
        width: '70%',
        fontWeight: '700'
    },
    price: {
        fontWeight: '700'
    },
    descContainer: {
        width: '80%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    btnContainer: {
        backgroundColor: primaryColor,
        width: '80%',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        elevation: 10,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnText: {
        color: 'white'
    },
    circleMain: {
        height: 400
    },
    seprator: {
        height: 30
    }
})