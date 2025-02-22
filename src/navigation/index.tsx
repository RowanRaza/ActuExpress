import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "../types/types";
import { StatusBar } from "react-native";
import Overview from "../screen/Overview";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import News from "../assets/news.svg"
import NewsOutline from "../assets/news-outline.svg"
import Save from "../assets/save.svg"
import SaveOutline from "../assets/save-outline.svg"
import Setting from "../assets/setting.svg"
import SettingOutline from "../assets/setting-outline.svg"

const Tab = createBottomTabNavigator<RootStackParamList>();
export default function RootStack () : React.JSX.Element {
    return(
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} backgroundColor={"#ddd"}/>
            <Tab.Navigator 
                initialRouteName="HomeStack"
                screenOptions={ {
                    headerStyle: {
                        backgroundColor: "#ddd",
                    },
                    headerTitleStyle : {
                        color: '#000',
                        fontWeight: 'bold'
                    },
                    animation: 'shift'
                }}
                >
                <Tab.Screen 
                    name="HomeStack" 
                    component={HomeStack} 
                    options={{
                        title: 'ActuExpress',
                        tabBarIcon: ({focused}) => (
                            focused ? <News width={30} height={30}/> : <NewsOutline width={30} height={30}/>
                        )
                        }
                    } />
                <Tab.Screen 
                    name="Saved" 
                    component={Overview}
                    options={{
                        tabBarIcon: ({focused}) => (
                            focused ? <Save width={30} height={30}/> : <SaveOutline width={30} height={30}/>
                        )
                    }}/>
                <Tab.Screen 
                    name="Setting" 
                    component={Overview}
                    options={{
                        tabBarIcon: ({focused}) => (
                            focused ? <Setting width={30} height={30}/> : <SettingOutline width={30} height={30}/>
                        )
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
