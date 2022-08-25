/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  Colors,
  Margin,
  Fonts,
} from '../../utilities/variables';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    width: SCREEN_WIDTH,
    minHeight: SCREEN_HEIGHT,
    paddingLeft: Margin.medium,
    paddingTop: Margin.large,
    paddingRight: Margin.medium,
  },
  upperContainer: {
    width: '100%',
    display: 'flex',
    flex: 3,
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: Fonts.h1,
    fontWeight: 'bold',
    color: Colors.white,
  },
  subHeading: {
    marginTop: Margin.medium,
    fontSize: Fonts.h3,
    opacity: 0.6,
    color: Colors.white,
  },
  phoneInputContainer: {
    marginTop: Margin.small,
  },
  buttonContainer: {
    marginTop: Margin.xl,
  },
  termContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Margin.xxl * 4,
  },
  agreeText: {
    fontSize: Fonts.h4,
    opacity: 0.5,
    color: Colors.white,
  },
  policyText: {
    fontSize: Fonts.h4,
    color: Colors.accent,
    opacity: 0.5,
  },
});
