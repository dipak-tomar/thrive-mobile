import {Box, Button, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {fontWeights, fonts} from '../../config/fonts.config';
import BookOpen from '../../Assets/BookOpen.svg';
import NotificationBell from '../../Assets/NotificationBell.svg';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import {TouchableOpacity} from 'react-native';
const Progress = () => {
  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack
        mt={'4%'}
        ml={'4%'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <HStack alignItems={'center'}>
          <ThriveLogo />
          <Text
            color={'#31006F'}
            fontSize={35}
            // width={'50%'}
            fontWeight={fontWeights['700']}
            fontFamily={fonts.Poppins['700']}
            lineHeight={32}
            ml={'4%'}>
            My Progress
          </Text>
        </HStack>
        <HStack>
          <Box>
            <BookOpen />
          </Box>
          <Box>
            <NotificationBell />
          </Box>
        </HStack>
      </HStack>
      <HStack alignItems={'center'} justifyContent={'space-around'} mt={'5%'}>
        <TouchableOpacity
          // onPress={() => signUpUser()}
          style={{
            backgroundColor: '#31006F',
            width: '40%',
            marginHorizontal: '4%',
            marginTop: '4%',
            borderRadius: 35,
            padding: 17,
            alignItems: 'center',
          }}>
          <Text color={'#fff'}>PROGRESS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => signUpUser()}
          style={{
            backgroundColor: '#fff',
            width: '40%',
            marginHorizontal: '4%',
            marginTop: '4%',
            borderRadius: 35,
            borderColor: '#31006F',
            borderWidth: 1,
            padding: 17,
            alignItems: 'center',
          }}>
          <Text color={'#31006F'}>LEADERBOARD</Text>
        </TouchableOpacity>
      </HStack>
      <VStack mt={'10%'} ml={'6%'}>
        <Text color={'#31006F'}>Daily Progress</Text>
      </VStack>
    </Box>
  );
};

export default Progress;
