import "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfoCard({ color, caption, number }) {
    return (
        <View style={[styles.card, { borderColor: color }]}>
            <Text style={[styles.number, { color }]}>{number}</Text>
            <Text style={[styles.caption, { color }]}>{caption}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 5,
    },
    number: {
        fontSize: 24,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 16,
    },
});
