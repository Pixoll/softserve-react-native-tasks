import { StyleSheet, View } from "react-native";
import ImagePile from "../../components/ImagePile";
import StatisticsInfo from "../../components/StatisticsInfo";
import { COLORS } from "../../constants";

export default function Statistics() {
    return (
        <View style={styles.container}>
            <StatisticsInfo/>
            <ImagePile/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.appBackground,
        // flexDirection: "row",
        // marginVertical: 6,
        // marginHorizontal: 5,
        // alignItems: "center",
        // paddingHorizontal: 5,
        // borderRadius: 8,
        // elevation: 4,
    },
    text: {
        color: COLORS.fontMain,
    },
});
