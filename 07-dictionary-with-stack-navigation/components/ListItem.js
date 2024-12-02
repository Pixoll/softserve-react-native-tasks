import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { playSound } from "../services/soundHandler";
import { COLORS } from "../constants";

export default function Item({ item, onDelete }) {
    const navigation = useNavigation();

    const onPressEdit = () => {
        navigation.navigate("EditWord", { wordData: item });
    };

    return (
        <View style={styles.item}>
            <Pressable disabled={!item.audio} onPress={() => playSound(item.audio)}>
                <View style={styles.iconContainer}>
                    <Ionicons
                        name="play-outline"
                        size={28}
                        style={{
                            color: item.audio ? COLORS.primary900 : COLORS.grey300,
                        }}
                    />
                </View>
            </Pressable>
            <Pressable style={styles.textContainer} onPress={() => onPressEdit(item)}>
                <Text style={styles.title}>{item.word}</Text>
                <Text style={styles.definition}>{item.meaning}</Text>
            </Pressable>
            <Pressable
                style={styles.iconContainer}
                onPress={() => onDelete(item.word)}
            >
                <Ionicons name="trash-outline" size={22} color={COLORS.secondary800}/>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        zIndex: -10,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        marginVertical: 6,
        marginHorizontal: 5,
        alignItems: "center",
        paddingHorizontal: 5,
        borderRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: "800",
        color: COLORS.black,
    },
    definition: {
        fontSize: 16,
        color: COLORS.black,
    },
    iconContainer: {
        padding: 3,
        borderRadius: 20,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingBottom: 5,
    },
});
