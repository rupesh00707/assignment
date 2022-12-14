/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import {styles} from '../styles/components/counter';
import {Colors, vw} from '../utilities/variables';

const counter = ({onIncrement, onDecrement, value}) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.minusContainer} onPress={onDecrement}>
          <Icon
            name="remove-outline"
            type="ionicon"
            color={Colors.bg}
            size={vw(7)}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{value}</Text>
        </View>
        <TouchableOpacity onPress={onIncrement} style={styles.minusContainer}>
          <Icon
            name="add-outline"
            type="ionicon"
            color={Colors.bg}
            size={vw(7)}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default counter;
