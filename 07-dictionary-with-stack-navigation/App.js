import "./gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import AddWord from "./screens/AddWord";
import AllWords from "./screens/AllWords";
import EditWord from "./screens/EditWord";

const Stack = createNativeStackNavigator();

export default function App() {
    const [words, setWords] = useState([]);

    // noinspection RequiredAttributes,JSValidateTypes
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="AllWords"
                screenOptions={{
                    headerTransparent: true,

                }}
            >
                <Stack.Screen
                    name="AllWords"
                    options={{
                        title: "All Words",
                    }}
                >
                    {(props) => <AllWords {...props} words={words} setWords={setWords}/>}
                </Stack.Screen>
                <Stack.Screen
                    name="AddWord"
                    options={{
                        title: "Adding word",
                    }}
                >
                    {(props) => <AddWord {...props} words={words} setWords={setWords}/>}
                </Stack.Screen>
                <Stack.Screen
                    name="EditWord"
                    options={({ route }) => ({
                        title: `Editing word "${route.params.wordData.word}"`,
                    })}
                >
                    {(props) => <EditWord {...props} setWords={setWords}/>}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
