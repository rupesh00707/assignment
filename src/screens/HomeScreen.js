/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useStore} from '../global/store';
import {getAllDocFromCollection} from '../function/CRUD';
//Components
import PetDisplayCard from '../components/petDisplayCard';
import {Icon} from 'react-native-elements';
//Styles
import {styles} from '../styles/screens/Home';
import {vw, Colors} from '../utilities/variables';

const HomeScreen = ({navigation}) => {
  const {user, setUser} = useStore();
  const [petsData, setPetsData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getAllDocFromCollection(`${user.uid}`, setPetsData);
    }, []),
  );
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          style={{width: '100%'}}
          >
          {petsData?.map((pet, index) => {
            return (
              <PetDisplayCard
                key={index}
                name={pet?.petName}
                breed={pet?.petBreed}
                age={`${pet?.petAge?.years} years ${pet?.petAge?.months} months`}
                item={pet}
                onPress={() => navigation.navigate('EditPet', {pet})}
              />
            );
          })}
        </ScrollView>
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
