import { View, Text, FlatList, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { playSound } from "../services/soundHandler";

export default function AllWords({ switchScreen, words, setWords }) {
    const renderItem = ({ item }) => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{item.word}</Text>
            <Text>{item.meaning}</Text>
            <Pressable onPress={() => item.audio && playSound(item.audio)}>
                <Ionicons name="play-outline" size={24}/>
            </Pressable>
            <Pressable
                onPress={() => setWords(words.filter(word => word.word !== item.word))}
                accessibilityLabel="trash-outline"
            >
                <Ionicons name="trash-outline" size={24}/>
            </Pressable>
        </View>
    );

    return (
        <View>
            <FlatList
                data={words}
                renderItem={renderItem}
                keyExtractor={item => item.word}
                ListEmptyComponent={
                    <View>
                        <Text>No words yet</Text>
                        <Pressable testID="trash-outline">
                            <Ionicons name="trash-outline" size={24}/>
                        </Pressable>
                    </View>
                }
            />
            <Pressable onPress={switchScreen}>
                <Ionicons name="add-outline" size={24}/>
            </Pressable>
        </View>
    );
}
