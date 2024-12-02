import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants";
import AddWord from "../screens/Words/AddWord";
import AllWords from "../screens/Words/AllWords";
import EditWord from "../screens/Words/EditWord";

const Stack = createNativeStackNavigator();

export default function WordsNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: { fontWeight: "800" },
                headerTransparent: true,
                headerTintColor: COLORS.primary900,
                headerTitleAlign: "center",
                contentStyle: { backgroundColor: COLORS.appBackground },
            }}
        >
            <Stack.Screen
                name="AllWords"
                options={{
                    headerShown: false,
                }}
                component={AllWords}
            />
            <Stack.Screen
                name="AddWord"
                options={{
                    title: "Add Word",
                }}
                component={AddWord}
            />
            <Stack.Screen
                name="EditWord"
                options={({ route }) => {
                    const word = route.params.wordData.word;
                    return {
                        title: `Editing word "${word}"`,
                    };
                }}
                component={EditWord}
            />
        </Stack.Navigator>
    );
}
