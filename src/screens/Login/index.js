import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    Image
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { primaryColor } from '../../Config/Colors';
import Profile from './Profile'

const Login = (props) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = () => {
        setIsLogin(true)
    }

    if (isLogin) {
        return (
            <Profile logger={setIsLogin} nav={props}/>
        )
    } else {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor={"white"} />
                <View style={styles.container}>
                    <Image source={require('../../../assets/images/logo.png')} style={styles.image} />
                    <TextInput
                        style={styles.textIntputs}
                        placeholder={"Email"}
                    />
                    <TextInput
                        style={styles.textIntputs}
                        placeholder={"Password"}
                    />
                    <TouchableOpacity style={styles.loginBtnCont} onPress={handleLogin}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.orContainer}>
                        <Text >Dont have an account? </Text>
                        <Text style={styles.textSingup}>Sign up </Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
}


export default Login;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 100,
        resizeMode: 'stretch'
    },
    textIntputs: {
        borderBottomColor: 'rgba(236, 236, 236, 1)',
        borderBottomWidth: 2,
        width: '80%',
        paddingHorizontal: 3,
        color: 'grey',
        marginTop: 35
    },
    loginBtnCont: {
        marginTop: 70,
        backgroundColor: primaryColor,
        paddingVertical: 16,
        paddingHorizontal: 100,
        borderRadius: 120,
        elevation: 8
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    },
    orContainer: {
        marginTop: 50,
        flexDirection: 'row',
    },
    textSingup: {
        textDecorationLine: 'underline',
    }
})