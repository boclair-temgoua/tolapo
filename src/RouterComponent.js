import React, { useState } from "react"
import { AuthContext } from "./contexts/Auth"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ENV_REACT_NATIVE_TOKEN } from '@env'


// ** Get token
// const isUserLoggedIn = async (value) => JSON.parse(await AsyncStorage.getItem(`${ENV_REACT_NATIVE_TOKEN}`))


// export const sUserLoggedIn = async (value) => {
//     try {
//         await AsyncStorage.getItem(`${ENV_REACT_NATIVE_TOKEN}`)
//     } catch (error) { console.log(error) }
// }

const isUserLoggedIn = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(`${ENV_REACT_NATIVE_TOKEN}`)
        if (jsonValue !== null) {
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } else {
            console.log(`Token don't exist`)
        }
    } catch (error) { console.log(error) }
}

const sUserLoggedIn = async () => {
    try {
        await AsyncStorage.getItem(`${ENV_REACT_NATIVE_TOKEN}`)
    } catch (error) { console.log(error) }
}

// export const getUserData = async () => JSON.parse(await AsyncStorage.getItem(ENV_REACT_NATIVE_TOKEN))

// ** Router Import
import Routes from './routes/Routes'


const RouterComponent = props => {
    const [userItem, setUserItem] = useState(isUserLoggedIn())
    console.log('userSite =====>', userItem)
    console.log('sUserLoggedIn =====>', sUserLoggedIn())

    return (
        <AuthContext.Provider value={{ userItem, setUserItem }} >
            <Routes />
        </AuthContext.Provider>
    )
}
export default RouterComponent
