import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { HomeNavigationProp, RootStackParamList } from "../types/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Overview from "../screen/Overview";
import { Chip } from "react-native-paper";

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function RootStack () : React.JSX.Element {
    return(
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} backgroundColor={"#ddd"}/>
            <Stack.Navigator 
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#ddd",
                    },
                    headerTitleStyle : {
                        color: '#000',
                        fontWeight: 'bold'
                    },
                }}
                >
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'ActuExpress'}} />
                <Stack.Screen name="Overview" component={Overview}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function HomeScreen () : React.JSX.Element {
    const navigation = useNavigation<HomeNavigationProp>();
    const categories : string[] = ["Business", "Education", "Environnment", "Food", "Politics", "Science", "Sports", "Technology", "Top", "Tourism"]
    const [selectedCategories, setselectedCategories] = useState<string[]>([]);
    const handleChipPress = (category: string) => {
        setselectedCategories((prev) => 
            prev.find((c) => c === category) ? 
            prev.filter((c) => c !== category) : 
            [...prev, category]
        )
    }
    const isSelected = (category : string) => {
        return selectedCategories.find((c) => category === c) ? true : false
    }
    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                {categories.map((category, index) => (
                <Chip 
                    key={index}
                    style={ isSelected(category) ? [styles.chipStyle, styles.selected] :styles.chipStyle }
                    selected = {isSelected(category)}
                    onPress={() => handleChipPress(category)}
                    showSelectedOverlay
                    mode="outlined"
                    showSelectedCheck = {false}
                    textStyle={styles.fontStyle}
                    >{category}
                </Chip>
                ))}
                <TouchableOpacity>
                    <Text style={styles.refresh}>✓</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: '5%',
        paddingTop: '2.4%'
    },
    chipStyle: {
        marginHorizontal: '1.2%',
        marginVertical: 5,
    },
    fontStyle: {
        fontSize: 16
    },
    selected: {
        backgroundColor: "rgb(210, 240, 255)"
    },
    refresh: {
        fontSize: 30, 
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'green'
    }
})