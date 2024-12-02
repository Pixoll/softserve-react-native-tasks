import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";
import { playSound } from "../../services/soundHandler";
import MyWords from "../../tests/testData";

function Congrats() {
    return (
        <View style={styles.background}>
            <Text style={[styles.congratsText, { marginVertical: 60 }]}>Congrats!</Text>
            <Text style={styles.congratsText}>For now you have learned all the words</Text>
        </View>
    );
}

export default function Play({ words }) {
    words ??= MyWords;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const filteredWords = words.filter(word => word.status < 2);

    if (filteredWords.length === 0) {
        return <Congrats/>;
    }

    const currentWord = filteredWords[currentIndex];

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleNextWord = () => {
        setShowDetails(false);
        setCurrentIndex((currentIndex + 1) % filteredWords.length);
    };

    const handleKnewIt = () => {
        currentWord.status += 1;
        handleNextWord();
    };

    return (
        <View style={styles.background}>
            {currentWord
                ? <>
                    <Pressable onPress={handleShowDetails} style={styles.card}>
                        <Text style={[styles.word, styles.spacing]}>{currentWord.word}</Text>
                        {showDetails && <>
                            <Text style={[styles.details, styles.spacing]}>{currentWord.phonetics}</Text>
                            {currentWord.audio && (
                                <View style={styles.audioButtonContainer}>
                                    <Pressable onPress={() => playSound(currentWord.audio)}>
                                        <Ionicons
                                            name="volume-medium-outline"
                                            size={28}
                                            color={COLORS.primary900}
                                        />
                                    </Pressable>
                                </View>
                            )}
                            <Text style={styles.details}>{currentWord.meaning}</Text>
                        </>}
                    </Pressable>
                    {currentWord && showDetails && (
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonWrapper}>
                                <Button
                                    title="Didn't know it"
                                    onPress={handleNextWord}
                                    color={COLORS.secondary800}
                                />
                            </View>
                            <View style={styles.buttonWrapper}>
                                <Button
                                    title="Knew it"
                                    onPress={handleKnewIt}
                                    color={COLORS.primary900}
                                />
                            </View>
                        </View>
                    )}
                </>
                : <Congrats/>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.appBackground,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.appBackground,
        margin: 4,
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: COLORS.primary200,
    },
    card: {
        flex: 1,
        backgroundColor: COLORS.appBackground,
        margin: 4,
        borderWidth: 0.3,
        borderRadius: 3,
        borderColor: COLORS.primary200,
        height: "100%",
        justifyContent: "center",
    },
    word: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: COLORS.fontMain,
    },
    details: {
        fontSize: 16,
        textAlign: "center",
        color: COLORS.fontMain,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 15,
    },
    buttonWrapper: {
        flex: 1,
        marginHorizontal: 5,
    },
    congratsText: {
        fontSize: 22,
        textAlign: "center",
        color: COLORS.fontMain,
    },
    spacing: {
        marginVertical: 15,
    },
    audioButtonContainer: {
        alignItems: "center",
        marginBottom: 30,
    },
});
