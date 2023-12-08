/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { loadAsync, useFonts } from 'expo-font';
import 'react-native-url-polyfill/auto';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from './src/app/screens/SignUpScreen';
import LoginScreen from './src/app/screens/LoginScreen';
import PasswordScreen from './src/app/screens/PasswordSetUp';
import ConfirmEmailScreen from './src/app/screens/ConfirmEmail';
import AfterEmailVerificationScreen from './src/app/screens/AfterEmailVerification';
import VerifyPhoneNumberScreen from './src/app/screens/VerifyPhoneNumberScreen';
import KycVerificationScreen from './src/app/screens/KycVerificationScreen';
import SelfieUploadingScreen from './src/app/screens/SelfieUpLoadingScreen';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export const App = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [assets, setAssets] = useState<Asset[]>([]);

  const [loaded, error] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });

  const loadAssetsAsync = async () => {
    const asset = await Asset.loadAsync([require('./assets/images/logo.png')]);
    await loadAsync({
      Lato_400Regular,
      Lato_700Bold,

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
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="passwordSetup"
            component={PasswordScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="confirmEmail"
            component={ConfirmEmailScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="afterConfirmEmail"
            component={AfterEmailVerificationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="verifyPhoneNumber"
            component={VerifyPhoneNumberScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="kycVerify"
            component={KycVerificationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="selfieUpload"
            component={SelfieUploadingScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
