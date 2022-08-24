/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {Colors,Radius, Margin, Fonts, vw} from '../../utilities/variables';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vw(12),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bgLight,
    borderRadius: Radius.xs,
  },
  text:{
    fontSize: Fonts.h3,
    opacity: 0.7,
  }
});
