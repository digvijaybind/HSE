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
  ScrollView,
  Platform,
  StatusBar,
  Pressable,
  Image,

} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox'
import tw from "twrnc";
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const VerifyPhoneNumberScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-[#ffffff] w-full h-full relative `}>
      <ScrollView style={tw``}>
        <View style={tw`w-[90%] mx-[5%] h-full flex flex-col items-start mb-[30px]`}>
          <MaterialCommunityIcons
            style={{ marginTop: 45 }}
            name="chevron-left"
            size={30}
          />
          <View style={tw`w-full flex justify-center items-center flex-col mb-[30px]  `}>
            <Text style={tw`text-[22px] font-bold`}>
              Verify your Phone Number
            </Text>
            <View style={tw`w-full flex justify-center items-center flex-col mt-[30px] gap-[3px]`}>
              <Text style={tw`text-[#5A5A5A] text-[19px]`}>
                Enter the 4 - digit code sent
              </Text>
              <Text style={tw`text-[#5A5A5A] text-center max-w-[250px] text-[19px]`}>
                to +91******8799
              </Text>

            </View>
          </View>
          <View style={tw`flex flex-col items-start w-full mt-[35px] gap-[9] w-[90%] mx-[5%]`}>
            <View style={tw`bg-[#fff] h-[50px] rounded-[10px] w-full flex flex-col items-center border-[1px] border-solid border-[#00936A]`}>
              <TextInput
                style={tw`w-[94%] h-full mx-[3%]`}
                id="password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter 4 - Digit Code'}
                textContentType="oneTimeCode"
              />

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("kycVerify")} style={tw`bg-[#00936A] h-[10] w-full rounded-[6px] flex items-center flex-col justify-center cursor-pointer`}>
              <Text style={tw`text-[#ffffff] font-semibold text-center font-medium leading-[22px] text-[16px]`}>
                Verify Code
              </Text>

            </TouchableOpacity>
            <View style={tw`flex flex-col items-center w-full w-[95%] mx-[2.5%] gap-[20px]`}>
              <View style={tw`flex flex-row justify-between w-full gap-[8px]`}>
                <Text style={tw`text-[#919396] text-[14px]`}>
                  Didn’t receive verification code ? Resend in
                </Text>
                <Text style={tw`text-[#00936A] text-[14px] font-bold`}>
                  02:00
                </Text>
              </View>
              <Image
                style={tw`w-[60px] h-[60px]`}
                source={require('../../../../assets/images/face_recog.png')}

              />
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  )

}