import { View, ImageBackground, StyleSheet } from "react-native";
import StatisticsInfo from "./components/StatisticsInfo";
import ImagePile from "./components/ImagePile";

export default function App() {
    return (
        <ImageBackground source={{ uri: `${process.env.PUBLIC}/assets/ocean.png` }} style={styles.background}>
            <View style={styles.container}>
                <StatisticsInfo/>
                <ImagePile/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
