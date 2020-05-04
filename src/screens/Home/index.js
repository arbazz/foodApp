import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import MainCard from '../../Components/Card/MainCard'
import Swiper from '../../Components/CatergorySwiper/Swiper'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { ScrollView } from 'react-native-gesture-handler';
import { ProductContext } from '../../Context/Products'

const App = (props) => {
    const [product, setProduct] = useContext(ProductContext);
    // console.log('props', product[0])
    let nav = props.navigation
    return (
        <ScrollView style={styles.container}>
            <MainCard navigation={nav} data={product[0]} />

            <Swiper navigation={nav} data={product.slice(1, 10)} />

            <ProductCard navigation={nav} data={product.slice(11, 50)} />

        </ScrollView>
    )
}


export default App;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})