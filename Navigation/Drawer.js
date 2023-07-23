import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    Image
} from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerWrapper from '../Component/DrawerSceneWrapper'

import HomeWalt from '../Screeens/Wallet_Home'
import ProfileWalt from '../Screeens/Wallet_Profile'
import AccountWalt from '../Screeens/Wallet_Accounts'
import TransactionWalt from '../Screeens/Wallet_transaction'
import StatusWalt from '../Screeens/Wallet_Stauts'
import SettingWalt from '../Screeens/Wallet_Profile'
import HelperWalet from '../Screeens/Wallet_Help'
import Logoutwalt from '../Screeens/Logout'
import Entering from '../Screeens/Wallet_Entering'




const Stack = createStackNavigator();

const RootStack = ({ navigation }) => {
    return (
        <DrawerWrapper >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName='Entering'
            >
                <Stack.Screen name='Entering'>
                    {(props) => <Entering {...props} navigation={props.navigation} />}
                </Stack.Screen>
                <Stack.Screen name='Home'>
                    {(props) => <HomeWalt {...props} navigate={navigation} />}
                </Stack.Screen>
                <Stack.Screen name='Profile'>
                    {(props) => <ProfileWalt {...props} />}
                </Stack.Screen>
                <Stack.Screen name='Accounts'>
                    {(props) => <AccountWalt {...props} />}
                </Stack.Screen>
                <Stack.Screen name='Transaction'>
                    {(props) => <TransactionWalt {...props} />}
                </Stack.Screen>
                <Stack.Screen name='Status'>
                    {(props) => <StatusWalt {...props} />}
                </Stack.Screen>
                <Stack.Screen name='Setting'>
                    {(props) => <SettingWalt {...props} />}
                </Stack.Screen>
                <Stack.Screen name='Help'>
                    {(props) => <HelperWalet {...props} />}
                </Stack.Screen>
                <Stack.Screen name='Logout'>
                    {(props) => <Logoutwalt {...props} />}
                </Stack.Screen>

            </Stack.Navigator>
        </DrawerWrapper>

    )
}


const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={false}
            {...props}
            contentContainerStyle={{
                flex: 1,
                justifyContent: 'space-between',
                // paddingTop: 15,
            }}
        >
            {/* <DrawerItemList {...props} /> */}
            {/* profile Design*/}
            <View style={{
                flex: 0.15,
                backgroundColor: "#FFF",
                top: -15,
                borderBottomRightRadius: 53,
                flexDirection: "row",
                justifyContent: 'space-evenly',
                alignItems: "center",
                padding: 10

            }}>

                <Image
                    source={require('../img/Mask.png')}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,

                    }}
                />
                <View style={{
                    flexDirection: 'column',
                    width: 140,
                    height: 45,
                    paddingTop: 3

                }}>
                    <Text style={{
                        fontSize: 15,
                        color: "#000",
                        textAlign: "center",
                        fontWeight: "bold"
                    }}>Carlo Black</Text>
                    <Text style={{
                        fontSize: 12,
                        color: "#ccc",
                        textAlign: "center"
                    }}>Seattle,Washington</Text>
                </View>


            </View>
            {/* Screens Design */}
            <View style={{
                flex: 0.65,
                justifyContent: "center"
            }}>
                <DrawerItem
                    label="Home"
                    labelStyle={styles.labl_style}
                    onPress={() => { props.navigation.navigate('Home') }}
                    icon={() => <MaterialCommunityIcons name="home" style={[styles.show_icon, { marginLeft: 5 }]} />}

                />
                <DrawerItem
                    label="Profile"
                    labelStyle={styles.labl_style}
                    onPress={() => { props.navigation.navigate('Profile') }}
                    icon={() => <MaterialCommunityIcons name="account" style={[styles.show_icon, { marginLeft: 5 }]} />}

                />
                <DrawerItem
                    label="Accounts"
                    labelStyle={styles.labl_style}
                    onPress={() => { props.navigation.navigate('Accounts') }}
                    icon={() => <MaterialCommunityIcons name="wallet" style={[styles.show_icon, { marginLeft: 5 }]} />}

                />
                <DrawerItem
                    label="Transacts"
                    labelStyle={styles.labl_style}
                    onPress={() => { props.navigation.navigate('Transaction') }}
                    icon={() => <MaterialCommunityIcons name="swap-horizontal" style={[styles.show_icon, { marginLeft: 5 }]} />}

                />
                <DrawerItem
                    label="Status"
                    labelStyle={styles.labl_style}
                    onPress={() => { props.navigation.navigate('Status') }}
                    icon={() => <MaterialCommunityIcons name="chart-line-variant" style={[styles.show_icon, { marginLeft: 5 }]} />}

                />
                <DrawerItem
                    label="Setting"
                    labelStyle={styles.labl_style}
                    onPress={() => { props.navigation.navigate('Setting') }}
                    icon={() => <MaterialCommunityIcons name="cog" style={[styles.show_icon, { marginLeft: 5 }]} />}

                />
                <DrawerItem
                    label="Help"
                    labelStyle={styles.labl_style}
                    onPress={() => { props.navigation.navigate('Help') }}
                    icon={() => <MaterialCommunityIcons name="chat-question" style={[styles.show_icon, { marginLeft: 5 }]} />}

                />
            </View>

            <View style={{
                flex: 0.20,
                justifyContent: "flex-end",
                paddingBottom: 20,


            }}>
                <DrawerItem
                    label="Logout"
                    labelStyle={styles.labl_style}
                    onPress={() => { props.navigation.navigate('Logout') }}
                    icon={() => <MaterialCommunityIcons name="power" style={[styles.show_icon, { marginLeft: 5 }]} />}

                />
            </View>


        </DrawerContentScrollView>
    )
}


