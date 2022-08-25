/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from '../styles/components/button';

const button = ({onclick}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onclick}>
      <Text style={styles.text}>Continue</Text>
    </TouchableOpacity>
  );
};
export default button;
