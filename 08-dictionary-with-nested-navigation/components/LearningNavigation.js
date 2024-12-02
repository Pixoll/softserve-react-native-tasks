import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS } from "../constants";
import Play from "../screens/Learning/Play";
import Statistics from "../screens/Learning/Statistics";

const Drawer = createDrawerNavigator();

export default function LearningNavigation() {
    return (
        <Drawer.Navigator screenOptions={{
            contentStyle: { backgroundColor: COLORS.primary200 },
            drawerActiveBackgroundColor: COLORS.appBackground,
            drawerActiveTintColor: COLORS.primary900,
            drawerInactiveBackgroundColor: COLORS.appBackground,
            drawerInactiveTintColor: COLORS.primary900,
            drawerStyle: { backgroundColor: COLORS.primary200 },
            headerStyle: {
                backgroundColor: COLORS.appBackground,
                borderBottomColor: COLORS.primary200,
            },
            headerTintColor: COLORS.primary900,
            headerTitleAlign: "center",
        }}>
            <Drawer.Screen name="Statistics" component={Statistics}/>
            <Drawer.Screen name="Play" component={Play}/>
        </Drawer.Navigator>
    );
}
