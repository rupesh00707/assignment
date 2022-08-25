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
  // Styles for OTP Text Input
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderColor: Colors.white,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
