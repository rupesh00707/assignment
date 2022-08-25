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
    paddingHorizontal: Margin.medium,
    paddingBottom: Margin.medium,
  },
  iconContainer: {
    marginLeft: -Margin.small,
    marginTop: Margin.small,
  },
  backIcon: {},
  headingText: {
    fontSize: Fonts.h1,
    color: Colors.white,
    fontWeight: 'bold',
    marginTop: Margin.small,
  },
  subHeadingText: {
    fontSize: Fonts.h3,
    color: Colors.white,
    marginTop: Margin.small,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: Margin.medium,
    marginTop: Margin.medium,
  },
  ageContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ageHeadingText: {
    fontSize: Fonts.h3,
    color: Colors.whiteLight,
    marginTop: Margin.medium,
  },
  counter1: {
    width: vw(30),
    marginTop: Margin.medium,
  },
  counterLabelContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Margin.small,
  },
  counterLabel: {
    fontSize: Fonts.h3,
    color: Colors.white,
  },
  andText: {
    fontSize: Fonts.h2,
    color: Colors.white,
    marginHorizontal: Margin.medium,
  },
  checkBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Margin.small,
    paddingVertical: 3,
  },
  checkBoxText: {
    fontSize: Fonts.h2,
    color: Colors.white,
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: Margin.xl,
  },
  button: {
    width: vw(25),
    height: vw(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius.small,
    backgroundColor: Colors.bgLight,
  },
  buttonText: {
    fontSize: Fonts.h3,
    color: Colors.white,
  },
  buttonIcon: {
    marginTop: Margin.xs / 2,
  },
});
