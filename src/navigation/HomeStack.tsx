import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeNavigationProp, HomeStackParamList } from "../types/types";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
import { SettingContext, SettingProvider } from "../utils/SettingContext";
const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack () : React.JSX.Element {
    return(
        <SettingProvider>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
        </SettingProvider>
    )
}


function HomeScreen () : React.JSX.Element {
    const navigation = useNavigation<HomeNavigationProp>();
    const categories : string[] = ["Business", "Education", "Environnment", "Food", "Politics", "Science", "Sports", "Technology", "Top", "Tourism"]
    const [selectedCategories, setselectedCategories] = useState<string[]>(['Top', 'Environnment']);
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

    const {languages, setLanguages, countries} = useContext(SettingContext);

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
                    <Text style={styles.refresh}>↻</Text>
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