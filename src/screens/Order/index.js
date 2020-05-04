import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Orders = () => {

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.container}>
           
            <View style={styles.cardContainer}>
                <View style={styles.topContainer}>
                    <Text style={styles.orderNo}>order no:  023402492309</Text>
                    <Text style={styles.date}>Date : 22/5/2020</Text>
                </View>
                <View style={styles.secContainer}>
                    <View style={styles.textSecContainer}>
                        <Text style={styles.quantity}>Quantity: </Text>
                        <Text style={styles.qTBlack}>3</Text>
                    </View>
                    <View style={styles.textSecContainer}>
                        <Text style={styles.ammount}>Total Ammount: </Text>
                        <Text style={styles.qTBlack}>300</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.detailsBtn}>
                    <Text style={styles.btnText}>Details</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}

export default Orders;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {
        flexDirection: 'row',
    },
    cardContainer: {
        width: '90%',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 30,
        elevation: 15,
        padding: 15,
        borderRadius: 10
    },
    orderNo: {
        width: '70%',
        fontSize: 14,
        fontWeight: 'bold'
    },
    date: {
        flexWrap: 'wrap',
        width: '30%',
        color: 'grey',
        fontSize: 12
    },
    secContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    quantity: {
        color: 'grey'
    },
    ammount: {
        color: 'grey'
    },
    textSecContainer: {
        flexDirection: 'row'
    },
    qTBlack: {
        fontWeight: 'bold'
    },
    detailsBtn: {
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: '30%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20
    },
    btnText: {
        fontWeight: 'bold'
    }
})