/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';

import {styles} from '../styles/components/PhoneInput';

const phoneInput = ({...otherProps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/image/Flag-of-India.jpg')}
          style={styles.image}
        />
      </View>
      <Text style={styles.countryCodeText}>+91</Text>
      <View style={styles.inputContainer}>
        <TextInput
          maxLength={10}
          placeholder="Phone Number"
          placeholderTextColor="rgba(255, 255, 255, 0.50)"
          style={styles.input}
          keyboardType="phone-pad"
          {...otherProps}
        />
      </View>
    </View>
  );
};
export default phoneInput;
