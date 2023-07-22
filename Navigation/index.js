import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import CoustomDrawer from '../Navigation/Drawer'

const RNavigation = () => {
    return (
        <NavigationContainer>
            <CoustomDrawer />
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FDFDFD",
    },
    childtxt: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center"
    }
});

export default RNavigation;
