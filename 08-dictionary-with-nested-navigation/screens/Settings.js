import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { COLORS, COLORS_LIGHT } from "../constants";

export default function Settings() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const currentColors = isDarkTheme ? COLORS : COLORS_LIGHT;

    return (
        <View style={[styles.container, { backgroundColor: currentColors.appBackground }]}>
            <Text style={[styles.text, { color: currentColors.fontMain }]}>Choose color theme:</Text>
            <View style={styles.switchContainer}>
                <Text style={[styles.switchText, { color: currentColors.fontMain }]}>Light</Text>
                <Switch value={isDarkTheme} onValueChange={setIsDarkTheme}/>
                <Text style={[styles.switchText, { color: currentColors.fontMain }]}>Dark</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    switchText: {
        fontSize: 16,
        marginHorizontal: 10,
    },
});
