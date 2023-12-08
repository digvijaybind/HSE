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

const VerifyPhoneNumberScreen = ({ navigation }: { navigation: any }) => {
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
              Verify your Phone Number
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
              <Text style={{ color: '#5A5A5A', fontSize: 19, marginBottom: 3 }}>
                Enter the 4 - digit code sent
              </Text>
              <Text
                style={{
                  color: '#5A5A5A',
                  maxWidth: 250,
                  textAlign: 'center',
                  fontSize: 19,
                }}
              >
                to +91******8799
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '90%',
              marginLeft: '5%',
              marginTop: 35,
            }}
          >
            <View
              style={{
                backgroundColor: '#fff',
                height: 50,
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
                placeholder={'Enter 4 - Digit Code'}
                textContentType="oneTimeCode"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('kycVerify')}
              style={{
                backgroundColor: '#00936A',
                height: 45,
                width: '100%',
                borderRadius: 6,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
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
                Verify Code
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                width: '95%',
                marginLeft: '2.5%',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Text
                  style={{ color: '#919396', fontSize: 14, marginRight: 8 }}
                >
                  Didn’t receive verification code ? Resend in
                </Text>
                <Text
                  style={{
                    color: '#00936A',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}
                >
                  02:00
                </Text>
              </View>
              <Image
                style={{ width: 60, height: 60, marginTop: 20 }}
                source={require('./../../../assets/images/face_recog.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default VerifyPhoneNumberScreen;
