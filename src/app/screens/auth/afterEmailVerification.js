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


export const AfterEmailVerificationScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-[#00936A] w-full h-full relative `}>
      <ScrollView style={tw``}>
        <View style={tw`w-[90%] mx-[5%] h-full flex flex-col items-start mb-[30px]`}>
          <View style={tw`w-full h-full flex flex-col items-start mb-[30px] gap-[20px]`}>
            <Text style={tw`mt-[50px] text-[20px] max-w-[13rem] leading-[28px] font-semibold `}>
              Let's prepare you for investing.
            </Text>
            <Text style={tw`text-[#00000066] text-[17px]`}>
              Complete the steps to proceed.
            </Text>
            <View style={tw`flex flex-col items-start w-full mt-[10px] gap-[19px] w-[95%] mx-[2.5%] w-[95%] mx-[2.5%] justify-center
`}>
              <View style={tw`bg-[#fff] h-[70px] rounded-[8px] w-full flex flex-col items-center justify-center`}>
                <View style={tw`w-[95%] mx-[2.5%] flex flex-row justify-between items-center`}>
                  <View style={tw`flex flex-col items-start justify-center gap-[5px]`}>
                    <Text style={tw`text-[#3C3C4399]`}>STEP 1</Text>
                    <Text style={tw`text-[#3C3C4399]`}>Create your account.</Text>
                  </View>
                  <Image
                    style={tw`w-[30px] h-[30px]`}
                    source={require('../../../../assets/images/progress_mark.png')}

                  />

                </View>

              </View>
              <View style={tw`bg-[#fff] h-[70px] rounded-[8px] w-full flex flex-col items-center justify-center`}>
                <View style={tw`w-[95%] mx-[2.5%] flex flex-row justify-between items-center`}>
                  <View style={tw`flex flex-col items-start justify-center gap-[5px]`}>
                    <Text style={tw`text-[#3C3C4399]`}>STEP 2</Text>
                    <Text style={tw`text-[#3C3C4399]`}>Verify your Email id.</Text>
                  </View>
                  <Image
                    style={tw`w-[30px] h-[30px]`}
                    source={require('../../../../assets/images/progress_mark.png')}

                  />

                </View>

              </View>
              <View style={tw`bg-[#fff] h-[70px] rounded-[8px] w-full flex flex-col items-center justify-center`}>
                <View style={tw`w-[95%] mx-[2.5%] flex flex-row justify-between items-center`}>
                  <View style={tw`flex flex-col items-start justify-center gap-[5px]`}>
                    <Text style={tw`text-[#000000]`}>STEP 3</Text>
                    <Text style={tw`text-[#000000]`}>Verify your Phone Number.</Text>
                  </View>

                </View>

              </View>
              <View style={tw`bg-[#fff] h-[70px] rounded-[8px] w-full flex flex-col items-center justify-center`}>
                <View style={tw`w-[95%] mx-[2.5%] flex flex-row justify-between items-center`}>
                  <View style={tw`flex flex-col items-start justify-center gap-[5px]`}>
                    <Text style={tw`text-[#000000]`}>STEP 4</Text>
                    <Text style={tw`text-[#000000]`}>Add Bank account to create a Wallet.</Text>
                  </View>

                </View>

              </View>
              <TouchableOpacity onPress={() => navigation.navigate("verifyPhoneNumber")}
                style={tw`bg-[#003534] h-[10] w-full rounded-[6px] flex items-center flex-col justify-center cursor-pointer`}>
                <Text style={tw`text-[#ffffff] font-semibold text-center font-medium leading-[22px] text-[16px]`}>
                  Continue
                </Text>

              </TouchableOpacity>
              <View style={tw`flex flex-row justify-center items-center w-[70%] mx-[15%] gap-[10px]`}>
                <Text style={tw`text-[14px] text-[#ffffff]`}>Do this later.</Text>
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                  <Text style={tw`text-[#000000] text-[14px]`}>
                    Skip
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>


        </View></ScrollView></View>)

}