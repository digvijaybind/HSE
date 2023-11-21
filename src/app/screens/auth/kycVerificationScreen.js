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


export const KycVerificationScreen = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <View style={tw`bg-[#ffffff] w-full h-full relative `}>
      <ScrollView style={tw``}>
        <View style={tw`w-[90%] mx-[5%] h-full flex flex-col items-start mb-[30px]`}>
          <MaterialCommunityIcons
            style={{ marginTop: 35 }}
            name="chevron-left"
            size={30}
          />
          <View style={tw`w-full flex justify-center items-center flex-col mb-[30px]  `}>
            <Text style={tw`text-[22px] font-bold`}>
              KYC Verification
            </Text>
            <View style={tw`w-full flex justify-center items-center flex-col mt-[20px] gap-[3px]`}>
              <Text style={tw`text-[#5A5A5A] text-[16px] max-w-[350px] text-center leading-[28px]`}>
                Instructions: To ensure the security of your investments, we need to verify your identity. Click & update the Documents
              </Text></View>
          </View>
          <View style={tw`flex flex-col items-start w-full mt-[5px] gap-[20px] w-[90%] mx-[5%]`}>
            <View style={tw`bg-[#fff] h-[50px] rounded-[10px] w-full flex flex-col items-center border-[2px] border-solid border-[#00936A] justify-center`}>
              <View style={tw`w-[90%] mx-[5%] items-center flex-row justify-between`}>
                <Text style={tw`text-[#00936A] text-[18px] font-medium`}>
                  Upload Your Selfie
                </Text>
                <Image
                  style={tw`w-[20px] h-[20px] `}
                  source={require('../../../../assets/images/circular_angle.png')}

                />

              </View>


            </View>
            <View style={tw`bg-[#fff] h-[50px] rounded-[10px] w-full flex flex-col items-center border-[2px] border-solid border-[#00936A] justify-center`}>
              <View style={tw`w-[90%] mx-[5%] items-center flex-row justify-between`}>
                <Text style={tw`text-[#00936A] text-[18px] font-medium`}>
                  Address Proof
                </Text>
                <Image
                  style={tw`w-[20px] h-[20px] `}
                  source={require('../../../../assets/images/circular_angle.png')}

                />

              </View>


            </View>
            <View style={tw`bg-[#fff] h-[50px] rounded-[10px] w-full flex flex-col items-center border-[2px] border-solid border-[#00936A] justify-center`}>
              <View style={tw`w-[90%] mx-[5%] items-center flex-row justify-between`}>
                <Text style={tw`text-[#00936A] text-[18px] font-medium`}>
                  Employment Proof
                </Text>
                <Image
                  style={tw`w-[20px] h-[20px] `}
                  source={require('../../../../assets/images/circular_angle.png')}

                />

              </View>


            </View>
            <View style={tw`bg-[#fff] h-[50px] rounded-[10px] w-full flex flex-col items-center border-[2px] border-solid border-[#00936A] justify-center`}>
              <View style={tw`w-[90%] mx-[5%] items-center flex-row justify-between`}>
                <Text style={tw`text-[#00936A] text-[18px] font-medium`}>
                  Upload Document
                </Text>
                <Image
                  style={tw`w-[20px] h-[20px] `}
                  source={require('../../../../assets/images/circular_angle.png')}

                />

              </View>


            </View>
            <View style={tw`h-[10] flex flex-row justify-start items-center gap-[8px]`} >

              <CheckBox
                value={isChecked}
                onValueChange={setChecked}
                color="#00936A"
                style={tw`h-[13px] w-[13px] border-[0.3] `}

              />
              <Text style={tw`text-[#938F99] text-[10px]`}>
                I hereby give consent to access my documents for verification and given data is correct according to me.
              </Text>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("selfieUpload")} style={tw`bg-[#00936A] h-[10] w-full rounded-[6px] flex items-center flex-col justify-center cursor-pointer`}>
              <Text style={tw`text-[#ffffff] font-semibold text-center font-medium leading-[22px] text-[16px]`}>
                Verify Code
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      </ScrollView></View>)


}