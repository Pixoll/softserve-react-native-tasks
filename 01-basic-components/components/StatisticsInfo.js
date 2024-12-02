import "react";
import { View, StyleSheet } from "react-native";
import InfoCard from "./InfoCard";
import words from "../data/words";

export default function StatisticsInfo() {
    const counts = words.reduce((acc, word) => {
        if (word.status === "to learn") acc.toLearn += 1;
        if (word.status === "in process") acc.inProcess += 1;
        if (word.status === "learned") acc.learned += 1;
        return acc;
    }, { toLearn: 0, inProcess: 0, learned: 0 });

    return (
        <View style={styles.container}>
            <InfoCard color="hotpink" caption="To learn" number={counts.toLearn}/>
            <InfoCard color="lightgreen" caption="In process" number={counts.inProcess}/>
            <InfoCard color="lightblue" caption="Learned" number={counts.learned}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
});
