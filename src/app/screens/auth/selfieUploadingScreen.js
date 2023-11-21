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


export const SelfieUploadingScreen = ({ navigation }) => {
  return (
    <View style={tw`bg-[#ffffff] w-full h-full relative `}>
      <ScrollView style={tw``}>
        <View style={tw`w-[90%] mx-[5%] h-full flex flex-col items-start mb-[30px]`}>
          <MaterialCommunityIcons
            style={{ marginTop: 35 }}
            name="chevron-left"
            size={30}
          />
          <View style={tw`w-full flex justify-center items-center flex-col gap-[150px] `}>
            <Text style={tw`text-[22px] font-bold text-[#00936A]`}>
              Verify your Identity !
            </Text>
            <View style={tw`w-full flex justify-center items-center flex-col `}>
              <Image
                style={tw`w-[60px] h-[60px]`}
                source={require('../../../../assets/images/face_recog.png')}

              />
              <Text style={tw`text-[#5A5A5A] text-[18px] text-center leading-[26px] mt-[10px]`}>
                Take a photo of your face using front camera.
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("afterConfirmEmail")} style={tw`bg-[#00936A] h-[10] w-full rounded-[6px] flex items-center flex-col justify-center cursor-pointer`}>
              <Text style={tw`text-[#ffffff] font-semibold text-center font-medium leading-[22px] text-[16px]`}>
                Start
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>

  )

}