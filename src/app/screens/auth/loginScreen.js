/**
 * Copyright 2023 Miracle Software 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Pressable,
  Image,

} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';


export const LoginScreen = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <View style={{ backgroundColor: '#00936A', width: '100%', height: '100%', position: 'relative' }}>
      <Image
        style={{ position: 'absolute', top: 0, height: 120, width: 120, right: 0 }}
        source={require('../../../../assets/images/upper_angle.png')}
      />
      <View style={{ width: '100%', marginTop: 30, flexDirection: 'column', alignItems: 'flex-start' }}>
        <View style={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Text style={{ color: '#646464', fontSize: 30, fontWeight: 'bold', zIndex: 10, marginBottom: 20 }}>
            Login
          </Text>
          <View style={{
            backgroundColor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            width: 180, // Set your desired width
            height: 180, // Set your desired height
            borderRadius: 100,
            ...Platform.select({
              android: {
                elevation: 24,
                shadowColor: '#FFFCB9',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: 10, // Use elevation for Android
              },
              ios: {
                // For iOS, you may need to use a third-party library like react-native-shadow
                // Example: https://github.com/879479119/react-native-shadow
                shadowColor: '#FFFCB9',
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 1,
                shadowRadius: 10,
              },
            })
          }}>
            <Image
              style={{ width: '100%', height: '100%', borderRadius: 100, }}
              source={require('../../../../assets/images/house.jpeg')}
            />

          </View>
          <View style={{ width: '90%', marginLeft: '5%', marginRight: '5%', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: '#fff', fontWeight: 'normal', fontFamily: 'Lato_400Regular' }}>Please login to continue</Text>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginTop: 18, marginBottom: 4, gap: 18 }}>
              <View style={{ backgroundColor: '#fff', height: 45, borderRadius: 10, width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                <TextInput
                  style={{ width: '94%', height: '100%', marginLeft: '3%', fontFamily: 'Lato_400Regular' }}
                  id="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType={'email-address'}
                  placeholder={'Enter Email id / Mobile Number'}
                  textContentType="emailAddress"
                />
              </View>
              <View style={{ backgroundColor: '#fff', height: 45, borderRadius: 10, width: '100%', flexDirection: 'column', alignItems: 'center' }}>
                <TextInput
                  style={{ width: '94%', height: '100%', marginLeft: '3%', fontFamily: 'Lato_400Regular' }}
                  id="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder={'Enter Password'}
                  textContentType="password"
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('signup');
                  console.log("This is login In")
                }}
                style={{ backgroundColor: '#003534', height: 45, width: '100%', borderRadius: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
                  Login
                </Text>
              </TouchableOpacity>
              <View style={{ height: 25, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ height: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 12 }}>
                  <CheckBox
                    value={isChecked}
                    onValueChange={setChecked}
                    color="#fff"
                    style={{ height: 15, width: 15, borderWidth: 1 }}
                  />
                  <Text style={{ color: '#fff', fontSize: 14 }}>
                    Remember me
                  </Text>
                </View>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('passwordSetup');
                  console.log("This is login In")
                }}>
                  <Text style={{ color: '#fff', fontSize: 14 }}>
                    Forgot password ?
                  </Text>
                </TouchableOpacity>

              </View>
              <View style={{ height: 5, width: '100%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', position: 'relative', marginTop: 10 }}>
                <View style={{ height: 2, width: '100%', backgroundColor: '#ffffff' }} />
                <View style={{ position: 'absolute', top: -10, backgroundColor: '#00936A' }}>
                  <Text style={{ fontSize: 17, color: '#ffffff' }}>
                    Or Login with
                  </Text>
                </View>
              </View>
              <View style={{ height: 25, width: '60%', marginLeft: '20%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('../../../../assets/images/facebook.png')}
                />
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('../../../../assets/images/google.png')}
                />
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('../../../../assets/images/apple.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

  );
}