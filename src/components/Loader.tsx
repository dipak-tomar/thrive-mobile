import {Box, Center, Spinner, Text} from 'native-base';
import React from 'react';
import {Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
  height?: number;
}
export function Loader({height}: Props) {
  return (
    <Center
      position={'absolute'}
      zIndex={2}
      width={windowWidth}
      backgroundColor={'#F6F6F7'}
      opacity={Platform.OS === 'android' ? 0.9 : 0.8}
      flex={1}
      top={height ? '-20%' : '-10%'}
      height={height ? height : windowHeight}>
      {/* <LottieView
        source={require('@/Assets/LoadingIcon.json')}
        autoPlay
        style={{
          width: 180,
        }}
      /> */}
      <Spinner accessibilityLabel="Loading posts" />
      <Box
        position={'absolute'}
        height={80}
        zIndex={1}
        justifyContent={'center'}
        pt={'85%'}>
        <Text color="#31006F" fontSize="md">
          Please wait...
        </Text>
      </Box>
    </Center>
  );
}
