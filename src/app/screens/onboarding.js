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
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Pressable,
  Image,

} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

// import OnboardingCommonButton from "../components/shared/onboardingCommonButon"

export const OnboardingScreen = ({ navigation }) => {
  const [slide, setSlide] = useState(0);

  const slides = useMemo(
    () => [
      {
        heading: 'Choose and customize your Drinks',
        sub: 'Customize your own drink exactly how you like it by adding any topping you like!!!',
        image: require('../../../assets/images/onboardingone.png'),
      },
      {
        heading: 'Quickly and easily',
        sub: 'You can place your order quickly and easily without wasting time. You can also schedule orders via your smartphone.',
        image: require('../../../assets/images/onboardingtwo.png'),
      },
      {
        heading: 'Pick up or delivery',
        sub: 'You can choose to pick up your order at the nearest store or have it delivered to your location.',
        image: require('../../../assets/images/onboardingone.png')
      },
      {
        heading: 'Get and Redeem Voucher',
        sub: 'Exciting prizes await you! Redeem yours by collecting all the points after purchase in the app!',
        image: require('../../../assets/images/onboardingone.png')
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(slides[slide]);

  return (
<View></View>
    // <View style={styles.container}>
    //   <StatusBar
    //     barStyle="dark-content"
    //     backgroundColor="transparent"
    //     translucent={true}
    //   />
    //   <SafeAreaView style={styles.main}>
    //     <Pressable
    //       onPress={() => {
    //         console.log('Skip');
    //       }}
    //       style={styles.skipContainer}
    //     >
    //       <Text style={styles.skip}>Skip</Text>
    //     </Pressable>
    //     {currentSlide && (
    //       <View
    //         style={{
    //           flex: 1,
    //           justifyContent: 'space-between',
    //           alignItems: 'center',
    //           marginTop: 50,
    //           width: '100%',
    //         }}
    //       >
    //         <Image
    //           source={currentSlide.image}
    //           style={{
    //             width: 284,
    //             height: 261,
    //             marginRight: currentSlide.image === slides[1].image ? 0 : 25,
    //           }}
    //           resizeMode="contain"
    //         />
    //         <View style={styles.body}>
    //           <Text style={styles.heading}>{currentSlide.heading}</Text>
    //           <Text style={styles.sub}>{currentSlide.sub}</Text>
    //         </View>

    //         <View style={styles.bottom}>
    //           <View
    //             style={{
    //               flexDirection: 'row',
    //               justifyContent: 'space-between',
    //               alignItems: 'center',
    //               width: 70,
    //             }}
    //           >
    //             {slides.map((_, index) => {
    //               return (
    //                 <RouLinearGradient
    //                   style={{
    //                     width: index === slide ? 27 : 8,
    //                     height: 8,
    //                     borderRadius: 50,
    //                     marginHorizontal: 3,
    //                     overflow: 'hidden',
    //                   }}
    //                   key={index}
    //                 >
    //                   <View
    //                     style={{
    //                       width: index === slide ? 0 : '100%',
    //                       height: index === slide ? 0 : '100%',
    //                       backgroundColor: index === slide ? '' : '#cacaca',
    //                       opacity: 1,
    //                     }}
    //                   />
    //                 </RouLinearGradient>
    //               );
    //             })}
    //           </View>
    //           <TouchableOpacity
    //             onPress={() => {
    //               console.log('Next');
    //               if (slide === slides.length - 1) {
    //                 console.log('Login/SignUp');
    //                 navigation.navigate('signUp');
    //               } else {
    //                 setSlide(slide + 1);
    //                 setCurrentSlide(slides[slide + 1]);
    //               }
    //             }}
    //           >
    //             {/* <RouLinearGradient style={styles.button}>
    //               <View
    //                 style={{
    //                   flexDirection: 'row',
    //                   justifyContent: 'space-between',
    //                   alignItems: 'center',
    //                 }}
    //               >
    //                 <Text style={styles.buttonText}>
    //                   {slide === slides.length - 1 ? 'Login/SignUp' : 'Next'}
    //                 </Text>
    //                 <Ionicons
    //                   name="arrow-forward-outline"
    //                   size={20}
    //                   color="white"
    //                 />
    //               </View>
    //             </RouLinearGradient> */}
    //           </TouchableOpacity>
    //         </View>
    //       </View>
    //     )}
    //   </SafeAreaView>
    // </View>
  );
};


