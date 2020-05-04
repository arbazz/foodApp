import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextSwipper from '../../Components/TextSwiper/TextSwipper'
import Swiper from '../../Components/CatergorySwiper/Swiper'
import { primaryColor } from '../../Config/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const Discover = () => {

    return (
        <ScrollView style={styles.container}>

            <TextSwipper />

            <Text style={styles.textTitle}>Today's Best Deal</Text>
            <Swiper />
            
            <Text style={styles.textTitle}>Continental</Text>
            <Swiper />
            
            <Text style={styles.textTitle}>Fast Food</Text>
            <Swiper />
        </ScrollView>
    )
}

export default Discover;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // flex: 1
    },
    textTitle: {
        marginLeft: 22,
        marginTop: 30,
        fontSize: 20,
        color: primaryColor,
        fontWeight: '600'
    }
})