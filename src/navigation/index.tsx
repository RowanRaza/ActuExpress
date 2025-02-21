import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeNavigationProp, RootStackParamList } from "../types/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Overview from "../screen/Overview";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStack () : React.JSX.Element {
    return(
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} backgroundColor={"#fff"}/>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Overview" component={Overview}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function HomeScreen () : React.JSX.Element {
    const navigation = useNavigation<HomeNavigationProp>();
    return(
        <SafeAreaView>
        </SafeAreaView>
    )
}