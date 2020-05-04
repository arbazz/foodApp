
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { primaryColor } from './src/Config/Colors'
import { GloabalProvider } from './src/Context/index'
import Home from './src/screens/Home/index'
import Login from './src/screens/Login/index'
import Header from './src/Components/Header/Header'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Product from './src/screens/ProductIdividual/index'
import Discover from './src/screens/Discover/index';
import Icon from 'react-native-vector-icons/AntDesign'
import Cart from './src/screens/Cart/index'
import Search from './src/screens/Search/index'
import Orders from './src/screens/Order/index'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name == "Home") {
            iconName = "home";
          } else if (route.name == "Discover") {
            iconName = "appstore-o";
          } else if (route.name == "Account") {
            iconName = "user";
          }
          return <Icon name={iconName} size={size} color={primaryColor} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Account" component={Login} />
    </Tab.Navigator>
  );
}


const App: () => React$Node = () => {
  return (
    <>
      <GloabalProvider>
        <StatusBar barStyle="dark-content" backgroundColor={primaryColor} />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={(route) => ({
              headerTitle: props => <Header route={route} />,
              headerStyle: {
                backgroundColor: primaryColor,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
            initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={MyTabs} />
            <Stack.Screen name="Product" component={Product} options={{
              headerTitle: 'Product',
              headerStyle: {
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
                backgroundColor: primaryColor
              },

            }} />
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="Orders" component={Orders} options={{ headerTitle: 'My Orders' }} />
            <Stack.Screen name="Cart" component={Cart} options={{
              headerTitle: '',
              headerStyle: {
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
                backgroundColor: primaryColor
              },
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </GloabalProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
