import { StyleSheet, View } from "react-native";
import InfoCard from "./InfoCard";

export default function StatisticsInfo() {
    return (
        <View style={styles.container}>
            <InfoCard caption={"To learn"} number={10} color={"hotpink"}/>
            <InfoCard caption={"In process"} number={15} color={"lightgreen"}/>
            <InfoCard caption={"Learned"} number={20} color={"lightblue"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: "20%",
    },
});
