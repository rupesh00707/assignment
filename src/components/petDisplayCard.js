/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

import {styles} from '../styles/components/petDisplayCard';

const PetDisplayCard = ({name, breed, age}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/image/dog.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>{name}</Text>
        <Text style={styles.subHeadingText}>
          Breed: {breed} , age : {age}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default PetDisplayCard;
