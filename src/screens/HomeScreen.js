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
//Components
import PetDisplayCard from '../components/petDisplayCard';
import {Icon} from 'react-native-elements';

import {styles} from '../styles/screens/Home';
import {vw, Colors} from '../utilities/variables';

const HomeScreen = ({navigation}) => {
  const {user, setUser} = useStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            color={Colors.fontDark}
            size={vw(10)}
            onPress={() => alert('Back')}
            style={styles.backIcon}
          />
        </View>
        <Text style={styles.headingText}>My Pets</Text>
      </View>
      <View style={styles.cardContainer}>
        <PetDisplayCard name="Bella" breed="Pug" age="2" />
        <PetDisplayCard name="Bella" breed="Pug" age="2" />
        <PetDisplayCard name="Bella" breed="Pug" age="2" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddPet')}>
          <Text style={styles.buttonText}> + Add Pet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
