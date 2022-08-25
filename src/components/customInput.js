/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {styles} from '../styles/components/CustomInput';

const customInput = ({label, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...otherProps} />
    </View>
  );
};
export default customInput;
