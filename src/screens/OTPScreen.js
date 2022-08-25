/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useStore} from '../global/store';
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

const OTPScreen = ({route, navigation}) => {
  const {phoneNumber} = route.params;
  const {confirm} = route.params;
  const {user, setUser} = useStore();

  //OTP Field Value and State
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //Firebase Function to verify OTP
  async function confirmCode() {
    try {
      await confirm.confirm(value);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (user) {
      setUser({
        phoneNumber: user.phoneNumber,
        uid: user.uid,
      });
      navigation.navigate('Home');
    }
    // if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Button
            onclick={() => {
              confirmCode();
            }}
          />
        </View>

       
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPScreen;
