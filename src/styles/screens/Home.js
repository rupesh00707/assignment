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
});
