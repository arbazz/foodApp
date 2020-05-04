import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { primaryColor } from '../../Config/Colors'
import Icon from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Profile = (props) => {
    console.log(props)
    const handleLogout = () => {
        props.logger(false)
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.colorContainer}>
                <Image
                    source={require('../../../assets/images/profile.jpg')}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>Name</Text>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.secondCardContainer}>
                    <Text style={styles.secText}>Orders</Text>
                    <SimpleLineIcons name="basket-loaded" style={styles.icon} 
                    onPress={()=>{props.nav.navigation.navigate("Orders")}}/>
                </View>
                <View style={styles.secondCardContainer}>
                    <Text style={styles.secText}>Setting</Text>
                    <Icon name="setting" style={styles.icon} />
                </View>
                <View style={styles.secondCardContainer}>
                    <Text style={styles.secText}>Wallet</Text>
                    <Icon name="wallet" style={styles.icon} />
                </View>
            </View>
            <View style={styles.thridContainer}>
                <Icon name="mail" style={styles.icon}/>
                <Text style={styles.thirdText} numberOfLines={1}>touseefarbaz@gmail.com</Text>
            </View>
            <View style={styles.thridContainer}>
                <Icon name="phone" style={styles.icon}/>
                <Text style={styles.thirdText} numberOfLines={1}>03051245319</Text>
            </View>
            <View style={styles.thridContainer}>
                <Icon name="profile" style={styles.icon}/>
                <Text style={styles.thirdText} numberOfLines={1}>arbaz</Text>
            </View>

            <TouchableOpacity style={styles.signOutContainer} onPress={handleLogout}>
                <Text style={styles.signOutText}>Signout</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white'
    },
    colorContainer: {
        backgroundColor: primaryColor,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: 101,
        height: 100,
        borderRadius: 180,
        marginTop: -20
    },
    name: {
        color: 'white',
        fontSize: 22,
        marginTop: 10,
        fontWeight: 'bold'
    },
    cardContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        zIndex: 100,
        marginTop: -20,
        elevation: 10,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10
        // position: 'absolute',
    },
    icon: {
        fontSize: 30,
        paddingTop: 5,
        color: primaryColor
    },
    secondCardContainer: {
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    secText: {
        fontSize: 20
    },
    thridContainer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: 'center',
        // backgroundColor: 'red',
        // flexWrap: 'wrap',
        // marginLeft: '20%',
        width: '95%',
        paddingLeft: '20%'
    },
    thirdText: {
        paddingLeft: 10,
        marginTop: 2,
        fontSize: 16
    },
    signOutContainer: {
        backgroundColor: primaryColor,
        width: '40%',
        alignSelf: 'center',
        marginTop: 30,
        alignItems: 'center',
        borderRadius: 25
    },
    signOutText: {
        color: 'white',
        paddingVertical: 10,
    }
})