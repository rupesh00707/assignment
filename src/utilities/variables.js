/* eslint-disable */

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Dimensions, StatusBar } from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('screen').height

export const vw = amount => {
  return wp(amount + '%')
}

export const vh = amount => {
  return hp(amount + '%')
}

export const Margin = {
  xs: vw(1.5),
  small: vw(2.5),
  medium: vw(5),
  large: vw(7.5),
  xl: vw(15),
  xxl: vw(30),
}

export const Fonts = {
  reg: 'Nunito-Regular',
  semi: 'Nunito-SemiBold',
  bold: 'Nunito-ExtraBold',
  italic: 'SemiBoldItalic',
  h1: vw(7),
  h2: vw(6),
  h3: vw(4),
  h4: vw(3),
  h5: vw(2),
  h6: vw(1),
}

export const Radius = {
  xs: vw(1.5),
  small: vw(2),
  medium: vw(3.5),
  large: vw(5),
  xl: vw(7.5),
}

export const Colors = {
  white: '#fff',
  whiteLight:'rgba(255, 255, 255, 0.50)',
  black: '#000',
  bg: '#393c4b',
  bgLight: '#464857',
  font: '#fff',
  fontDark:'#393c4b',
  accent: '#38B2AC',

 
}
