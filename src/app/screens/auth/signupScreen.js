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
    <View style={{ backgroundColor: '#00936A', width: '100%', height: '100%', position: 'relative' }}>
      <ScrollView style={{}}>
        <View style={{ width: '90%', marginLeft: '5%', height: '100%', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 30 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center', width: '70%', marginLeft: '15%', marginTop: 50, gap: 8 }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30 }}>
              Let’s get started
            </Text>
            <Image
              style={{ width: '100%', height: 195 }}
              source={require('../../../../assets/images/announcement.png')}
            />
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'center', width: '80%', marginLeft: '10%', marginTop: 8, gap: 8 }}>
            <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center' }}>
              Creating an account is free & simple.
            </Text>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginTop: 35, gap: 20, width: '95%', marginLeft: '2.5%', marginRight: '2.5%', justifyContent: 'center' }}>
            <View style={{ backgroundColor: '#fff', height: 45, borderRadius: 8, width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                style={{ width: '94%', height: '100%', marginLeft: '3%' }}
                id="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter Full Name'}
                textContentType="name"
              />
            </View>
            <View style={{ backgroundColor: '#fff', height: 45, borderRadius: 10, width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                style={{ width: '94%', height: '100%', marginLeft: '3%' }}
                id="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'email-address'}
                placeholder={'Enter Email id'}
                textContentType="emailAddress"
              />
            </View>
            <View style={{ backgroundColor: '#fff', height: 45, borderRadius: 10, width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                style={{ width: '94%', height: '100%', marginLeft: '3%' }}
                id="phone"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'number-pad'}
                placeholder={'Enter Mobile Number'}
                textContentType="telephoneNumber"
              />
            </View>
            <View style={{ backgroundColor: '#fff', height: 45, borderRadius: 10, width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <TextInput
                style={{ width: '94%', height: '100%', marginLeft: '3%' }}
                id="phone"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter Birthdate'}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("confirmEmail")}
              style={{ backgroundColor: '#003534', height: 45, width: '100%', borderRadius: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}
            >
              <Text style={{ color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 16, lineHeight: 22 }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '70%', marginLeft: '15%', marginTop: 10 }}>
            <Text style={{ fontSize: 14, color: '#ffffff' }}>Already have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Text style={{ fontSize: 14, color: '#000000' }}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>

  )

}