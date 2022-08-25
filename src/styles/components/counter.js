/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {Colors, Radius, Margin, Fonts, vw} from '../../utilities/variables';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vw(11),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.accent,
    padding: 2,
    borderRadius: Radius.xs,
  },
  minusContainer: {
    height: '100%',
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    height: '100%',
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg,
  },
  text:{
    fontSize: Fonts.h3,
    color: Colors.white,
  },
});
