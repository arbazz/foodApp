import React from 'react';
import { Keyboard, View, Text, StyleSheet, Image, ActivityIndicator, StatusBar } from 'react-native'
import {  primaryColor } from '../../Config/Colors'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: [],
            isSearching: false
        }
    }

    async componentDidMount() {

    }

    handleSearch = async () => {
        this.setState({isSearching: true})
        // const { search } = this.state;
        // await axios.get(`${MainLink}/search/startSearch`, {
        //     params: {
        //         key: search
        //     }
        // })
        //     .then((response) => {
        //         // handle success
        //         console.log(response.data);
        //         this.setState({ data: response.data, isSearching: false })
        //     })
        //     .catch((error) => {
        //         // handle error
        //         this.setState({isSearching: false})
        //         alert("something went wrong")
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed
        //         console.log("getting feature finsished")
            // });
    }


    render() {
        const { data, search, isSearching } = this.state;
        return (
            <>
                <StatusBar backgroundColor={primaryColor} />

                <View style={styles.headerContainer}>
                    <View style={styles.secContaienr}>
                        <Icon
                            style={styles.hamicon}
                            name="arrow-left"
                            onPress={() => { this.props.navigation.goBack() }} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Search..."
                            onChangeText={(e) => { this.setState({ search: e }) }}
                        />
                        <Icon
                            style={styles.hamicon}
                            name="search"
                            onPress={() => { this.handleSearch() }} />
                    </View>
                </View>

                <ScrollView>
                    {!!isSearching && <View style={styles.seachinForCoantiner}>
                        <Text>Seraching for {search}</Text>
                        <ActivityIndicator size={14} style={{ marginLeft: 14 }} />
                    </View>}
                    {!!data.length && data.map((e, i) => {
                           const name = e.name;
                           const id = e.id;
                           const images = e.images.length ? e.images[0].src : null
                           const price = e.price;
                           const otherData = e;
                           const description = e.description;
                           const allImages = e.images.length ? e.images : null
                           const stock_quantity = e.stock_quantity;
                        return (
                            <TouchableOpacity style={styles.cardContainer} key={i} 
                            onPress={() => {this.props.nav.navigate("ProductPage",{allImages, price, name, description, stock_quantity, id})}}>
                                <View style={styles.productNameAndPicContainer}>
                                    <Text
                                        numberOfLines={2}
                                        style={styles.productName}>{e.name}</Text>
                                    <Image
                                        style={styles.image}
                                        source={e.images.length ? { uri: e.images[0].src } : {uri: 'https://www.freeiconspng.com/uploads/no-image-icon-11.PNG'}} />
                                </View>
                                <View style={styles.priceAndDecContainer}>
                                    <Text style={styles.price}>Rs {e.price}</Text>
                                    <Text
                                        numberOfLines={4}
                                        style={styles.desc}
                                    >{e.sku}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                    }
                </ScrollView>
            </>
        )

    }
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: primaryColor,
        width: '100%',
        height: 60,

    },
    hamicon: {
        color: 'white',
        fontSize: 35
    },
    textInput: {
        width: '70%',
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 4,
        borderRadius: 2
    },
    secContaienr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '94%',
        alignSelf: 'center',
        height: 40,
        alignItems: 'center',
        marginTop: 7
    },
    image: {
        width: 140,
        height: 160
    },
    cardContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: 'white',
        padding: 10,
    },
    productName: {
        fontSize: 16,
        flexWrap: 'wrap',
        width: '80%'
    },
    productNameAndPicContainer: {
        width: '50%'
    },
    priceAndDecContainer: {
        width: '50%',
        justifyContent: 'center'
    },
    price: {
        fontSize: 20,
        color: primaryColor
    },
    desc: {
        marginTop: 5
    },
    seachinForCoantiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    }
});

export default Search