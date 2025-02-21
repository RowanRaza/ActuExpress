import { NavigationProp, RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
    Home: undefined,
    Overview: undefined
}

export type HomeNavigationProp = NavigationProp<RootStackParamList, "Home">
export type OverviewNavigationProp = NavigationProp<RootStackParamList, "Overview">
export type OverviewRouteProp = RouteProp<RootStackParamList, "Overview">