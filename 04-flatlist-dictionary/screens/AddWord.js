import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { playSound } from "../services/soundHandler";
import { getWordInfo } from "../services/wordsHandler";

export default function AddWord({ switchScreen, setWords }) {
    const [input, setInput] = useState("");
    const [wordInfo, setWordInfo] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        if (input) {
            if (timeoutId) clearTimeout(timeoutId);
            const id = setTimeout(async () => {
                const info = await getWordInfo(input);
                setWordInfo(info);
            }, 1000);
            setTimeoutId(id);
        }
    }, [input]);

    return (
        <View>
            <Pressable onPress={switchScreen}>
                <Ionicons name="arrow-back-outline" size={24}/>
            </Pressable>
            <TextInput
                placeholder="type here.."
                value={input}
                onChangeText={setInput}
            />
            {wordInfo && (
                <View>
                    <Text>{wordInfo.word}</Text>
                    {wordInfo.audio && (
                        <Pressable onPress={() => playSound(wordInfo.audio)}>
                            <Ionicons name="volume-medium-outline" size={24}/>
                        </Pressable>
                    )}
                    <Text>{wordInfo.phonetics}</Text>
                    <Text>{wordInfo.partOfSpeech}</Text>
                    <Text>{wordInfo.meaning}</Text>
                    <Pressable onPress={() => {
                        setWords(prevWords => [...prevWords, wordInfo]);
                        switchScreen();
                    }}>
                        <Text>Add</Text>
                    </Pressable>
                </View>
            )}
        </View>
    );
}
