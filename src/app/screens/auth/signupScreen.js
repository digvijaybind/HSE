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
  TouchableOpacity,
  Platform,
  StatusBar,
  Pressable,
  Image,
  ScrollView,

} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox'
import tw from "twrnc"


export const SignUpScreen = ({ navigation }) => {

  return (
    <View style={tw`bg-[#00936A] w-full h-full relative`}>
      <ScrollView style={tw``}>
        <View style={tw`w-[90%] mx-[5%] h-full flex flex-col items-start mb-[30px]`}>
          <View style={tw`flex flex-col items-center w-[70%] mx-[15%] mt-[50] gap-[8px]`}>
            <Text style={tw`font-bold align-center text-[30px]`}>
              Let’s get started
            </Text>
            <Image
              style={tw`w-full h-[59]`}
              source={require('../../../../assets/images/announcement.png')}

            />


          </View>
          <View style={tw`flex flex-col items-center w-[80%] mx-[10%] gap-[8px] mt-[8px]`}>
            <Text style={tw`text-[15px] text-[#fff] text-center`}>
              Creating an account is free & simple.
            </Text>
          </View>

          <View style={tw`flex flex-col items-start w-full mt-[35] gap-[9] w-[95%] mx-[2.5%] w-[95%] mx-[2.5%] 
`}>
            <View style={tw`bg-[#fff] h-[10] rounded-[8] w-full flex flex-col items-center `}>
              <TextInput
                style={tw`w-[94%] h-full mx-[3%]`}
                id="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter Full Name'}
                textContentType="name"
              />

            </View>
            <View style={tw`bg-[#fff] h-[10] rounded-[10] w-full flex flex-col items-center `}>
              <TextInput
                style={tw`w-[94%] h-full mx-[3%]`}
                id="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
                placeholder={'Enter Email id'}
                textContentType="emailAddress"
              />

            </View>
            <View style={tw`bg-[#fff] h-[10] rounded-[10] w-full flex flex-col items-center `}>
              <TextInput
                style={tw`w-[94%] h-full mx-[3%]`}
                id="phone"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'number-pad'}
                placeholder={'Enter Mobile Number'}
                textContentType="telephoneNumber"
              />
            </View>
            <View style={tw`bg-[#fff] h-[10] rounded-[10] w-full flex flex-col items-center `}>
              <TextInput
                style={tw`w-[94%] h-full mx-[3%]`}
                id="phone"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter Birthdate'}

              />
            </View>

            <TouchableOpacity onPress={() =>navigation.navigate("confirmEmail")} style={tw`bg-[#003534] h-[10] w-full rounded-[10] flex items-center flex-col justify-center cursor-pointer`}>
              <Text style={tw`text-[#ffffff] font-semibold text-center font-semibold leading-[22px] text-[16px]`}>
              Create Account
              </Text>

            </TouchableOpacity>
          </View>
          <View style={tw`flex flex-row justify-center items-center w-[70%] mx-[15%] mt-[10px]`}>
            <Text style={tw`text-[14px] text-[#ffffff]`}>Already have an account ? </Text>
            <TouchableOpacity onPress={() =>navigation.navigate("login")}>
            <Text style={tw`text-[#000000] text-[14px]`}>
            Log in 
            </Text>
            </TouchableOpacity>
          </View>

        </View>


      </ScrollView>
    </View>
  )

}