import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { SettingContextType } from "../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SettingContext = createContext<SettingContextType>({
    languages: [],
    setLanguages() {},
    countries: [],
    setCountries() {},
})

export const SettingProvider = ({children} : PropsWithChildren) => {
    const [languages, setLanguages] = useState<string[]>(['English']);
    const [countries, setCountries] = useState<string[]>(['United Kingdom', 'China', 'France', 'Madagascar']);

    useEffect(() => {
        const loadLanguages = async () => {
            const savedLanguages = await AsyncStorage.getItem('@languages');
            if (savedLanguages?.length) 
                setLanguages(JSON.parse(savedLanguages))
            console.log('hello' , languages)
            
        };
        loadLanguages()
    }, [])

    useEffect(() => {
        const saveLanguages = async () => {
            await AsyncStorage.setItem('@languages', JSON.stringify(languages));   
            console.log('vdkjlqd')    
        };
        saveLanguages()
    }, [languages])

    return (
        <SettingContext.Provider value={{languages, setLanguages, countries, setCountries}}>
            {children}
        </SettingContext.Provider>
    )
}