
import React, { useEffect, useRef, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
import { StatusBar } from 'expo-status-bar'

import {
  //   OnBoarding,

  Login,
  Register,
  Home,
  Setting,
  ForgotPassword,
  StatusInfo,
  SuccessPage,
  SuccessPasswordReset,
  UserDetail,
  SuccessRegister,
  ChangePassword
} from '../screens'
import Tabs from "./navigation/tabs";
import { ENV_REACT_NATIVE_TOKEN } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator();

const isUserLoggedIn = async () => JSON.parse(await AsyncStorage.getItem(`${ENV_REACT_NATIVE_TOKEN}`))

const Routes = ({ props }) => {

  useEffect(() => {

  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Login'}
      >

        {/* <Stack.Screen
          name="Home"
          component={Home}
        /> */}

        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ title: 'Welcome', gestureEnabled: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: 'Register' }}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: 'Forgot Password' }}
        />

        <Stack.Screen
          name="StatusInfo"
          component={StatusInfo}
        />

        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
        />

        <Stack.Screen
          name="SuccessPage"
          component={SuccessPage}
          options={{ gestureEnabled: false }} // if success
        />

        <Stack.Screen
          name="SuccessPasswordReset"
          component={SuccessPasswordReset}
          options={{ gestureEnabled: false }} // if success
        />

        <Stack.Screen
          name="SuccessRegister"
          component={SuccessRegister}
          options={{ gestureEnabled: false }} // if success
        />

        <Stack.Screen
          name="Setting"
          component={Setting}
        />

        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={({ route }) => ({ title: route.params.user })}
        />

        {/* <Stack.Screen
          name="Otp"
          component={Otp}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes