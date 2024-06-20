import {Box, HStack, Text} from 'native-base';
import React, { useState } from 'react';
import {fontWeights, fonts} from '../../config/fonts.config';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import ContinueScreen1 from '../../Assets/ContinueScreen1.svg';
import ContinueScreen2 from '../../Assets/ContinueScreen2.svg';
import {TouchableOpacity, useWindowDimensions} from 'react-native';

const ContinueScrren = () => {
    const [fromLogin] = useState(0)
    const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack width={width} mt={'4%'} px={'4%'} alignItems={'center'} >
        <ThriveLogo />
        {/* <Text
          color={'#31006F'}
          fontSize={35}
          fontWeight={fontWeights['700']}
          fontFamily={fonts.Poppins['700']}
          // lineHeight={24}
          ml={'4%'}>
          Login
        </Text> */}
      </HStack>
     {fromLogin !== 0 ? ( <Box alignSelf={"center"} mt={"35%"}>
        <Box alignSelf={'center'} mb={'5%'} >
         <ContinueScreen1 /> 
        </Box>
        <Text
          color={'#31006F'}
          fontSize={30}
          fontWeight={fontWeights['400']}
          fontFamily={fonts.NunitoSans['400']}
          textAlign={'center'}
          // lineHeight={24}
          >
         Welcome Back!! We Missed You💜
        </Text>
      </Box>) : 
      (<Box alignSelf={"center"} mt={"14%"}>
        <Box alignSelf={"center"} >
         <ContinueScreen2 /> 
        </Box>
        <Text
          color={'#31006F'}
          fontSize={24}
          
          fontFamily={fonts.NunitoSans['400']}
          textAlign={'center'}
          mt={'4%'}
          px={'3%'}
          // lineHeight={24}
          >
       Let's personalize your Thrive path with a few taps!
        </Text>
      </Box>)
      }

     {fromLogin !== 0 && <TouchableOpacity
        style={{
          backgroundColor: '#31006F',
          width: '85%',
          marginHorizontal: '6%',
          marginTop: '40%',
          borderRadius: 35,
          padding: 17,
          alignItems: 'center',
        }}>
        <Text color={'#fff'}>Continue to Thrive >>>></Text>
      </TouchableOpacity>}
    </Box>
  );
};

export default ContinueScrren;
