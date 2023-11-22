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


export const ConfirmEmailScreen = ({ navigation }) => {

  return (
    <View style={{ backgroundColor: '#ffffff', width: '100%', height: '100%', position: 'relative' }}>
      <ScrollView style={{}}>
        <View style={{ width: '90%', marginLeft: '5%', height: '100%', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 30 }}>
          <MaterialCommunityIcons
            style={{ marginTop: 45 }}
            name="chevron-left"
            size={30}
          />
          <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              Confirm your email id
            </Text>
            <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
              <Text style={{ color: '#5A5A5A' }}>
                We have sent you a link to
              </Text>
              <Text style={{ color: '#00936A' }}>
                user4455@gmail.com.
              </Text>
              <Text style={{ color: '#5A5A5A', textAlign: 'center', maxWidth: 250 }}>
                Please verify your account by clicking the link in your inbox.
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginTop: 35, gap: 15, width: '90%', marginLeft: '5%' }}>
            <View style={{ backgroundColor: '#fff', height: 45, borderRadius: 10, width: '100%', flexDirection: 'column', alignItems: 'center', borderStyle: 'solid', borderWidth: 1, borderColor: '#00936A' }}>
              <TextInput
                style={{ width: '94%', height: '100%', marginLeft: '3%' }}
                id="password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'number-pad'}
                placeholder={'Enter 4 - Digit Code'}
                textContentType="oneTimeCode"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("afterConfirmEmail")}
              style={{ backgroundColor: '#00936A', height: 45, width: '100%', borderRadius: 6, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 9 }}
            >
              <Text style={{ color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 16, lineHeight: 22 }}>
                Verify Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}