const Drawer = createDrawerNavigator();

const CoustomDrawer = () => {


    return (

        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: 'slide',
                drawerStyle: [styles.Drawer_Style],
                overlayColor: Colors.transparent,
                sceneContainerStyle: {
                    backgroundColor: Colors.transparent
                },


                drawerActiveBackgroundColor: Colors.transparent,
                drawerInactiveBackgroundColor: Colors.transparent

            }}

            drawerContent={(props) => {
                return <DrawerContent {...props} />
            }}
        >
            <Drawer.Screen name='DrawerItems'>
                {(props) => <RootStack {...props} />}
            </Drawer.Screen>
        </Drawer.Navigator>

    )

};

const styles = StyleSheet.create({
    Drawer_Style: {
        flex: 1,
        backgroundColor: 'transparent',
        width: "56%",
    },
    labl_style: {
        fontWeight: "bold",
        color: "#000",
        // marginLeft: -18
    },
    show_icon: {
        fontSize: 25,
        color: "#FFFFFF"
    },

});

export default CoustomDrawer;

const Colors = {
    bg: "#28BC63",
    active: '#000',
    inactive: '#eee',
    transparent: 'transparent',
};


{
    /*
        const DrawerIcon = ({ focused, size }, name) => {
        <MaterialCommunityIcons
            name={name}
            size={size}
            color={focused ? Colors.active : Colors.inactive}
        />
    }
    */
}


/*{

    <Drawer.Screen
                name='Home'
                component={HomeWalt}
                options={{
                    drawerIcon: option => DrawerIcon(option, 'home')
                }}

            />

            <Drawer.Screen
                name='Profile'
                component={ProfileWalt}
                options={{
                    drawerIcon: option => DrawerIcon(option, 'account')
                }}
            />
            <Drawer.Screen
                name='Accounts'
                component={AccountWalt}
                options={{
                    drawerIcon: option => DrawerIcon(option, 'wallet')
                }}
            />
            <Drawer.Screen
                name='Transaction'
                component={TransactionWalt}
                options={{
                    drawerIcon: option => DrawerIcon(option, 'swap-horizontal')
                }}
            />
            <Drawer.Screen
                name='Status'
                component={StatusWalt}
                options={{
                    drawerIcon: option => DrawerIcon(option, 'chart-line-variant')
                }}
            />
            <Drawer.Screen
                name='Setting'
                component={SettingWalt}
                options={{
                    drawerIcon: option => DrawerIcon(option, 'cog')
                }}
            />
            <Drawer.Screen
                name='Help'
                component={HelperWalet}
                options={{
                    drawerIcon: option => DrawerIcon(option, 'chat-question')
                }}
            />
            <Drawer.Screen
                name='Logout'
                component={Logoutwalt}
                options={{
                    drawerIcon: option => DrawerIcon(option, 'power')
                }}
            />

}*/