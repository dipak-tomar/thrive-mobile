import {Platform} from 'react-native';

export const fonts = {
  Poppins: {
    400: 'Poppins-Regular',
    500: 'Poppins-Medium',
    600: 'Poppins-SemiBold',
    700: 'Poppins-Bold',
    800: 'Poppins-ExtraBold',
  },
  NunitoSans: {
    300: 'NunitoSans-Light',
    400: 'NunitoSans-Regular',
    600: 'NunitoSans-SemiBold',
    700: 'NunitoSans-Bold',
    900: 'NunitoSans-Black',
  },
};

export const fontWeights = {
  300: Platform.OS === 'ios' ? '300' : null,
  400: Platform.OS === 'ios' ? '400' : null,
  500: Platform.OS === 'ios' ? '500' : null,
  600: Platform.OS === 'ios' ? '600' : null,
  700: Platform.OS === 'ios' ? '700' : null,
  800: Platform.OS === 'ios' ? '800' : null,
  900: Platform.OS === 'ios' ? '900' : null,
};
