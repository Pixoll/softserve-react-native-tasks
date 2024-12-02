import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants";
import { playSound } from "../services/soundHandler";

export default function EditWord({ navigation, route, setWords }) {
    const { wordData } = route.params;
    const [phonetics, setPhonetics] = useState(wordData.phonetics);
    const [partOfSpeech, setPartOfSpeech] = useState(wordData.partOfSpeech);
    const [meaning, setMeaning] = useState(wordData.meaning);

    const onSave = () => {
        setWords((prevWords) =>
            prevWords.map((word) =>
                word.word === wordData.word
                    ? { ...word, phonetics, partOfSpeech, meaning }
                    : word
            )
        );
        navigation.goBack();
    };

    return <>
        <Image
            style={{
                marginTop: 100,
                marginBottom: 30,
                width: "20%",
                height: undefined,
                aspectRatio: 1,
                alignSelf: "center",
                resizeMode: "contain",
            }}
            source={require("../assets/edit.png")}
        />
        <View style={styles.infoContainer}>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text style={styles.word}>{wordData.word}</Text>
                {wordData.audio && (
                    <Pressable
                        style={styles.playPressable}
                        onPress={() => playSound(wordData.audio)}
                    >
                        <Ionicons
                            name="volume-medium-outline"
                            size={28}
                            color={COLORS.primary900}
                        />
                    </Pressable>
                )}
            </View>
            <View style={styles.row}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>phonetics:</Text>
                    <TextInput
                        style={styles.input}
                        value={phonetics}
                        onChangeText={setPhonetics}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>part of speech:</Text>
                    <TextInput
                        style={styles.input}
                        value={partOfSpeech}
                        onChangeText={setPartOfSpeech}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>meaning:</Text>
                <TextInput
                    style={[styles.input, styles.meaningInput]}
                    value={meaning}
                    onChangeText={setMeaning}
                    multiline
                />
            </View>
            <Pressable style={styles.buttonContainer} onPress={onSave}>
                <Text style={{ fontSize: 24, color: COLORS.white }}>Save</Text>
            </Pressable>
        </View>
    </>;
}

const styles = StyleSheet.create({
    infoContainer: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        fontSize: 32,
    },
    playPressable: {
        marginHorizontal: 20,
    },
    word: {
        fontSize: 32,
        paddingHorizontal: 10,
        color: COLORS.black,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    label: {
        fontSize: 12,
        color: COLORS.grey600,
        marginBottom: 4,
    },
    input: {
        height: 40,
        fontSize: 18,
        borderColor: COLORS.primary200,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: COLORS.black,
    },
    meaningInput: {
        height: 100,
    },
    buttonContainer: {
        borderRadius: 5,
        backgroundColor: COLORS.primary900,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
});
