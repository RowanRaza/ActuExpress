import { NavigationProp, RouteProp } from "@react-navigation/native"

export type RootStackParamList = {
    HomeStack: undefined,
    Setting: undefined,
    Saved: undefined
}

export type HomeStackParamList = {
    Home: undefined,
    Overview: undefined
}

type ReadOnlyFilter = {
    languages : string[],
    countries : string[]
}

export type SettingContextType = ReadOnlyFilter & {
    setLanguages : (languages : string[]) => void;
    setCountries : (countries : string[]) => void;
}

export type fetchProps = ReadOnlyFilter & {
    categories : []
}

export type countriesDataFromGit = [] & {
    name : string,
    'alpha-2' : string
}

export type HomeNavigationProp = NavigationProp<RootStackParamList, "HomeStack">
export type OverviewNavigationProp = NavigationProp<HomeStackParamList, "Overview">
export type OverviewRouteProp = RouteProp<HomeStackParamList, "Overview">