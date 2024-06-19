import {Box, HStack, Image, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import ThriveLogo from '../../Assets/images/thrive_logo.svg';
import DashedVerticalLine from '../../Assets/DashedVerticalLine.svg';

const Notifications = () => {
  return (
    <Box safeArea bgColor={'#F6F0FF'} flex={1}>
      <HStack mt={'4%'} ml={'4%'} alignItems={'center'}>
        <HStack>
          <ThriveLogo />
          <Text color={'#31006F'} fontSize={35} ml={'4%'}>
            Notifications
          </Text>
        </HStack>
      </HStack>
      <ScrollView>
        {[1, 2, 3]?.map(i => {
          return (
            <HStack
              justifyContent={'space-around'}
              backgroundColor={'#F4EBFF'}
              alignItems={'center'}
              padding={4}
              // margin={1}
            >
              <Image
                style={{
                  height: 50,
                  width: 50,
                  resizeMode: 'cover',
                }}
                borderRadius={'full'}
                source={require('../../Assets/images/test_image.png')}
                alt="image"
              />
              <VStack>
                <Text
                  numberOfLines={1}
                  fontWeight={'600'}
                  fontSize={16}
                  fontFamily={'Averta Std'}>
                  Hey, it’s time for lunch
                </Text>
                <Text
                  fontFamily={'Averta Std'}
                  numberOfLines={1}
                  fontWeight={'400'}
                  fontSize={14}
                  color={'#646C7F'}>
                  About {new Date().getMinutes()} m ago
                </Text>
              </VStack>
              <DashedVerticalLine />
            </HStack>
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default Notifications;
