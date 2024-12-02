import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Pressable, Alert,
} from "react-native";

const BACKGROUND_COLOR = "#ffffff";
const PRESSED_BACKGROUND_COLOR = "#ffcccc";
const NOTE_COLOR = "#ffffff";
const PRESSED_NOTE_COLOR = "#ffff00";

export default function App() {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    const addNoteHandler = () => {
        if (note.trim().length === 0) {
            return;
        }
        setNotes((currentNotes) => [...currentNotes, note]);
        setNote("");
    };

    const longPressHandler = () => {
        Alert.alert("The note is pressed with a delay of 1 sec!");
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your note"
                    value={note}
                    onChangeText={setNote}
                />
                <Button title="Add note" onPress={addNoteHandler}/>
            </View>
            <View>
                {notes.map((noteText, index) => (
                    <Pressable
                        key={index}
                        testID="pressableElem"
                        onLongPress={longPressHandler}
                        delayLongPress={1000}
                        style={({ pressed }) => [
                            styles.noteElem,
                            {
                                backgroundColor: pressed
                                    ? PRESSED_BACKGROUND_COLOR
                                    : BACKGROUND_COLOR,
                            },
                        ]}
                    >
                        {({ pressed }) => (
                            <Text
                                testID="noteElem"
                                style={{
                                    color: pressed ? PRESSED_NOTE_COLOR : NOTE_COLOR,
                                }}
                            >
                                {noteText}
                            </Text>
                        )}
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 80,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 28,
        marginBottom: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
    noteElem: {
        margin: 8,
        padding: 8,
        borderRadius: 12,
        backgroundColor: "#008000",
        fontSize: 16,
        textAlign: "center",
    },
});
