import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    useWindowDimensions,
    Dimensions
} from 'react-native';

import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';

const { Width, Height } = Dimensions.get('screen')

const DrawerWrapper = ({ children }) => {
    const progress = useDrawerProgress();
    // const { width } = useWindowDimensions();
    console.log(Width);
    console.log(progress.value);
    const animatedstyle = useAnimatedStyle(() => ({
        transform: [
            { perspective: 500 },
            {
                scale: interpolate(progress.value, [0, 1], [1, 0.65])
            },
            // {
            //     rotate:
            //         `${interpolate(
            //             progress.value,
            //             [0, 1],
            //             [0, -15],
            //             'clamp',
            //         )}deg`,
            // },
        ],
        borderRadius: interpolate(progress.value, [0, 1], [0, 20]),
        overflow: 'hidden',
        right: interpolate(progress.value, [0, 1], [0, 50])
    }))
    return (
        <Animated.View style={[styles.Parent, animatedstyle]}>
            {children}
        </Animated.View>
    )

};

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        // justifyContent: "center",

    },
    childtxt: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center"
    }
});

export default DrawerWrapper;
