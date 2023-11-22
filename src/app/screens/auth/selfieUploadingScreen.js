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
import CheckBox from 'expo-checkbox';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const SelfieUploadingScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#ffffff', width: '100%', height: '100%', position: 'relative' }}>
      <ScrollView style={{}}>
        <View style={{ width: '90%', marginLeft: '5%', height: '100%', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 30 }}>
          <MaterialCommunityIcons
            style={{ marginTop: 35 }}
            name="chevron-left"
            size={30}
          />
          <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 150 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#00936A' }}>
              Verify your Identity !
            </Text>
            <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                style={{ width: 60, height: 60 }}
                source={require('../../../../assets/images/face_recog.png')}
              />
              <Text style={{ color: '#5A5A5A', fontSize: 18, textAlign: 'center', lineHeight: 26, marginTop: 10 }}>
                Take a photo of your face using front camera.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("afterConfirmEmail")}
              style={{ backgroundColor: '#00936A', height: 45, width: '100%', borderRadius: 6, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 16, lineHeight: 22 }}>
                Start
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>


  )

}