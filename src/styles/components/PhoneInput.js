/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  Colors,
  Margin,
  Fonts,
  vw,
} from '../../utilities/variables';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: vw(7),
    width: vw(7),
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  countryCodeText: {
    fontSize: Fonts.h3,
    marginLeft: Margin.small,
    color:Colors.white,
  },
  inputContainer: {
    display: 'flex',
    flex: 1,
  },
  input: {
    marginLeft: Margin.small,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.50)',
    fontSize: Fonts.h3,
    color: Colors.font,
  },
});
