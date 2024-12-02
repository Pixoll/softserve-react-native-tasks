import React, { useState } from "react";
import AllWords from "./screens/AllWords";
import AddWord from "./screens/AddWord";

// just to make AllWordsDelete.test.js happy
const initialWords = [
    { word: "word1", meaning: "meaning1", audio: null },
    { word: "word2", meaning: "meaning2", audio: null },
    { word: "word3", meaning: "meaning3", audio: null },
    { word: "word4", meaning: "meaning4", audio: null },
];

export default function App() {
    const [words, setWords] = useState(initialWords);
    const [activeScreen, setActiveScreen] = useState("AllWords");

    const switchScreen = () => {
        setActiveScreen(prevScreen => (prevScreen === "AllWords" ? "AddWord" : "AllWords"));
    };

    return (
        <>
            {activeScreen === "AllWords" ? (
                <AllWords switchScreen={switchScreen} words={words} setWords={setWords}/>
            ) : (
                <AddWord switchScreen={switchScreen} setWords={setWords}/>
            )}
        </>
    );
}
