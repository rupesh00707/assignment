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
    marginTop: Margin.small,
  },
  label: {
    fontSize: Fonts.h3,
    fontFamily: Fonts.regular,
    color: Colors.whiteLight,
  },
  input: {
    width: '100%',
    fontSize: Fonts.h3,
    borderBottomWidth: 1,
    borderBottomColor: Colors.whiteLight,
  },
});
