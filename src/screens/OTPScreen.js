/* eslint-disable prettier/prettier */

import React, {useState, useRef} from 'react';
import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';
const CELL_COUNT = 6;
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

// Styles and components
import {styles} from '../styles/screens/OTP';
import Button from '../components/button';

const OTPScreen = ({route}) => {
  const {phoneNumber} = route.params;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={styles.headerText}>Verify OTP</Text>
        <Text style={styles.subHeading}>
          Enter your OTP Send to {phoneNumber}
        </Text>
        <View style={styles.phoneInputContainer}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button />
        </View>

        <View style={styles.termContainer}>
          <Text style={styles.agreeText}>By Continue you agree to</Text>
          <Text style={styles.policyText}>
            Term of Use <Text style={{color: '#fff'}}>and </Text>
            Privacy Policy
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPScreen;
