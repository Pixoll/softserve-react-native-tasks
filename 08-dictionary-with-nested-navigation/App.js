import "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import LearningNavigation from "./components/LearningNavigation";
import WordsNavigation from "./components/WordsNavigation";
import { COLORS } from "./constants";
import Settings from "./screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
    return <>
        <StatusBar
            backgroundColor={COLORS.appBackground}
            barStyle="light-content"
        />
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                contentStyle: { backgroundColor: COLORS.appBackground },
                headerTitleAlign: "center",
                headerTintColor: COLORS.primary900,
                tabBarActiveBackgroundColor: COLORS.appBackground,
                tabBarActiveTintColor: COLORS.primary900,
                tabBarInactiveBackgroundColor: COLORS.appBackground,
                tabBarStyle: { borderTopColor: COLORS.primary200 },
                headerStyle: {
                    backgroundColor: COLORS.appBackground,
                    borderBottomColor: COLORS.primary200,
                },
            }}>
                <Tab.Screen
                    name="Words"
                    component={WordsNavigation}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="list-outline" color={color} size={size}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Learning"
                    component={LearningNavigation}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="book-outline" color={color} size={size}/>
                        )
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="settings-outline" color={color} size={size}/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    </>;
}
