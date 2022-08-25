/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useStore} from '../global/store';

import {styles} from '../styles/screens/Home';
import {Icon} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
  const {user, setUser} = useStore();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Icon
        reverse
        name="football"
        type="ionicon"
        color="#517fa4"
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
