/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  Colors,
  Margin,
  Fonts,
  vw,
  Radius,
} from '../../utilities/variables';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg,
    width: SCREEN_WIDTH,
    minHeight: SCREEN_HEIGHT,
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.accent,
    paddingLeft: Margin.medium,
    paddingBottom: Margin.medium,
  },
  iconContainer: {
    marginLeft: -Margin.small,
    marginTop: Margin.small,
  },
  backIcon: {},
  headingText: {
    fontSize: Fonts.h1,
    color: Colors.fontDark,
    fontWeight: 'bold',
    marginTop: Margin.medium,
  },
  cardContainer: {
    width: '100%',
    height: vw(140),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: Margin.medium,
    paddingHorizontal: Margin.medium,
  },
  buttonContainer: {
    width: '100%',
    height: vw(15),
    marginTop: Margin.medium,
    paddingHorizontal: Margin.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: Colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius.xs,
  },
  buttonText: {
    fontSize: Fonts.h3,
    color: Colors.accent,
    fontWeight: 'bold',
  },
});
