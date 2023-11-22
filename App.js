/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Righteous_400Regular } from '@expo-google-fonts/righteous'
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { loadAsync, useFonts } from 'expo-font';
import { Image } from 'react-native';

import AssetsContext from './src/app/context/Assetscontext';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/app/screens/auth/loginScreen';
import { SignUpScreen } from './src/app/screens/auth/signupScreen';
import { PasswordScreen } from './src/app/screens/auth/password_setup';
import { ConfirmEmailScreen } from './src/app/screens/auth/confirm_email'
import { AfterEmailVerificationScreen } from './src/app/screens/auth/afterEmailVerification'
import { VerifyPhoneNumberScreen } from './src/app/screens/auth/verifyPhoneNumberScreen'
import { KycVerificationScreen } from './src/app/screens/auth/kycVerificationScreen'
import {SelfieUploadingScreen} from './src/app/screens/auth/selfieUploadingScreen'

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [assets, setAssets] = useState([]);


  const [loaded, error] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Righteous_400Regular
  })


  const loadAssetsAsync = async () => {
    const asset = await Asset.loadAsync([
      require('./assets/images/splash.png'),
    ]);
    await loadAsync({
      Lato_400Regular,
      Lato_700Bold,
      Righteous_400Regular
      //
    });


    return asset;
  };

  useEffect(() => {
    loadAssetsAsync()
      .then((a) => {
        setAssets(a);
        setAssetsLoaded(true);
      })
      .catch((e) => {
        console.log(e);
        setAssetsLoaded(false);

      });



  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (assetsLoaded && loaded) {
      await SplashScreen.hideAsync();
    }
  }, [assetsLoaded, loaded]);

  if (!assetsLoaded && !loaded) {
    return null;
  }


  return (
    <AssetsContext.Provider value={{ assets, setAssets }}>

      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="onboarding"
              component={OnboardingScreen}
              options={{
                headerShown: false,
              }}
            />
       

            <Stack.Screen name="signup"
              component={SignUpScreen}
              options={{
                headerShown: false
              }}

            />
            <Stack.Screen name="passwordSetup"
              component={PasswordScreen}
              options={{
                headerShown: false
              }}


            />
            <Stack.Screen name="confirmEmail"
              component={ConfirmEmailScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="afterConfirmEmail"
              component={AfterEmailVerificationScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="verifyPhoneNumber"
              component={VerifyPhoneNumberScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen name="kycVerify"
              component={KycVerificationScreen}
              options={{
                headerShown: false
              }}
            />
              <Stack.Screen name="selfieUpload"
              component={SelfieUploadingScreen}
              options={{
                headerShown: false
              }}
            />


          </Stack.Navigator>
        </NavigationContainer>

      </View>
    </AssetsContext.Provider>
  )
}

export default App;