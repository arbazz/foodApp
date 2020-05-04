import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { primaryColor } from '../../Config/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Swiper = () => {

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container} >
            {[1, 2, 3, 4, 5, 6, 78, 8, 8, 8].map((e, i) => {
                return (
                    <TouchableOpacity style={styles.nameCardContaienr} key={i}>
                        <Text style={[styles.text, i === 0 && {color: primaryColor}]}>Hello Text</Text>
                    </TouchableOpacity>
                )
            })
            }
        </ScrollView>
    )
}

export default Swiper;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexGrow: 1,
        marginTop: 22
    },
    nameCardContaienr: {
        // backgroundColor: 'orange',
        marginLeft: 22
    },
    text: {
        // fontFamily: 'Roboto_hinItalic'
        fontWeight: 'bold'
    }
})