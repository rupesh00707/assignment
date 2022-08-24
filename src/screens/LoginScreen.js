/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';

// Styles and components
import {styles} from '../styles/screens/Login';
import PhoneInput from '../components/phoneInput';
import Button from '../components/button';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={styles.headerText}>Login / SignUp</Text>
        <Text style={styles.subHeading}>Enter your Mobile Number</Text>
        <View style={styles.phoneInputContainer}>
          <PhoneInput />
        </View>
        <View style={styles.buttonContainer}>
          <Button />
        </View>
        
        <View style={styles.termContainer}>
          <Text style={styles.agreeText}>By Continue you agree to</Text>
          <Text style={styles.policyText}>
            Term of Use <Text style={{color: '#fff' }}>and </Text>
            Privacy Policy
          </Text>
        </View>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
