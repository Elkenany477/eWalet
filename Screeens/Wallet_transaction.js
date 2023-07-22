import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const TransactionWalt = () => {
    return (
        <View style={styles.Parent}>
            <Text style={styles.childtxt
            }> TransactionWalt</Text>
        </View>
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

export default TransactionWalt;
