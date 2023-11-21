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
import CheckBox from 'expo-checkbox'
import tw from "twrnc"


export const LoginScreen = ({ navigation}) => {
  const [isChecked,setChecked]=useState(false)
  return (
    <View style={tw`bg-[#00936A] w-full h-full relative `}>
      
      <Image
        style={tw`absolute top-0 h-[120px] w-[120px] right-0`}
        source={require('../../../../assets/images/upper_angle.png')}
      />
      <View style={tw`w-full mt-[20] flex flex-col items-start`}>
        <View style={tw`flex flex-col items-center w-full`}>
          <Text style={tw`text-[#646464] text-[8] font-bold z-10`}>
            Login
          </Text>
          <Image
            style={tw`w-full h-[177] absolute top-[-10]`}
            source={require('../../../../assets/images/splash.png')}
          />
          <View style={tw`w-[90%] mx-[5%] flex flex-col absolute top-[73] items-center`}>
            <Text style={tw`text-[#fff] font-normal`}>Please login to continue</Text>
            <View style={tw`flex flex-col items-start w-full mt-[18] gap-[4]`}>
              <View style={tw`bg-[#fff] h-[10] rounded-[10] w-full flex flex-col items-center `}>
                <TextInput
                  style={tw`w-[94%] h-full mx-[3%]`}
                  id="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType={'email-address'}
                  placeholder={'Enter Email id / Mobile Number'}
                  textContentType="emailAddress"
                />

              </View>
              <View style={tw`bg-[#fff] h-[10] rounded-[10] w-full flex flex-col items-center `}>
                <TextInput
                  style={tw`w-[94%] h-full mx-[3%]`}
                  id="password"
                  autoCapitalize="none"
                  autoCorrect={false}


                  placeholder={'Enter Password'}

                  textContentType="password"
                />
              </View>
              <TouchableOpacity onPress={() => {
                 navigation.navigate('signup');
                console.log("This is login In")
              }} style={tw`bg-[#003534] h-[10] w-full rounded-[10] flex items-center flex-col justify-center`}>
                <Text style={tw`text-[#fff] font-semibold text-center`}>
                  Login
                </Text>

              </TouchableOpacity>
              <View style={tw`h-[25px] w-full flex flex-row justify-between items-center`}>
                <View style={tw`h-[10] flex flex-row justify-start items-center gap-[12px]`} >

                  {/* <CheckBox

                    style={tw`w-[20] h-full mx-[3%]`}
                  /> */}
                  <CheckBox
              value={isChecked} 
              onValueChange={setChecked}
              color="#fff"
              style={tw`h-[15px] w-[15px] border-[0.3]`}
            />
                  <Text style={tw`text-[#fff] text-[4]`}>
                    Remember me
                  </Text>

                </View>
                <Text style={tw`text-[#fff] text-[4]`}>
                    Remember me
                  </Text>

              </View>
              <View style={tw`h-[5px] w-full flex flex-col justify-between items-center relative mt-[10px]`}>
                <View style={tw`h-[2px] w-full bg-[#ffffff]`}/>
                <View style={tw`absolute top-[-10px] bg-[#00936A] `}>
                <Text  style={tw`text-[17px] text-[#ffffff]`}>
                Or Login with
                </Text>
                </View>
                

              </View>
              <View style={tw`h-[25px] w-[60%] mx-[20%] flex flex-row justify-between items-center`}>
              <Image
                style={tw`w-[30px] h-[30px]`}
                source={require('../../../../assets/images/facebook.png')}

              />
              <Image
                style={tw`w-[30px] h-[30px]`}
                source={require('../../../../assets/images/google.png')}

              />
                  <Image
                style={tw`w-[30px] h-[30px]`}
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