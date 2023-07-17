import React from "react";
import { StyleSheet, Image, SafeAreaView } from "react-native";

const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../../../assets/Logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#dcdcdc"
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default Header;