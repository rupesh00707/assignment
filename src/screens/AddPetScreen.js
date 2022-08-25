/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useStore} from '../global/store';
import {create} from '../function/create';
//Components
import {Icon} from 'react-native-elements';
import CustomInput from '../components/customInput';
import Counter from '../components/counter';

import {styles} from '../styles/screens/AddPet';
import {vw, Colors} from '../utilities/variables';
import firestore from '@react-native-firebase/firestore';

const AddPetScreen = ({navigation}) => {
  const {user, setUser} = useStore();
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState({
    years: 0,
    months: 0,
  });
  const [gender, setGender] = useState('Male');

  const addPet = () => {
    create(
      `${user.uid}`,
      {
        petName,
        petBreed,
        petAge,
        gender,
      },
      'Pet added SuccessGully',
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name="chevron-back-outline"
            type="ionicon"
            color={Colors.white}
            size={vw(10)}
            onPress={() => navigation.goBack()}
            style={styles.backIcon}
          />
        </View>
        <Text style={styles.headingText}>Add Your Pet's</Text>
        <Text
          style={[
            styles.headingText,
            {
              marginTop: 0,
            },
          ]}>
          Details
        </Text>
        <Text style={styles.subHeadingText}>
          Add your pet's to Pawpurrfect. Based on your pet,
        </Text>
        <Text
          style={[
            styles.subHeadingText,
            {
              marginTop: 0,
            },
          ]}>
          we will provide best service providers
        </Text>
      </View>
      <View style={styles.formContainer}>
        <CustomInput
          label={'Pet Name'}
          value={petName}
          onChangeText={setPetName}
        />
        <CustomInput
          label={'Breed'}
          value={petBreed}
          onChangeText={setPetBreed}
        />
        <Text style={styles.ageHeadingText}>Age</Text>
        <View style={styles.ageContainer}>
          <View style={styles.counter1}>
            <Counter
              value={petAge.years}
              onIncrement={() =>
                setPetAge({...petAge, years: petAge.years + 1})
              }
              onDecrement={() => {
                if (petAge.years > 0) {
                  setPetAge({...petAge, years: petAge.years - 1});
                } else {
                  alert('Cannot be less than 0');
                }
              }}
            />
            <View style={styles.counterLabelContainer}>
              <Text style={styles.counterLabel}>Years</Text>
            </View>
          </View>
          <Text style={styles.andText}>&</Text>
          <View style={styles.counter1}>
            <Counter
              value={petAge.months}
              onIncrement={() =>
                setPetAge({...petAge, months: petAge.months + 1})
              }
              onDecrement={() => {
                if (petAge.months > 0) {
                  setPetAge({...petAge, months: petAge.months - 1});
                } else {
                  alert('Cannot be less than 0');
                }
              }}
            />
            <View style={styles.counterLabelContainer}>
              <Text style={styles.counterLabel}>Months</Text>
            </View>
          </View>
        </View>
        <Text style={styles.ageHeadingText}>Gender</Text>
        <TouchableOpacity
          style={styles.checkBox}
          onPress={() => setGender('Male')}>
          <Text style={styles.checkBoxText}>Male</Text>
          <Icon
            name={gender === 'Male' ? 'check-circle' : 'check-circle-outline'}
            type="material"
            color={Colors.accent}
            size={vw(7)}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkBox}
          onPress={() => setGender('Female')}>
          <Text style={styles.checkBoxText}>Female</Text>
          <Icon
            name={gender === 'Female' ? 'check-circle' : 'check-circle-outline'}
            type="material"
            color={Colors.accent}
            size={vw(7)}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={addPet}>
            <Text style={styles.buttonText}>Next</Text>
            <View style={styles.buttonIcon}>
              <Icon
                name="chevron-forward-outline"
                type="ionicon"
                color={Colors.white}
                size={vw(4)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default AddPetScreen;
