import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

const Entering = ({ navigation }) => {
    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'#FFF'}
                translucent={true}
            />
            <View style={styles.Parent}>
                <View style={styles.inner}>
                    <Image
                        source={require('../img/Entering.png')}
                        style={styles.img}
                        resizeMode='contain'
                    />
                    <View style={styles.Items}>
                        <View style={styles.Date}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{
                                    fontSize: 24,
                                    color: "#1B1D28",
                                }}>06:20 PM</Text>
                                <Image
                                    source={require('../img/Sun.png')}
                                    style={{
                                        width: 18,
                                        height: 13,
                                        marginTop: 12,
                                        marginLeft: 10
                                    }}
                                />
                                <Text style={{
                                    fontSize: 12,
                                    color: "#1B1D28",
                                    marginTop: 12,
                                    marginLeft: 10,
                                    fontWeight: "bold"
                                }}>43° C</Text>
                            </View>

                            <Text style={{
                                fontSize: 13,
                                color: "#7B7F9E",
                                marginTop: 10

                            }}>July. 7.2023 | Sunday</Text>
                        </View>
                        <View style={styles.information}>
                            <Image
                                source={require('../img/Logo.png')}
                                style={{ width: 70, height: 40, marginBottom: 10 }}
                                resizeMode='contain'
                            />
                            <Text style={{
                                fontSize: 28,
                                color: "#1B1D28"
                            }}>eWalle</Text>
                            <Text style={{
                                fontSize: 14,
                                color: "#7B7F9E",
                                width: 260,
                                lineHeight: 25,
                                marginTop: 5
                            }}>Open An Account For Digital E-Wallet Solutions.instants Payouts.</Text>
                            <Text style={{
                                fontSize: 14,
                                color: "#7B7F9E",
                                marginTop: 20
                            }}>Join For Free</Text>
                        </View>
                        <View style={styles.EnterBtn}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => {
                                    navigation.navigate('Home');
                                }}
                                style={styles.Btn}>
                                <Text style={{
                                    fontSize: 16,
                                    color: "#212330"
                                }}>Sign in</Text>
                                <Image
                                    source={require('../img/Arrow.png')}
                                    style={{
                                        width: 19,
                                        marginTop: 4,
                                        marginLeft: 8
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}
                            >
                                <Text style={{
                                    fontSize: 16,
                                    color: "#1B1D28",
                                    left: 30,
                                    top: 20
                                }}>Create Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>




                </View>
            </View>
        </>
    )

};

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        backgroundColor: "#FDFDFD",
        marginTop: 20
    },
    inner: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    img: {
        width: 267,
        height: "100%",

    },
    Items: {
        flexDirection: "column",
        marginTop: 25
    },
    Date: {
        flex: 0.30,
        // backgroundColor: "#ff0",
        right: 20,
        marginBottom: 15

    },
    information: {
        flexDirection: "column",
        flex: 0.35,
        // backgroundColor: "#f0f",
        right: 25,
        marginBottom: 10
    },
    EnterBtn: {
        flexDirection: "column",
        flex: 0.35,
        // backgroundColor: "#f0f",
        right: 25,
        marginBottom: 10,
        justifyContent: "center"
    },
    Btn: {
        width: 190,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFAC30",
        borderRadius: 15
    }
});

export default Entering;
