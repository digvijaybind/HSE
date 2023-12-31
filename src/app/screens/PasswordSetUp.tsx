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
const PasswordScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <ScrollView style={{}}>
        <View
          style={{
            width: '90%',
            marginLeft: '5%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: 30,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              style={{ marginTop: 45 }}
              name="chevron-left"
              size={30}
            />
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              Set Password
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}
            >
              <Text style={{ color: '#5A5A5A' }}>Your password must have</Text>
              <Text style={{ color: '#5A5A5A' }}>One Uppercase letter</Text>
              <Text style={{ color: '#5A5A5A' }}>One Special character</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: 35,
              marginBottom: 9,
              width: '90%',
              marginLeft: '5%',
              gap: 25,
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                height: 45,
                borderRadius: 10,
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#00936A',
              }}
            >
              <TextInput
                style={{ width: '94%', height: '100%', marginLeft: '3%' }}
                id="password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Enter password'}
                textContentType="password"
              />
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                height: 45,
                borderRadius: 10,
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#00936A',
              }}
            >
              <TextInput
                style={{ width: '94%', height: '100%', marginLeft: '3%' }}
                id="password"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={'default'}
                placeholder={'Confirm password'}
                textContentType="password"
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log('This is login In');
              }}
              style={{
                backgroundColor: '#00936A',
                height: 45,
                width: '100%',
                borderRadius: 6,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 16,
                  lineHeight: 22,
                }}
              >
                Set Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PasswordScreen;
