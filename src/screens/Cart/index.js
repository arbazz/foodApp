import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { primaryColor } from '../../Config/Colors';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { CartContext } from '../../Context/CartContext'
import Icon from 'react-native-vector-icons/AntDesign'

const Cart = (props) => {
    const [items, setItems] = useContext(CartContext);
    const [update, setUpdate] = useState(0)

    const handleMinus = (i) => {
        items.splice(i, 1)
        setItems(items);
        setUpdate(value => ++value)
    }

    if (items.length) {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.cartTitleContainer}>
                    <Text style={styles.cartText}>Basket</Text>
                </View>
                <View style={styles.itemNumberConatiner}>
                    <Text style={styles.itemText}>{items.length} Items</Text>
                </View>
                {!!items.length && items.map((e, i) => {
                    console.log(e)
                    return (
                        <>
                            <View style={styles.cardContiner} key={i}>
                                <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
                                <View style={styles.leftContainer}>
                                    <Text style={styles.mainName} numberOfLines={2}>{e.title}</Text>
                                    <View style={styles.lastContainer}>
                                        <Text style={styles.price}>Rs {e.id}</Text>
                                        <View style={styles.iconContainer}>
                                            <Icon name="minus" style={styles.icons} onPress={() => handleMinus(i)} />
                                            <Text style={styles.iconCenterText}>1</Text>
                                            <Icon name="plus" style={styles.icons} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.seprator} />
                        </>
                    )
                })}

                <TouchableOpacity style={styles.checkContainer}>
                    <Text style={styles.checkText}>Checkout</Text>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={() => { props.navigation.goBack() }}>
                    <Text style={styles.continueText}>Continue Shopping</Text>
                </TouchableWithoutFeedback>
            </ScrollView>
        )
    } else {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Basket is Empty!</Text>
                <TouchableWithoutFeedback onPress={() => { props.navigation.goBack() }}>
                    <Text style={styles.continueText}>Continue Shopping</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    cartTitleContainer: {
        backgroundColor: primaryColor,
    },
    cartText: {
        color: 'white',
        paddingBottom: 10,
        paddingLeft: 30,
        fontSize: 28,
        // fontWeight: 'bold',
        fontFamily: 'Roboto-Bold'
    },
    itemNumberConatiner: {
        paddingLeft: 10,
        marginTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
    },
    itemText: {
        paddingBottom: 10,
        fontSize: 18
    },
    image: {
        width: Dimensions.get('window').width / 2.5,
        // height:  Dimensions.get('window').height / 4,
    },
    cardContiner: {
        width: '90%',
        alignSelf: "center",
        marginTop: 20,
        flexDirection: 'row',
        height: Dimensions.get('window').height / 4,
        // borderBottomColor: 'black',
        // borderBottomWidth: 2,
    },
    leftContainer: {
        // backgroundColor: 'orange',
        marginLeft: 20,
        width: Dimensions.get('window').width / 2.2,
        height: Dimensions.get('window').height / 4,
        // flexWrap: 'nowrap',
        overflow: 'hidden',
        flexDirection: 'column'
    },
    mainName: {
        fontFamily: 'Roboto-Medium',
    },
    price: {
        // marginTop: '66%',
        alignSelf: 'flex-end'
    },
    lastContainer: {
        // backgroundColor: 'red',
        // flexDirection:'row',
        height: Dimensions.get('window').height / 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // flexWrap: 'wrap',
    },
    seprator: {
        borderColor: 'black',
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    checkContainer: {
        alignSelf: 'center',
        marginTop: 30,
        backgroundColor: primaryColor,
        width: '90%',
        borderRadius: 10
    },
    checkText: {
        color: 'white',
        alignSelf: 'center',
        paddingVertical: 15,
        fontWeight: 'bold',
        fontSize: 18
    },
    continueText: {
        alignSelf: 'center',
        marginTop: 30,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    emptyContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        marginTop: -50,
        fontSize: 42,
        color: primaryColor,
        fontWeight: 'bold'
    },
    iconContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 2
    },
    icons: {
        color: 'white',
        fontSize: 20,
        padding: 3,
    },
    iconCenterText: {
        color: 'white',
        marginTop: 2,
        padding: 2
    }
})