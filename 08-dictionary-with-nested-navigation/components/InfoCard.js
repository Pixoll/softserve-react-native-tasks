import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

export default function InfoCard({ color, caption, number }) {
    return (
        <View style={[styles.container, { borderColor: color }]}>
            <Text style={[styles.number, { color: color }]}>{number}</Text>
            <Text style={[styles.caption, { color: color }]}>{caption}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.appBackground,
        margin: 4,
        borderWidth: 0.3,
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    caption: {
        opacity: 1,
        fontSize: 18,
        fontWeight: "300",
    },
    number: {
        fontSize: 22,
        fontWeight: "800",
    },
});