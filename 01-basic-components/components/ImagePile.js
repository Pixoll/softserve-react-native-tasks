import "react";
import { View, Image, StyleSheet } from "react-native";

export default function ImagePile() {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/elephant.png")} style={styles.image}/>
            <Image source={require("../assets/palmtree.png")} style={styles.image}/>
            <Image source={require("../assets/palmtree.png")} style={styles.image}/>
            <Image source={require("../assets/palmtree.png")} style={styles.image}/>
            <Image source={require("../assets/grass.png")} style={styles.image}/>
            <View style={styles.ground}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
        position: "absolute",
    },
    ground: {
        width: "100%",
        height: 20,
        backgroundColor: "brown",
        position: "absolute",
        bottom: 0,
    },
});
