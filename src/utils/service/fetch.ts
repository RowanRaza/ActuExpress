import { countriesDataFromGit, fetchProps } from "../../types/types";
import { API_Key } from "./Api_Key";
import { langs } from "../languages";
 '../languages'

export default async function fetchData({languages, countries, categories} : fetchProps) {
    const countrycode : string[] = await getCountriesCode(countries)
    const lang : string[] = getLangCode(languages)
    const country = countries.length ? '&country='+countrycode.join : ''
    const URL = `https://newsdata.io/api/1/news?apikey=${API_Key + country}`

}

function getLangCode(languages : string[]) {
    const langCodes : string[] = [];
    languages.map((language : string) => {
        langCodes.push(langs[language])
    }) 
    return langCodes;
}

async function getCountriesCode(countries : string[]) : Promise<string[]> {
    const fetchCountries = async () : Promise<countriesDataFromGit[]> => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/RowanRaza/ISO-3166-Countries-with-Regional-Codes/master/slim-2/slim-2.json')
            if(!response.ok)
                throw new Error('network error');
            const data : countriesDataFromGit[] = await response.json();
            return data;                
        } catch(error) {
            console.error(error)
            throw new Error("");
        }
    }
    const countriesSheet = await fetchCountries();
    const countrycodes : string[] = [] ;
    countries.map((country) => {
        const code = countriesSheet.find((c) => c.name === country)
        if (code)
            countrycodes.push(code["alpha-2"])
    })
    return countrycodes    
}
