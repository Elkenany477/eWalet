import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const HomeWalt = ({ navigate }) => {

    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#FFF'}
                translucent={true}
            />
            <View style={Styles.container}>
                {/* Header Design */}
                <View style={Styles.Header}>
                    <View style={Styles.LeftHeader}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Image
                                source={require('../img/Logo.png')}
                                style={Styles.Logo}
                                resizeMode='contain'
                            />

                        </TouchableOpacity>
                        <Text style={Styles.text}>eWallet</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                    >
                        <Image
                            source={require('../img/Union.png')}
                            style={Styles.Option}
                            resizeMode='contain'
                        />

                    </TouchableOpacity>
                </View>
                {/* Design Accout Overview */}
                <Text style={{
                    fontSize: 16,
                    color: "#3A4276",
                    marginLeft: 25,
                    fontWeight: "bold",
                    marginBottom: 25
                }}>Account Overview</Text>
                <View style={Styles.CurrentBalance}>
                    <View style={Styles.Balance}>
                        <Text style={{
                            fontSize: 24,
                            color: "#000"
                        }}>20,600</Text>
                        <Text style={{
                            fontSize: 12,
                            color: "#3A4276",
                            marginTop: 5

                        }}>Current balance</Text>
                    </View>
                    <View style={Styles.plus}>
                        <Image
                            source={require('../img/plus.png')}
                            style={Styles.plusIcon}
                            resizeMode='contain'
                        />
                    </View>
                </View>
                {/* Design Sending Money */}
                <View style={Styles.SendMoney}>
                    <Text style={{
                        fontSize: 16,
                        color: "#3A4276",
                    }}>Send Money</Text>
                    <Image
                        source={require('../img/Scan.png')}
                        style={Styles.Scan}
                        resizeMode='contain'
                    />
                </View>
            </View>
        </>
    )
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    text: {
        fontSize: 28,
        color: "#1B1D28",
        marginLeft: 10
    },
    Header: {
        height: "15%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 20,
    },
    LeftHeader: {
        flexDirection: 'row',
        alignItems: "center",

    },
    Logo: {
        width: 50,
        height: 40,

    },
    Option: {
        width: 19,
        height: 19,
    },
    CurrentBalance: {
        width: 325,
        height: 130,
        backgroundColor: "#E5E5E5",
        alignSelf: "center",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 25
    },
    Balance: {
        flexDirection: "column",
    },
    plus: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#FFAC30",
        justifyContent: "center",
        alignItems: "center"
    },
    plusIcon: {
        width: 12,
        height: 12,
    },
    SendMoney: {
        flexDirection: "row",
        width: 325,
        height: 25,
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "space-between",
        // backgroundColor: "#00f",
        alignSelf: "center",
        marginVertical: 25
    },
    Scan: {
        width: 20,
        height: 20
    }


})

export default HomeWalt;



{
    /*
    <View style={[Styles.container]}>
            <View style={Styles.Header}>

                <TouchableOpacity
                    activeOpacity={.8}
                    style={Styles.btn}
                    onPress={() => {
                        navigate.openDrawer();
                    }}
                >
                    <MaterialCommunityIcons
                        name='segment'
                        style={[{ transform: [{ rotateY: '180deg' }] }, Styles.icon]}
                    />
                </TouchableOpacity>

                <View
                    style={Styles.outerLocation}
                >
                    <Text
                        style={Styles.text}
                    >Location</Text>
                    <View style={Styles.innerlocation}>
                        <Ionicons
                            name='location-sharp'
                            style={{
                                fontSize: 20,
                                color: "#000",
                                marginLeft: 12
                            }}
                        />
                        <Text
                            style={{
                                fontSize: 13,
                                fontWeight: "bold",
                                marginHorizontal: 3,
                                color: "#000"
                            }}
                        >New York,USA</Text>
                        <MaterialIcons
                            name='keyboard-arrow-down'
                            style={{
                                fontSize: 25,
                                color: "#000",
                            }}
                        />
                    </View>

                </View>

                <View style={Styles.notification}>
                    <Ionicons
                        name='notifications-sharp'
                        style={{
                            fontSize: 25,
                            color: "#000",

                        }}
                    />

                </View>
            </View>

        </View>
    */
}


{
    /*
    icon: {
        fontSize: 40,
        color: '#000000',

    },
    btn: {
        width: "15%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    outerLocation: {
        width: "65%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    innerlocation: {
        flexDirection: "row",
        alignItems: "center",

    },
    notification: {
        width: "15%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    */
}
