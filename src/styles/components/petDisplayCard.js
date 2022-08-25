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
    borderBottomColor: 'rgba(255, 255, 255, 0.30)',
    borderBottomWidth: 1,
    paddingBottom: Margin.medium,
    marginVertical: Margin.small,
  },
  imageContainer: {
    width: vw(15),
    height: vw(15),
    borderRadius: vw(15),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  textContainer: {
    display: 'flex',
    flex: 1,
    marginLeft: Margin.small,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: Fonts.h2,
    color: Colors.font,
  },
  subHeadingText: {
    fontSize: Fonts.h3,
    color: Colors.font,
  },
});
